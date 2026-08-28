"use client";


import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import InternshipForm from '../../components/InternshipForm';

export default function InternshipPage() {
  const tracks = [
    {
      title: 'Aviation Electronics & PCB Design',
      duration: '3 Months',
      skills: 'Microcontrollers, Altium/Kicad, Telemetry Transceivers, Lithium Power Distribution',
      desc: 'Master the design of high-current power distribution boards, signal processing filters, and wireless communication links for aerial/ground drones.'
    },
    {
      title: 'Autonomous Systems & Flight Coding',
      duration: '3 Months',
      skills: 'C++, Python, ArduPilot, PID Tuning, Ros2, Computer Vision',
      desc: 'Implement complex autonomous state-machines, PID heading/altitude correction algorithms, and target-tracking vision systems.'
    },
    {
      title: 'Aerodynamics & Composite Manufacturing',
      duration: '3 Months',
      skills: 'SolidWorks, ANSYS CFD, Carbon Fiber Layups, CNC Milling',
      desc: 'Analyze airframe drag quotients, structural load constraints, and learn to fabricate carbon fiber and fiberglass structural hulls.'
    },
    {
      title: 'Creative Media & Corporate PR',
      duration: '3 Months',
      skills: 'Figma, Premiere Pro, Sponsor Deck Writing, Brand Identity',
      desc: 'Build engaging UI designs, premium social videos, and compose highly technical sponsorship pitches to industry allies.'
    }
  ];

  const milestones = [
    { date: '1 – 6 September', title: 'Pendaftaran', status: 'active' },
    { date: '7 – 9 September', title: 'Screening',    status: 'upcoming' },
    { date: '12 September',    title: 'Pengumuman',   status: 'upcoming' },
  ];

  return (
    <main>
      <Navbar />



      {/* Registration Form Section */}
      <section id="registration-form" style={{ padding: '100px 0', background: '#000000', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <h2 className="section-title">FORM PENDAFTARAN</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Isi data dengan lengkap dan jujur. Pastikan semua berkas sudah disiapkan sebelum mendaftar.</p>
          </div>
          <InternshipForm />
        </div>
      </section>



      {/* Selection Timeline */}
      <section style={{ padding: '100px 0 140px 0', background: '#000000', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <h2 className="section-title">TIMELINE</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Catat tanggal pentingmu dan persiapkan dirimu sebaik mungkin.</p>
          </div>

          <div className="timeline-vertical">
            {/* Center line */}
            <div className="timeline-line" />

            {milestones.map((milestone, idx) => (
              <div key={idx} className="timeline-row">
                {/* Left: Date */}
                <div className="timeline-date">{milestone.date}</div>

                {/* Center: Dot */}
                <div className={`timeline-dot ${milestone.status}`} />

                {/* Right: Label */}
                <div className={`timeline-label ${milestone.status}`}>{milestone.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .breadcrumb-link:hover {
          color: var(--accent-primary) !important;
        }

        .btn-hero-cta {
          display: inline-flex;
          align-items: center;
          padding: 18px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 14px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #0077ff, #00b4d8, #00e5ff) padding-box,
                      linear-gradient(135deg, #0077ff, #00e5ff) border-box;
          color: #fff;
          cursor: pointer;
          letter-spacing: 0.5px;
          box-shadow: 0 0 30px rgba(0, 180, 216, 0.5), 0 0 60px rgba(0, 100, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-hero-cta:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 0 50px rgba(0, 180, 216, 0.7), 0 0 100px rgba(0, 100, 255, 0.3);
        }

        .btn-hero-cta:hover::before {
          opacity: 1;
        }

        .btn-hero-cta:active {
          transform: translateY(-1px) scale(1.01);
        }
        
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }
        
        .track-card {
          padding: 36px 28px;
          background: rgba(10, 10, 25, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--border-radius);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        
        .track-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 180, 216, 0.3);
          box-shadow: 0 15px 40px rgba(0, 180, 216, 0.15);
        }
        
        .track-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent-primary);
        }
        
        .track-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        
        .track-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        /* ===== Vertical Timeline ===== */
        .timeline-vertical {
          position: relative;
          max-width: 560px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: linear-gradient(to bottom, #0055ff, #00b4d8, rgba(0,180,216,0.15));
          border-radius: 2px;
          z-index: 0;
        }

        .timeline-row {
          display: grid;
          grid-template-columns: 1fr 28px 1fr;
          align-items: center;
          gap: 20px;
          padding: 22px 0;
          position: relative;
          z-index: 1;
        }

        .timeline-date {
          text-align: right;
          font-size: 1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 0.2px;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00b4d8;
          border: 2px solid #000;
          box-shadow: 0 0 12px rgba(0, 180, 216, 0.7);
          justify-self: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .timeline-dot.active {
          width: 18px;
          height: 18px;
          background: #00e5ff;
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.9), 0 0 40px rgba(0, 180, 216, 0.4);
        }

        .timeline-dot.upcoming {
          background: rgba(0, 180, 216, 0.3);
          box-shadow: 0 0 8px rgba(0, 180, 216, 0.2);
          border-color: rgba(0, 180, 216, 0.4);
        }

        .timeline-label {
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.55);
          letter-spacing: 0.2px;
        }

        .timeline-label.active {
          color: #00e5ff;
          font-weight: 700;
          text-shadow: 0 0 12px rgba(0, 229, 255, 0.5);
        }

        @media (max-width: 576px) {
          .timeline-date, .timeline-label {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </main>
  );
}
