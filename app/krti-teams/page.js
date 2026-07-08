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
    <div className="roster-card glass">
      <div className="avatar-container">
        {!imageError && imagePath ? (
          <img 
            src={imagePath} 
            alt={name} 
            className="avatar-image" 
            onError={() => setImageError(true)} 
          />
        ) : (
          <div className="avatar-fallback" style={{ background: bgGradient }}>
            <span className="fallback-initials">{initials}</span>
            <div className="radar-sweep"></div>
            {/* Flight altitude indicator grid overlay */}
            <div className="horizon-line"></div>
            <div className="altitude-marks"></div>
            {/* Aerospace aircraft icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" className="cyber-icon">
              <path d="M21 16V14L13 9V3.5A1.5 1.5 0 0 0 11.5 2h0A1.5 1.5 0 0 0 10 3.5V9L2 14v2l8-2.5V19l-2 1.5V22l4-1 4 1v-1.5L14 19v-7.5L21 16z"/>
            </svg>
          </div>
        )}
      </div>
      <h4 className="roster-name">{name}</h4>
      <p className="roster-role">{role}</p>

      <style jsx>{`
        .roster-card {
          padding: 28px 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          background: rgba(10, 15, 30, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        .roster-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--accent-primary);
          box-shadow: 0 12px 30px rgba(0, 180, 216, 0.2);
        }
        .avatar-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 20px;
          position: relative;
          padding: 3px;
          background: linear-gradient(135deg, #00B4D8 0%, #ff5722 100%);
          box-shadow: 0 0 15px rgba(0, 180, 216, 0.25);
          transition: all 0.4s ease;
        }
        .roster-card:hover .avatar-container {
          box-shadow: 0 0 25px rgba(0, 180, 216, 0.5);
          transform: scale(1.05);
        }
        .avatar-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2.5px solid #03030b;
        }
        .avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 2.5px solid #03030b;
          overflow: hidden;
        }
        .fallback-initials {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          z-index: 3;
          text-shadow: 0 2px 10px rgba(0,0,0,0.6);
        }
        .radar-sweep {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: conic-gradient(from 0deg, rgba(0, 180, 216, 0.15) 0deg, transparent 90deg, transparent 360deg);
          z-index: 1;
          animation: sweep 4s linear infinite;
        }
        .horizon-line {
          position: absolute;
          left: 10%; right: 10%; top: 50%;
          height: 1px;
          background: rgba(255,255,255,0.25);
          z-index: 2;
        }
        .altitude-marks {
          position: absolute;
          left: 50%; top: 20%; bottom: 20%;
          width: 1px;
          background: rgba(255,255,255,0.15);
          z-index: 2;
        }
        .altitude-marks::before {
          content: '';
          position: absolute;
          top: 30%; left: -4px; width: 9px; height: 1px; background: rgba(255,255,255,0.25);
        }
        .altitude-marks::after {
          content: '';
          position: absolute;
          bottom: 30%; left: -4px; width: 9px; height: 1px; background: rgba(255,255,255,0.25);
        }
        .cyber-icon {
          position: absolute;
          bottom: 8px;
          z-index: 3;
          opacity: 0.55;
          transition: all 0.3s ease;
        }
        .roster-card:hover .cyber-icon {
          transform: translateY(-2px) rotate(10deg);
          stroke: #ff5722;
          opacity: 0.9;
        }
        .roster-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .roster-card:hover .roster-name {
          color: var(--accent-primary);
        }
        .roster-role {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function KRTITeams() {
  const teams = [
    {
      name: "Biantara Fixed Wing",
      description: "Engineering long-endurance autonomous airplanes designed for mapping, aerial surveillance, and high-efficiency payload drops over extended coordinates.",
      members: [
        { name: 'Althaf Ryandra', role: 'Head of Fixed Wing', imagePath: '/images/krtiTeams/althaf.jpg' },
        { name: 'Wildan Rafiq', role: 'Chief Mechanic', imagePath: '/images/krtiTeams/wildan.jpg' },
        { name: 'Farhan Rizky', role: 'Aviation Electronics', imagePath: '/images/krtiTeams/farhan.jpg' },
        { name: 'Akbar Maulana', role: 'Ground Control System Dev', imagePath: '/images/krtiTeams/akbar.jpg' }
      ]
    },
    {
      name: "Biantara Racing Plane",
      description: "Designing lightweight, highly aerodynamic supersonic aerodynamic models focusing on extreme velocity, precision air gates navigation, and dynamic stability.",
      members: [
        { name: 'Rafi Dhiaulhaq', role: 'Head of Racing Plane', imagePath: '/images/krtiTeams/rafi.jpg' },
        { name: 'Bagas Fathur', role: 'Airframe Mechanic', imagePath: '/images/krtiTeams/bagas.jpg' },
        { name: 'Ivan Aditya', role: 'High-Current Electronics', imagePath: '/images/krtiTeams/ivan.jpg' }
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
                {team.members.map((member) => (
                  <RosterCard 
                    key={member.name} 
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
