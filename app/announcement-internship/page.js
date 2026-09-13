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
                <a
                  href="https://chat.whatsapp.com/FxzpetAXaF4BCUlh6aLK3A?s=cl&p=i&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '24px',
                    padding: '12px 24px',
                    background: '#25D366',
                    color: '#fff',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825.001 6.938 3.113 6.939 6.938-.001 3.825-3.114 6.938-6.939 6.938z" />
                    </svg>
                    Join Grup WhatsApp
                  </span>
                </a>
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
