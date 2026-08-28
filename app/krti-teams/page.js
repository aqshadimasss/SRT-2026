"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Countdown from '../../components/Countdown';

function RosterCard({ name, role, imagePath }) {
  const [imageError, setImageError] = useState(false);

  // Generates a custom aeronautic/cyber tech gradient based on the member's name
  const getGradientByName = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash) % 360;
    // Aerotech HSL: aviation orange (20-40), sky blue (190-210), horizon cyan (170-190), supersonic purple (260-280)
    const techH = h % 4 === 0 ? 20 + (h % 20) : 
                  h % 4 === 1 ? 190 + (h % 20) : 
                  h % 4 === 2 ? 170 + (h % 20) : 260 + (h % 20);
    return `linear-gradient(135deg, hsl(${techH}, 90%, 45%) 0%, hsl(${(techH + 50) % 360}, 95%, 15%) 100%)`;
  };

  const getInitials = (str) => {
    const parts = str.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  const bgGradient = getGradientByName(name);
  const initials = getInitials(name);

  return (
    <div className="team-card animate-fade-in">
      <div className="team-image-wrapper">
        {!imageError && imagePath ? (
          <img 
            src={imagePath} 
            alt={name} 
            className="team-image" 
            onError={() => setImageError(true)} 
          />
        ) : (
          <div className="team-image" style={{ background: bgGradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="fallback-initials">{initials}</span>
          </div>
        )}
        <div className="team-overlay"></div>
        <div className="team-info">
          <h4 className="team-name">{name}</h4>
          <p className="team-role">{role}</p>
        </div>
      </div>

      <style jsx>{`
        .team-card {
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 3/4;
          background: #d4d4d4;
          transition: transform 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-4px);
        }
        .team-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.4s ease, transform 0.6s ease;
        }
        .team-card:hover .team-image {
          filter: grayscale(0%);
          transform: scale(1.05);
        }
        .team-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 50%);
          z-index: 1;
          pointer-events: none;
        }
        .team-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          z-index: 2;
          text-align: left;
        }
        .team-name {
          color: #ffffff;
          margin-bottom: 4px;
          font-size: 16px;
          font-weight: 700;
        }
        .team-role {
          color: var(--accent-primary);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .fallback-initials {
          font-size: 3rem;
          font-weight: 800;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.6);
        }
      `}</style>
    </div>
  );
}

export default function KRTITeams() {
    const teams = [
    {
      name: "Biantara RP",
      description: "Racing Plane Division optimizing aerodynamics, speed, and precision control for high-speed aerial track competitions.",
      image: "/images/krti/rp.jpg",
      members: [
        {
                "name": "-",
                "role": "Head Of RP",
                "imagePath": "/teams/KRTI RP/Head Of RP.webp"
              },
        {
                "name": "-",
                "role": "RP Electrician 1",
                "imagePath": "/teams/KRTI RP/RP Electrician 1.webp"
              },
        {
                "name": "-",
                "role": "RP Electrician 2",
                "imagePath": "/teams/KRTI RP/RP Electrician 2.webp"
              },
        {
                "name": "-",
                "role": "RP Electrician 3",
                "imagePath": "/teams/KRTI RP/RP Electrician 3.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 1",
                "imagePath": "/teams/KRTI RP/RP Mechanic 1.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 2",
                "imagePath": "/teams/KRTI RP/RP Mechanic 2.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 3",
                "imagePath": "/teams/KRTI RP/RP Mechanic 3.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 4",
                "imagePath": "/teams/KRTI RP/RP Mechanic 4.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 5",
                "imagePath": "/teams/KRTI RP/RP Mechanic 5.webp"
              },
        {
                "name": "-",
                "role": "RP Mechanic 6",
                "imagePath": "/teams/KRTI RP/RP Mechanic 6.webp"
              },
        {
                "name": "-",
                "role": "RP System 1",
                "imagePath": "/teams/KRTI RP/RP System 1.webp"
              },
        {
                "name": "-",
                "role": "RP System 2",
                "imagePath": "/teams/KRTI RP/RP System 2.webp"
              },
        {
                "name": "-",
                "role": "RP System 3",
                "imagePath": "/teams/KRTI RP/RP System 3.webp"
              }
    ]
    },
    {
      name: "Biantara FW",
      description: "Fixed Wing Division focusing on long-endurance autonomous flights, payload delivery, and aerial mapping capabilities.",
      image: "/images/krti/fw.jpg",
      members: [
        {
                "name": "-",
                "role": "FW Electrician 1",
                "imagePath": "/teams/KRTI FW/FW Electrician 1.webp"
              },
        {
                "name": "-",
                "role": "FW Electrician 2",
                "imagePath": "/teams/KRTI FW/FW Electrician 2.webp"
              },
        {
                "name": "-",
                "role": "FW Electrician 3",
                "imagePath": "/teams/KRTI FW/FW Electrician 3.webp"
              },
        {
                "name": "-",
                "role": "FW Electrician 4",
                "imagePath": "/teams/KRTI FW/FW Electrician 4.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 1",
                "imagePath": "/teams/KRTI FW/FW Mechanic 1.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 2",
                "imagePath": "/teams/KRTI FW/FW Mechanic 2.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 3",
                "imagePath": "/teams/KRTI FW/FW Mechanic 3.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 4",
                "imagePath": "/teams/KRTI FW/FW Mechanic 4.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 5",
                "imagePath": "/teams/KRTI FW/FW Mechanic 5.webp"
              },
        {
                "name": "-",
                "role": "FW Mechanic 6",
                "imagePath": "/teams/KRTI FW/FW Mechanic 6.webp"
              },
        {
                "name": "-",
                "role": "FW System 1",
                "imagePath": "/teams/KRTI FW/FW System 1.webp"
              },
        {
                "name": "-",
                "role": "FW System 2",
                "imagePath": "/teams/KRTI FW/FW System 2.webp"
              },
        {
                "name": "-",
                "role": "FW System 3",
                "imagePath": "/teams/KRTI FW/FW System 3.webp"
              },
        {
                "name": "-",
                "role": "FW System 4",
                "imagePath": "/teams/KRTI FW/FW System 4.webp"
              },
        {
                "name": "-",
                "role": "Head Of FW",
                "imagePath": "/teams/KRTI FW/Head Of FW.webp"
              }
    ]
    },
    {
      name: "Biantara LELA",
      description: "Vertical Take-Off and Landing (VTOL) Division specializing in agile maneuvers, hybrid mechanics, and advanced telemetry.",
      image: "/images/krti/lela.jpg",
      members: [
        {
                "name": "-",
                "role": "Head Of LELA",
                "imagePath": "/teams/KRTI LELA/Head Of LELA.webp"
              },
        {
                "name": "-",
                "role": "LELA Electrician 1",
                "imagePath": "/teams/KRTI LELA/LELA Electrician 1.webp"
              },
        {
                "name": "-",
                "role": "LELA Electrician 2",
                "imagePath": "/teams/KRTI LELA/LELA Electrician 2.webp"
              },
        {
                "name": "-",
                "role": "LELA Electrician 3",
                "imagePath": "/teams/KRTI LELA/LELA Electrician 3.webp"
              },
        {
                "name": "-",
                "role": "LELA Mechanic 1",
                "imagePath": "/teams/KRTI LELA/LELA Mechanic 1.webp"
              },
        {
                "name": "-",
                "role": "LELA Mechanic 2",
                "imagePath": "/teams/KRTI LELA/LELA Mechanic 2.webp"
              },
        {
                "name": "-",
                "role": "LELA Mechanic 3",
                "imagePath": "/teams/KRTI LELA/LELA Mechanic 3.webp"
              },
        {
                "name": "-",
                "role": "LELA Mechanic 4",
                "imagePath": "/teams/KRTI LELA/LELA Mechanic 4.webp"
              },
        {
                "name": "-",
                "role": "LELA System 1",
                "imagePath": "/teams/KRTI LELA/LELA System 1.webp"
              },
        {
                "name": "-",
                "role": "LELA System 2",
                "imagePath": "/teams/KRTI LELA/LELA System 2.webp"
              }
    ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'url("/hero-bg.JPG") no-repeat center center/cover',
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
        {/* Shadow overlays */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(5, 5, 16, 0.95) 100%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>About Us</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>KRTI Teams</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            KRTI TEAMS
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Unmanned Aerial Vehicle Engineering
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto 64px auto', animationDelay: '0.2s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)' }}>
            Representing Jenderal Soedirman University in the Kontes Robot Terbang Indonesia (KRTI). We focus on building autonomous fixed-wing airframes, aerial mapping, flight mechanics, and telemetry architectures.
          </p>

          {/* Countdown Timer */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '2.5px', marginBottom: '24px', fontWeight: 700, fontSize: '0.85rem' }}>
               Flight Hours Countdown to KRTI 2026
             </p>
             <Countdown targetDate="2026-09-12T00:00:00" />
          </div>
        </div>
      </section>

      {/* Roster Sections */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          {teams.map((team, index) => (
            <div 
              key={team.name} 
              className="team-section-block animate-fade-in" 
              style={{ 
                animationDelay: `${index * 0.2}s`, 
                marginBottom: '100px',
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.02)',
                borderRadius: '24px',
                padding: '48px 32px'
              }}
            >
              <div style={{ maxWidth: '600px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                <h3 className="team-section-title">{team.name}</h3>
                <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #00B4D8, #ff5722)', margin: '16px auto', borderRadius: '2px' }}></div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.6 }}>{team.description}</p>
              </div>

              <div className="roster-grid">
                {team.members.map((member, mIdx) => (
                  <RosterCard 
                    key={mIdx} 
                    name={member.name} 
                    role={member.role} 
                    imagePath={member.imagePath} 
                  />
                ))}
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
        .team-section-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .roster-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .team-section-title {
            font-size: 1.6rem;
          }
          .team-section-block {
            padding: 32px 16px !important;
            margin-bottom: 50px !important;
          }
        }
      `}</style>
    </main>
  );
}
