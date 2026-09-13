import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const nim = searchParams.get('nim');

  if (!nim) {
    return NextResponse.json({ error: 'NIM is required' }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // We use the service role key here to securely bypass RLS and avoid exposing it to the frontend
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseServiceKey) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // Convert NIM to uppercase for case-insensitive matching
    const uppercaseNim = nim.toUpperCase().trim();

    const { data, error } = await supabase
      .from('internship_results')
      .select('nim, divisi, tim')
      .ilike('nim', uppercaseNim)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // Not found - meaning not accepted
        return NextResponse.json({ 
          status: 'tidak_lolos' 
        });
      }
      throw error;
    }

    if (data) {
      // Found - accepted!
      return NextResponse.json({
        status: 'lolos',
        divisi: data.divisi,
        tim: data.tim
      });
    }

  } catch (err) {
    console.error('Error fetching status:', err);
    return NextResponse.json({ error: 'Internal server error', details: err.message }, { status: 500 });
  }
}
