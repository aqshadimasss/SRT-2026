"use client";

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AchievementsPage() {
  const milestones = [
    {
      year: '2025',
      category: 'KRTI & KRAI',
      awards: [
        {
          title: '16 Besar Nasional KRTI 2025',
          class: 'Fixed Wing Class',
          desc: 'Ranked in the Top 16 nationally at the Kontes Robot Terbang Indonesia for long-endurance autonomous flight mapping and precision payload delivery.'
        },
        {
          title: '16 Besar Nasional KRAI 2025',
          class: 'ABU Robocon Class',
          desc: 'Achieved Top 16 placement at the Kontes Robot ABU Indonesia, demonstrating high-accuracy automation and mechanical throwing structures.'
        }
      ]
    },
    {
      year: '2024',
      category: 'KRSRI & KRTI',
      awards: [
        {
          title: 'Lolos Tahap Wilayah I KRSRI 2024',
          class: 'Search & Rescue Legged Class',
          desc: 'Qualified at regional level for search and rescue operations, featuring automated humanoid pathfinding and quadruped navigation.'
        },
        {
          title: 'Lolos Tahap Wilayah I KRTI 2024',
          class: 'Vertical Take-Off Landing Class',
          desc: 'Successfully passed flight tests and flight simulations for VTOL and Technology Development divisions.'
        }
      ]
    },
    {
      year: '2023',
      category: 'National Podiums',
      awards: [
        {
          title: 'Juara 3 Nasional KRTI Fixed Wing 2023',
          class: 'Aerodynamics & Flight Systems',
          desc: 'Won 3rd Place overall in Indonesia, representing outstanding speed, telemetry control, and robust aircraft composite frame construction.'
        },
        {
          title: 'Juara Harapan I KRAI Regional 2023',
          class: 'ABU Robocon Class',
          desc: 'Acquired 4th place at the regional ABU Robocon qualifying round with rapid loading mechanisms.'
        }
      ]
    },
    {
      year: '2022',
      category: 'KRSRI & KRTD',
      awards: [
        {
          title: 'Lolos Tahap II KRSRI 2022',
          class: 'Search & Rescue Legged Class',
          desc: 'Autonomous fire-extinguishing navigation utilizing obstacle avoidance sensors and thermal imaging matrices.'
        },
        {
          title: 'Lolos KRTD Divisi Technology Development 2022',
          class: 'Experimental Flight Systems',
          desc: 'Showcased experimental propulsion systems and autonomous path planning systems at the national level.'
        }
      ]
    },
    {
      year: '2021',
      category: 'KRAI & KRTD',
      awards: [
        {
          title: 'Juara 3 Regional KRAI 2021',
          class: 'ABU Robocon Class',
          desc: 'Won 3rd Place at regional tournament, qualifying directly for the national finals with agile coordinate positioning.'
        },
        {
          title: 'Lolos Wilayah I KRTD 2021',
          class: 'Remote Telemetry systems',
          desc: 'Demonstrated advanced wireless range control and custom ground control stations.'
        }
      ]
    },
    {
      year: '2020',
      category: 'Regional Finals',
      awards: [
        {
          title: 'Juara 2 Regional KRPAI 2020',
          class: 'Autonomous Fire-Extinguisher legged Class',
          desc: 'Secured 2nd place in regional level, navigating fully randomized maze layouts and extinguishing heat sources with precise timing.'
        }
      ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section style={{ 
        minHeight: '55vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at center, #07071e 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(114, 9, 183, 0.08) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Achievements</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            ACHIEVEMENTS
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px' }} className="animate-fade-in">
            A Legacy of Robotics Innovation and Victory
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', maxWidth: '650px' }}>
            Tracing our journey of competitive excellence. From national podium achievements in aerospace robotics to advanced search & rescue systems.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: '#020208', padding: '40px 0', borderTop: '1px solid rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '24px', textAlign: 'center' }}>
            <div>
              <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>10+</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', marginTop: '8px', fontWeight: 700 }}>National Awards</p>
            </div>
            <div>
              <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>6+</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', marginTop: '8px', fontWeight: 700 }}>Competition Seasons</p>
            </div>
            <div>
              <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>50+</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', marginTop: '8px', fontWeight: 700 }}>Active Engineers</p>
            </div>
            <div>
              <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>5+</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', marginTop: '8px', fontWeight: 700 }}>Active Divisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '100px 0 140px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        {/* Continuous center vertical timeline line */}
        <div className="timeline-line"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {milestones.map((milestone, idx) => (
            <div 
              key={milestone.year} 
              className={`timeline-item animate-fade-in ${idx % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Central Glowing Year Indicator */}
              <div className="timeline-dot-container">
                <div className="timeline-dot">
                  <span className="dot-year">{milestone.year}</span>
                </div>
              </div>

              {/* Achievement Card Content */}
              <div className="timeline-content-card glass">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '12px' }}>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {milestone.category}
                  </span>
                  <div style={{ padding: '4px 12px', background: 'rgba(0, 180, 216, 0.08)', border: '1px solid rgba(0, 180, 216, 0.2)', borderRadius: '50px', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    {milestone.year}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {milestone.awards.map((award, aIdx) => (
                    <div key={aIdx} className="award-item">
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div className="award-bullet">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div>
                          <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '2px' }}>{award.title}</h4>
                          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, display: 'inline-block', marginBottom: '8px' }}>
                            {award.class}
                          </span>
                          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.5 }}>{award.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .breadcrumb-link:hover {
          color: var(--accent-primary) !important;
        }
        
        .timeline-line {
          position: absolute;
          top: 0; bottom: 0; left: 50%;
          width: 2px;
          background: linear-gradient(180deg, 
            rgba(0, 180, 216, 0.3) 0%, 
            rgba(114, 9, 183, 0.3) 50%, 
            rgba(0, 180, 216, 0.02) 100%
          );
          transform: translateX(-50%);
          z-index: 1;
        }
        
        .timeline-item {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          position: relative;
          margin-bottom: 60px;
        }
        
        .timeline-item.left {
          align-self: flex-start;
          justify-content: flex-end;
          padding-right: 48px;
          left: 0;
        }
        
        .timeline-item.right {
          align-self: flex-end;
          justify-content: flex-start;
          padding-left: 48px;
          left: 50%;
        }
        
        .timeline-dot-container {
          position: absolute;
          top: 20px;
          z-index: 5;
        }
        
        .left .timeline-dot-container {
          right: -30px;
        }
        
        .right .timeline-dot-container {
          left: -30px;
        }
        
        .timeline-dot {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #02020a;
          border: 2px solid var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 180, 216, 0.4);
          transition: all 0.3s ease;
        }
        
        .timeline-item:hover .timeline-dot {
          transform: scale(1.1);
          border-color: #ff5722;
          box-shadow: 0 0 25px rgba(255, 87, 34, 0.6);
        }
        
        .dot-year {
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
        }
        
        .timeline-content-card {
          width: 100%;
          max-width: 500px;
          background: rgba(10, 10, 25, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--border-radius);
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .timeline-content-card:hover {
          transform: translateY(-4px);
          background: rgba(15, 15, 35, 0.5);
          border-color: rgba(0, 180, 216, 0.3);
          box-shadow: 0 15px 40px rgba(0, 180, 216, 0.1);
        }
        
        .award-bullet {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0, 180, 216, 0.1);
          border: 1px solid rgba(0, 180, 216, 0.3);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        @media (max-width: 900px) {
          .timeline-line {
            left: 20px;
            transform: none;
          }
          
          .timeline-item {
            width: 100% !important;
            align-self: flex-start !important;
            justify-content: flex-start !important;
            padding-left: 54px !important;
            padding-right: 0 !important;
            left: 0 !important;
            margin-bottom: 40px;
          }
          
          .left .timeline-dot-container,
          .right .timeline-dot-container {
            left: -10px !important;
            right: auto !important;
          }
          
          .timeline-dot {
            width: 45px;
            height: 45px;
          }
          
          .dot-year {
            font-size: 0.8rem;
          }
          
          .timeline-content-card {
            max-width: 100%;
            padding: 24px;
          }
        }
      `}</style>
    </main>
  );
}
