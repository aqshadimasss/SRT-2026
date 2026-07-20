"use client";

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function OprecPage() {
  const divisions = [
    {
      name: 'KRI Teams Division',
      classes: 'Blakasutha, Satria, Yudishtira',
      desc: 'Build high-performance ground systems, walking wheeled quadrupeds, search & rescue humanoid systems, and ABU Robocon custom mechanical constructs.'
    },
    {
      name: 'KRTI Teams Division',
      classes: 'Biantara Fixed Wing, Racing Plane',
      desc: 'Design composite aerospace models, execute automated navigation schemes, run CFD aerodynamics, and telemetry software interfaces.'
    },
    {
      name: 'Creative Media Division',
      classes: 'UI/UX, Videography, Graphic Branding',
      desc: 'Compose stunning corporate feeds, craft premium video reels, design visual user interfaces, and direct overall branding layout structures.'
    },
    {
      name: 'Public Relations & Sponsors',
      classes: 'External Networking, Sponsorship decks',
      desc: 'Connect the team with government bodies, build external networks with other university research centers, and pitch to premium corporate sponsors.'
    }
  ];

  const requirements = [
    'Active student of Jenderal Soedirman University (all engineering or scientific backgrounds welcome).',
    'High curiosity in automated robotics, flight systems, embedded systems, design, or team operations.',
    'Commitment to attend regular research laboratory sessions, training tracks, and build schedules.',
    'Willingness to learn, cooperate in cross-functional teams, and represent UNSOED in national tournaments.'
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
        background: 'radial-gradient(circle at center, #0e051d 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        {/* Glowing abstract graphic */}
        <div style={{ position: 'absolute', bottom: '10%', right: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(114, 9, 183, 0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Events</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Open Recruitment</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            OPEN RECRUITMENT
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Join the Soedirman Robotic Team Ranks
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto 40px auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', maxWidth: '650px' }}>
            We are looking for active, passionate tech pioneers and operational minds to represent our university in national contests. Ready to shape the future of robotics?
          </p>

          {/* CTA Action Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link href="/announcement-oprec">
              <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', borderRadius: '12px', border: 'none', background: 'var(--accent-gradient)', fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 25px rgba(114, 9, 183, 0.4)' }}>
                Check Selection Results <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div className="animate-fade-in">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>ELIGIBILITY & RULES</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px', fontSize: '0.95rem', lineHeight: 1.6 }}>Our recruitment program welcomes candidates across all technical proficiency levels. We prioritize commitment, a strong work ethic, and a cooperative mindset.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {requirements.map((req, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div className="req-bullet">{idx + 1}</div>
                    <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>{req}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="divisions-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Available Divisions</h3>
                <div style={{ width: '40px', height: '2px', background: 'var(--accent-primary)', borderRadius: '1px' }}></div>
                
                {divisions.map((div) => (
                  <div key={div.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.05rem', fontWeight: 700 }}>{div.name}</h4>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{div.classes}</span>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '4px' }}>{div.desc}</p>
                  </div>
                ))}
              </div>
            </div>
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
        
        .req-bullet {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(114, 9, 183, 0.1);
          border: 1px solid rgba(114, 9, 183, 0.3);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.7rem;
          }
          .divisions-block {
            margin-top: 20px;
          }
        }
      `}</style>
    </main>
  );
}
