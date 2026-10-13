"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InternshipForm from '../../components/InternshipForm';

const TEMPLATE_LINK = 'https://drive.google.com/drive/folders/1rNyjm8HlJvqKaYiYQU2Y-zcPvUj-UblL';

const milestones = [
  {
    num: '01',
    date: '1 – 6 September',
    title: 'Pendaftaran',
    status: 'active',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    desc: 'Lengkapi berkas dan isi formulir pendaftaran online.',
    requirements: [
      'Upload twibbon ke Instagram sebelum mendaftar',
      'Buat CV menggunakan template yang tersedia',
    ],
  },
  {
    num: '02',
    date: '7 – 9 September',
    title: 'Screening',
    status: 'upcoming',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    desc: 'Pilih jadwal screening yang tersedia dan siapkan dirimu untuk sesi wawancara.',
  },
  {
    num: '03',
    date: '12 September',
    title: 'Pengumuman',
    status: 'upcoming',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    desc: 'Hasil seleksi akan diumumkan melalui website dan media sosial resmi SRT.',
  },
];

export default function InternshipPage() {
  return (
    <main>
      <Navbar />

      {/* ── Timeline Section ── */}
      <section className="tl-section">
        {/* Background glow blobs */}
        <div className="tl-blob tl-blob-1" />
        <div className="tl-blob tl-blob-2" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ maxWidth: '560px', margin: '0 auto 64px auto', textAlign: 'center' }}>
            <span className="tl-eyebrow">Jadwal Seleksi</span>
            <h2 className="section-title" style={{ marginTop: '12px' }}>TIMELINE</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto 20px auto', borderRadius: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Catat tanggal pentingmu dan persiapkan dirimu sebaik mungkin.
            </p>
          </div>

          {/* Cards grid */}
          <div className="tl-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className={`tl-card ${m.status}`}>
                {/* Top row */}
                <div className="tl-card-top">
                  <span className="tl-num">{m.num}</span>
                  <span className={`tl-badge ${m.status}`}>{m.status === 'active' ? 'Berlangsung' : 'Segera'}</span>
                </div>

                {/* Icon */}
                <div className={`tl-icon-wrap ${m.status}`}>
                  {m.icon}
                </div>

                {/* Content */}
                <h3 className={`tl-title ${m.status}`}>{m.title}</h3>
                <p className="tl-date">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px', flexShrink: 0 }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {m.date}
                </p>
                <p className="tl-desc">{m.desc}</p>

                {/* Requirements (active only) */}
                {m.requirements && (
                  <div className="tl-requirements">
                    <p className="tl-req-label">Persiapkan:</p>
                    <ul>
                      {m.requirements.map((r, i) => (
                        <li key={i}>
                          <span className="tl-req-dot" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <a href={TEMPLATE_LINK} target="_blank" rel="noopener noreferrer" className="tl-download-btn">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Download Template Twibbon &amp; CV
                    </a>
                  </div>
                )}

                {/* Upcoming lock overlay */}
                {m.status === 'upcoming' && (
                  <div className="tl-lock">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Segera dibuka
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Form Section ── */}
      <section id="registration-form" style={{ padding: '80px 0 120px 0', background: '#000', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <h2 className="section-title">FORM PENDAFTARAN</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }} />
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
              Isi data dengan lengkap dan jujur. Pastikan semua berkas sudah disiapkan sebelum mendaftar.
            </p>
          </div>
          <InternshipForm />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* ── Section ── */
        .tl-section {
          padding: 120px 0 90px 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }

        /* Ambient blobs */
        .tl-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }
        .tl-blob-1 {
          width: 500px; height: 500px;
          background: rgba(0, 85, 255, 0.12);
          top: -100px; left: -150px;
        }
        .tl-blob-2 {
          width: 400px; height: 400px;
          background: rgba(0, 180, 216, 0.1);
          bottom: -80px; right: -100px;
        }

        /* Eyebrow */
        .tl-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #00b4d8;
          display: block;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
        }

        /* ── Grid ── */
        .tl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        /* ── Card ── */
        .tl-card {
          position: relative;
          border-radius: 20px;
          padding: 28px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tl-card.active {
          background: rgba(0, 180, 216, 0.06);
          border: 1px solid rgba(0, 229, 255, 0.35);
          box-shadow: 0 0 40px rgba(0, 180, 216, 0.15), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .tl-card.upcoming {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .tl-card.active:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 60px rgba(0, 180, 216, 0.25), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .tl-card.upcoming:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.12);
        }

        /* Top row */
        .tl-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .tl-num {
          font-size: 2rem;
          font-weight: 900;
          color: rgba(255,255,255,0.07);
          letter-spacing: -1px;
          line-height: 1;
        }

        .tl-card.active .tl-num {
          background: linear-gradient(135deg, #0055ff, #00e5ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 1;
          color: transparent;
        }

        /* Badge */
        .tl-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .tl-badge.active {
          background: rgba(0, 229, 255, 0.15);
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.3);
        }
        .tl-badge.upcoming {
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.3);
          border: 1px solid rgba(255,255,255,0.08);
        }

        /* Icon */
        .tl-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .tl-icon-wrap.active {
          background: linear-gradient(135deg, rgba(0,85,255,0.25), rgba(0,180,216,0.2));
          color: #00e5ff;
          box-shadow: 0 0 20px rgba(0,180,216,0.2);
        }
        .tl-icon-wrap.upcoming {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.25);
        }

        /* Title */
        .tl-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          letter-spacing: 0.3px;
        }
        .tl-title.active { color: #fff; }
        .tl-title.upcoming { color: rgba(255,255,255,0.4); }

        /* Date */
        .tl-date {
          display: flex;
          align-items: center;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          margin: 0 0 12px 0;
          letter-spacing: 0.3px;
        }
        .tl-card.active .tl-date { color: rgba(0, 229, 255, 0.7); }

        /* Desc */
        .tl-desc {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin: 0 0 0 0;
          flex: 1;
        }
        .tl-card.active .tl-desc { color: rgba(255,255,255,0.6); }

        /* Requirements */
        .tl-requirements {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(0,229,255,0.12);
        }

        .tl-req-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(0,229,255,0.6);
          margin: 0 0 10px 0;
        }

        .tl-requirements ul {
          list-style: none;
          padding: 0;
          margin: 0 0 16px 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .tl-requirements li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }

        .tl-req-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00b4d8;
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* Download button */
        .tl-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0,85,255,0.2), rgba(0,180,216,0.2));
          border: 1px solid rgba(0,180,216,0.3);
          color: #00e5ff;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .tl-download-btn:hover {
          background: linear-gradient(135deg, rgba(0,85,255,0.35), rgba(0,180,216,0.35));
          border-color: rgba(0,229,255,0.5);
          box-shadow: 0 0 20px rgba(0,180,216,0.2);
          transform: translateY(-1px);
        }

        /* Lock */
        .tl-lock {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.3px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .tl-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }
      `}</style>
    </main>
  );
}
