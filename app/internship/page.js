"use client";

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    { phase: 'Phase 1', title: 'Open Registration', date: 'Dec 01 - Dec 15, 2025', status: 'Completed' },
    { phase: 'Phase 2', title: 'Administrative Selection', date: 'Dec 16 - Dec 20, 2025', status: 'Completed' },
    { phase: 'Phase 3', title: 'Technical Interview', date: 'Dec 22 - Dec 28, 2025', status: 'Completed' },
    { phase: 'Phase 4', title: 'Announcement', date: 'Jan 02, 2026', status: 'Active' }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at center, #061129 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        {/* Supersonic abstract glowing background */}
        <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Events</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Internship</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            STUDENT INTERNSHIP
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Soedirman Robotic Team Research Program 2026
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto 40px auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', maxWidth: '650px' }}>
            A rigorous multi-disciplinary training sandbox for passionate university engineers to build production-grade flight electronics, aerodynamic composites, and AI drone codebases.
          </p>

          {/* CTA Action Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link href="/announcement">
              <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', borderRadius: '12px', border: 'none', background: 'var(--accent-gradient)', fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 25px rgba(0, 180, 216, 0.4)' }}>
                Check Selection Results <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <h2 className="section-title">ENGINEERING TRACKS</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Acquire technical mastery and practical flight hours across our core operational learning partitions.</p>
          </div>

          <div className="tracks-grid">
            {tracks.map((track) => (
              <div key={track.title} className="track-card glass">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div className="track-tag">Robotics Sandbox</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{track.duration}</div>
                </div>
                <h3 className="track-title">{track.title}</h3>
                <p className="track-desc">{track.desc}</p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-primary)', fontWeight: 700, display: 'block', marginBottom: '6px' }}>Target Skills</span>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{track.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Timeline */}
      <section style={{ padding: '100px 0 140px 0', background: '#000000', position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto 60px auto', textAlign: 'center' }}>
            <h2 className="section-title">SELECTION ROADMAP</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Track registration deadlines, technical screenings, and qualification windows.</p>
          </div>

          <div className="timeline-horizontal">
            {milestones.map((milestone, idx) => (
              <div key={milestone.phase} className="timeline-node">
                <div className={`node-marker ${milestone.status === 'Active' ? 'active' : ''}`}>
                  {milestone.status === 'Completed' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <span style={{ fontSize: '0.8rem', fontWeight: 800 }}>!</span>
                  )}
                </div>
                <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginTop: '16px', marginBottom: '4px' }}>{milestone.title}</h4>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>{milestone.date}</span>
                <span className={`node-status-text ${milestone.status.toLowerCase()}`}>{milestone.status}</span>
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
        
        .timeline-horizontal {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 32px;
          position: relative;
        }
        
        .timeline-horizontal::before {
          content: '';
          position: absolute;
          top: 20px; left: 40px; right: 40px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          z-index: 1;
        }
        
        .timeline-node {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        
        .node-marker {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #020208;
          border: 2px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 15px rgba(0,0,0,0.8);
          transition: all 0.3s ease;
        }
        
        .node-marker.active {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(0, 180, 216, 0.4);
          background: rgba(0, 180, 216, 0.1);
        }
        
        .node-status-text {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          display: inline-block;
          margin-top: 6px;
        }
        
        .node-status-text.completed {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .node-status-text.active {
          color: var(--accent-primary);
        }
        
        @media (max-width: 768px) {
          .tracks-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .timeline-horizontal {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: left;
          }
          
          .timeline-horizontal::before {
            display: none;
          }
          
          .timeline-node {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            text-align: left;
          }
          
          .node-marker {
            margin: 0;
            flex-shrink: 0;
          }
          
          .timeline-node h4 {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
