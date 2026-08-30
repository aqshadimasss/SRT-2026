"use client";

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function InternshipForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    nim: '',
    jurusan: '',
    angkatan: '',
    no_telp: '',
    alasan_gabung: '',
    pilihan_1: '',
    sub_pilihan_1: '',
    alasan_1: '',
    pilihan_2: '',
    sub_pilihan_2: '',
    alasan_2: '',
    cv_url: '', // will be filled after upload
    bukti_url: ''
  });

  const [cvFile, setCvFile] = useState(null);

  const divisiOptions = [
    'Secretary Manager', 'Financial Manager', 'HRD', 'Public Relation', 
    'Sponsorship', 'Creative Media', 'Team Manager', 
    'KRAI', 'KRSRI', 'KRTMI', 'KRTI-RP', 'KRTI-FW', 'KRTI-LELA'
  ];

  const technicalDivisions = ['KRAI', 'KRSRI', 'KRTMI', 'KRTI-RP', 'KRTI-FW', 'KRTI-LELA'];
  const subDivisiOptions = ['Mechanic', 'Electronic', 'Programmer/System'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset sub_pilihan if main pilihan changes to a non-technical division
      ...(name === 'pilihan_1' && !technicalDivisions.includes(value) ? { sub_pilihan_1: '' } : {}),
      ...(name === 'pilihan_2' && !technicalDivisions.includes(value) ? { sub_pilihan_2: '' } : {})
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Format file harus PDF!');
        e.target.value = null;
        setCvFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        alert('Ukuran file maksimal 5MB!');
        e.target.value = null;
        setCvFile(null);
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!cvFile) {
        throw new Error("Mohon upload file CV terlebih dahulu.");
      }

      // 1. Upload CV to Supabase Storage
      const fileExt = cvFile.name.split('.').pop();
      const fileName = `${Date.now()}_${formData.nim}.${fileExt}`;
      const filePath = `cv/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('cv_uploads')
        .upload(filePath, cvFile);

      if (uploadError) {
        throw new Error(`Gagal upload CV: ${uploadError.message}`);
      }

      // Get public URL for the uploaded CV
      const { data: { publicUrl } } = supabase.storage
        .from('cv_uploads')
        .getPublicUrl(filePath);

      // 2. Insert data to Supabase Database
      const { error: insertError } = await supabase
        .from('internship_registrations')
        .insert([
          {
            email: formData.email,
            nama: formData.nama,
            nim: formData.nim,
            jurusan: formData.jurusan,
            angkatan: formData.angkatan,
            no_telp: formData.no_telp,
            alasan_gabung: formData.alasan_gabung,
            pilihan_1: formData.pilihan_1,
            sub_pilihan_1: formData.sub_pilihan_1 || null,
            alasan_1: formData.alasan_1,
            pilihan_2: formData.pilihan_2 || null,
            sub_pilihan_2: formData.sub_pilihan_2 || null,
            alasan_2: formData.alasan_2 || null,
            cv_url: publicUrl,
            bukti_url: formData.bukti_url
          }
        ]);

      if (insertError) {
        throw new Error(`Gagal menyimpan data pendaftaran: ${insertError.message}`);
      }

      setSuccess(true);
      // Reset form (optional)
      setFormData({
        email: '', nama: '', nim: '', jurusan: '', angkatan: '', no_telp: '',
        alasan_gabung: '', pilihan_1: '', sub_pilihan_1: '', alasan_1: '',
        pilihan_2: '', sub_pilihan_2: '', alasan_2: '', cv_url: '', bukti_url: ''
      });
      setCvFile(null);
      // Reset file input UI manually if needed, or rely on state.
      document.getElementById('cv-upload').value = null;

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ── Links ──
  const WHATSAPP_LINK   = 'https://chat.whatsapp.com/IZDfV2jjqBv124CtFVjnyV?s=qt&p=i&mlu=4';
  const SCREENING_LINK  = 'https://docs.google.com/spreadsheets/d/1nZyyw7AbqYpoLg_2TU9kVedzQHwT5C5TdPSzc5MdGxU/edit?usp=sharing';

  if (success) {
    return (
      <div className="form-container glass" style={{ textAlign: 'center', padding: '64px 40px' }}>

        {/* Checkmark Icon */}
        <div style={{
          width: '88px', height: '88px',
          background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)',
          border: '2px solid rgba(0,255,136,0.35)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px auto',
          boxShadow: '0 0 30px rgba(0,255,136,0.25)'
        }}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.5px' }}>
          Terima Kasih! 🎉
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', marginBottom: '48px', maxWidth: '480px', margin: '0 auto 48px auto', lineHeight: 1.7 }}>
          Pendaftaranmu telah kami terima. Selesaikan dua langkah berikut agar proses seleksimu berjalan lancar.
        </p>

        {/* Step Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '460px', margin: '0 auto 40px auto', textAlign: 'left' }}>

          {/* Step 1 — WhatsApp */}
          <div style={{
            background: 'rgba(37,211,102,0.06)',
            border: '1px solid rgba(37,211,102,0.2)',
            borderRadius: '16px',
            padding: '24px 28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>💬</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#25d366' }}>Langkah 1</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '18px', lineHeight: 1.6 }}>
              Bergabunglah ke grup WhatsApp resmi SRT Internship 2026 untuk mendapatkan informasi lebih lanjut.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <button className="btn-wa" style={{ width: '100%' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.989 0C5.368 0 0 5.364 0 11.98c0 2.11.554 4.088 1.521 5.802L.057 23.979l6.351-1.648A11.954 11.954 0 0011.989 24C18.61 24 24 18.636 24 12.02 24 5.364 18.61 0 11.989 0zm0 21.818c-1.843 0-3.557-.494-5.026-1.354l-.361-.214-3.742.972.997-3.632-.235-.373a9.752 9.752 0 01-1.509-5.237c0-5.398 4.407-9.793 9.836-9.793 5.43 0 9.836 4.395 9.836 9.793 0 5.397-4.406 9.838-9.836 9.838z"/></svg>
                Gabung Grup WhatsApp
              </button>
            </a>
          </div>

          {/* Step 2 — Screening */}
          <div style={{
            background: 'rgba(0,180,216,0.06)',
            border: '1px solid rgba(0,180,216,0.2)',
            borderRadius: '16px',
            padding: '24px 28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.4rem' }}>📅</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: '#00b4d8' }}>Langkah 2</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '18px', lineHeight: 1.6 }}>
              Pilih jadwal screening yang sesuai dengan ketersediaanmu melalui link berikut.
            </p>
            <a href={SCREENING_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
              <button className="btn-screening" style={{ width: '100%' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Pilih Jadwal Screening
              </button>
            </a>
          </div>
        </div>

        {/* Register again */}
        <button
          onClick={() => setSuccess(false)}
          style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline', marginTop: '4px' }}
        >
          Isi ulang formulir
        </button>

        <style jsx>{`
          .btn-wa {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 13px 24px;
            border-radius: 10px;
            border: none;
            background: linear-gradient(135deg, #128c3f, #25d366);
            color: #fff;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(37,211,102,0.3);
          }
          .btn-wa:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 35px rgba(37,211,102,0.5);
          }
          .btn-screening {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 13px 24px;
            border-radius: 10px;
            border: 2px solid transparent;
            background: linear-gradient(135deg, #0055ff, #00b4d8, #00e5ff) padding-box,
                        linear-gradient(135deg, #0055ff, #00e5ff) border-box;
            color: #fff;
            font-weight: 700;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0,180,216,0.3);
          }
          .btn-screening:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 35px rgba(0,180,216,0.5);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="form-container glass">
      <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: '#fff', textAlign: 'center' }}>Form Pendaftaran</h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '40px' }}>Mohon isi data dengan jujur dan teliti.</p>

      {error && (
        <div style={{ background: 'rgba(255, 50, 50, 0.1)', border: '1px solid rgba(255,50,50,0.3)', padding: '16px', borderRadius: '8px', color: '#ff6b6b', marginBottom: '32px', fontSize: '0.9rem' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* DATA DIRI */}
        <div className="form-section">
          <h3 className="section-label">1. Data Diri</h3>
          
          <div className="input-group">
            <label>Email *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="emailmu@student.unsoed.ac.id" />
          </div>

          <div className="input-group">
            <label>Nama Lengkap *</label>
            <input type="text" name="nama" required value={formData.nama} onChange={handleInputChange} placeholder="Nama lengkap sesuai KTP/KTM" />
          </div>

          <div className="input-group">
            <label>NIM *</label>
            <input type="text" name="nim" required value={formData.nim} onChange={handleInputChange} placeholder="Contoh: H1A023000" />
          </div>

          <div className="input-grid">
            <div className="input-group">
              <label>Jurusan/Fakultas *</label>
              <input type="text" name="jurusan" required value={formData.jurusan} onChange={handleInputChange} placeholder="Contoh: Teknik Elektro / Teknik" />
            </div>
            <div className="input-group">
              <label>Angkatan *</label>
              <input type="text" name="angkatan" required value={formData.angkatan} onChange={handleInputChange} placeholder="Contoh: 2024" pattern="[0-9]{4}" maxLength={4} inputMode="numeric" />
            </div>
          </div>

          <div className="input-group">
            <label>No. Telpon / WhatsApp *</label>
            <input type="text" name="no_telp" required value={formData.no_telp} onChange={handleInputChange} placeholder="Contoh: 08123456789" />
          </div>

          <div className="input-group">
            <label>Alasan Ingin Bergabung di UKM SRT *</label>
            <textarea name="alasan_gabung" required rows="4" value={formData.alasan_gabung} onChange={handleInputChange} placeholder="Ceritakan motivasi utamamu..."></textarea>
          </div>
        </div>

        {/* PILIHAN 1 */}
        <div className="form-section">
          <h3 className="section-label">2. Pilihan Divisi Prioritas (Pilihan 1)</h3>
          
          <div className="input-group">
            <label>Pilihan Divisi 1 *</label>
            <select name="pilihan_1" required value={formData.pilihan_1} onChange={handleInputChange}>
              <option value="">-- Pilih Divisi --</option>
              {divisiOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          {technicalDivisions.includes(formData.pilihan_1) && (
            <div className="input-group animate-fade-in">
              <label>Sub Divisi Pilihan 1 *</label>
              <select name="sub_pilihan_1" required value={formData.sub_pilihan_1} onChange={handleInputChange}>
                <option value="">-- Pilih Sub Divisi --</option>
                {subDivisiOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          )}

          <div className="input-group">
            <label>Alasan Mendaftar Pilihan 1 *</label>
            <textarea name="alasan_1" required rows="3" value={formData.alasan_1} onChange={handleInputChange} placeholder="Kenapa kamu memilih divisi ini?"></textarea>
          </div>
        </div>

        {/* PILIHAN 2 */}
        <div className="form-section">
          <h3 className="section-label">3. Pilihan Divisi Alternatif (Pilihan 2) - Opsional</h3>
          
          <div className="input-group">
            <label>Pilihan Divisi 2</label>
            <select name="pilihan_2" value={formData.pilihan_2} onChange={handleInputChange}>
              <option value="">-- Tidak Memilih Alternatif --</option>
              {divisiOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          {technicalDivisions.includes(formData.pilihan_2) && (
            <div className="input-group animate-fade-in">
              <label>Sub Divisi Pilihan 2 *</label>
              <select name="sub_pilihan_2" required value={formData.sub_pilihan_2} onChange={handleInputChange}>
                <option value="">-- Pilih Sub Divisi --</option>
                {subDivisiOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          )}

          {formData.pilihan_2 && (
            <div className="input-group animate-fade-in">
              <label>Alasan Mendaftar Pilihan 2 *</label>
              <textarea name="alasan_2" required rows="3" value={formData.alasan_2} onChange={handleInputChange} placeholder="Kenapa memilih alternatif ini?"></textarea>
            </div>
          )}
        </div>

        {/* BERKAS */}
        <div className="form-section">
          <h3 className="section-label">4. Berkas Pendukung</h3>
          
          <div className="input-group">
            <label>Upload CV (Wajib PDF, Maks 5MB) *</label>
            <input type="file" id="cv-upload" accept="application/pdf" required onChange={handleFileChange} />
          </div>

          <div className="input-group">
            <label>Link Bukti Upload Twibbon & Pamflet (GDrive) *</label>
            <input type="url" name="bukti_url" required value={formData.bukti_url} onChange={handleInputChange} placeholder="https://drive.google.com/..." />
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '6px', display: 'block' }}>Pastikan akses link tidak di-private (Anyone with the link).</span>
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn-submit">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          background: rgba(10, 10, 25, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .form-section {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.03);
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
        }

        .section-label {
          font-size: 1.1rem;
          color: var(--accent-primary);
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 12px;
        }

        .input-group {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        label {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 8px;
          font-weight: 600;
        }

        input, select, textarea {
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 14px 16px;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
          background: rgba(0,0,0,0.5);
        }

        input[type="file"] {
          padding: 10px;
        }

        input[type="file"]::-webkit-file-upload-button {
          background: rgba(255,255,255,0.1);
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
          margin-right: 12px;
          font-weight: 600;
        }

        select option {
          background: #061129;
          color: #fff;
        }


        @media (max-width: 768px) {
          .input-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .form-container {
            padding: 24px 16px;
          }
          .form-section {
            padding: 20px 16px;
          }
        }
      `}</style>
    </div>
  );
}
