"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AnnouncementInternshipPage() {
  const [nim, setNim] = useState('');
  const [status, setStatus] = useState(null); // null, 'loading', 'lolos', 'tidak_lolos', 'error'
  const [resultData, setResultData] = useState(null);

  const checkStatus = async (e) => {
    e.preventDefault();
    if (!nim.trim()) return;

    setStatus('loading');
    setResultData(null);

    try {
      const res = await fetch(`/api/check-status?nim=${encodeURIComponent(nim)}`);
      
      if (!res.ok) {
        throw new Error('Failed to fetch status');
      }

      const data = await res.json();
      
      if (data.status === 'lolos') {
        setStatus('lolos');
        setResultData({ divisi: data.divisi, tim: data.tim });
      } else if (data.status === 'tidak_lolos') {
        setStatus('tidak_lolos');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main>
      <Navbar />

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

        <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%', position: 'relative', zIndex: 1 }}>

          {/* Eyebrow */}
          <span style={{
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '3px', color: '#00b4d8', display: 'block', marginBottom: '16px',
          }}>
            PENGUMUMAN HASIL
          </span>

          {/* Main heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-0.5px',
            lineHeight: 1.15,
            margin: '0 0 24px 0',
          }}>
            Check Status<br />
            <span style={{
              background: 'linear-gradient(135deg, #0055ff, #00b4d8, #00e5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Internship 2026
            </span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: '40px' }}>
            Masukkan Nomor Induk Mahasiswa (NIM) kamu untuk melihat hasil seleksi.
          </p>

          <form onSubmit={checkStatus} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Contoh: H1A023001"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.03)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                textTransform: 'uppercase'
              }}
              required
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #0055ff, #00b4d8)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
                transition: 'opacity 0.3s ease, transform 0.2s ease',
              }}
            >
              {status === 'loading' ? 'Memeriksa...' : 'Cek Hasil'}
            </button>
          </form>

          {/* Results Area */}
          <div style={{ marginTop: '48px', minHeight: '150px' }}>
            
            {status === 'lolos' && (
              <div style={{
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                borderRadius: '16px',
                padding: '32px 24px',
                animation: 'fadeInUp 0.5s ease forwards'
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '12px' }}>SELAMAT! Kamu Lolos</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Kamu diterima sebagai <strong>{resultData?.divisi}</strong>
                  {resultData?.tim && <span> di tim <strong>{resultData.tim}</strong></span>}. 
                  Kami sangat antusias menyambutmu di keluarga besar Soedirman Robotic Team! Mari berkembang bersama!
                </p>
              </div>
            )}

            {status === 'tidak_lolos' && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '32px 24px',
                animation: 'fadeInUp 0.5s ease forwards'
              }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '12px' }}>Tetap Semangat!</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  Mohon maaf, kamu belum berkesempatan bergabung di SRT Internship kali ini. Jangan berkecil hati, jadikan ini sebagai pengalaman berharga dan terus kembangkan potensimu. Sampai jumpa di kesempatan berikutnya!
                </p>
              </div>
            )}

            {status === 'error' && (
              <p style={{ color: '#ff4444' }}>Terjadi kesalahan saat memeriksa data. Silakan coba lagi nanti.</p>
            )}

          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        input:focus {
          border-color: #00b4d8 !important;
          box-shadow: 0 0 15px rgba(0,180,216,0.2);
        }
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 180, 216, 0.3);
        }
      `}</style>
    </main>
  );
}
