"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function InternshipPage() {
  return (
    <main>
      <Navbar />

      {/* Thank You Section */}
      <section style={{
        minHeight: '85vh',
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px',
      }}>
        {/* Ambient glow blobs */}
        <div style={{
          position: 'absolute', width: '500px', height: '500px',
          background: 'rgba(0, 85, 255, 0.1)', borderRadius: '50%',
          filter: 'blur(120px)', top: '-100px', left: '-150px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          background: 'rgba(0, 180, 216, 0.08)', borderRadius: '50%',
          filter: 'blur(120px)', bottom: '-80px', right: '-100px', pointerEvents: 'none',
        }} />

        <div style={{ textAlign: 'center', maxWidth: '580px', position: 'relative', zIndex: 1 }}>

          {/* Checkmark icon */}
          <div style={{
            width: '96px', height: '96px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
            border: '1.5px solid rgba(0,229,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 36px auto',
            boxShadow: '0 0 40px rgba(0,180,216,0.2)',
          }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
              stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Eyebrow */}
          <span style={{
            fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '3px', color: '#00b4d8', display: 'block', marginBottom: '16px',
          }}>
            SRT Internship 2026
          </span>

          {/* Main heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
            margin: '0 0 24px 0',
          }}>
            Terima Kasih<br />
            <span style={{
              background: 'linear-gradient(135deg, #0055ff, #00b4d8, #00e5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Para Pendaftar
            </span>
          </h1>

          {/* Divider */}
          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #0055ff, #00e5ff)',
            borderRadius: '2px', margin: '0 auto 28px auto',
          }} />

          {/* Subtitle */}
          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.9rem',
            lineHeight: 1.8,
            margin: 0,
          }}>
            Hasil akan diumumkan setelah proses screening dan evaluasi selesai di halaman ini.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
