"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function RosterCard({ name, role, imagePath }) {
  const [imageError, setImageError] = useState(false);

  // Generates a custom cybernetic tech color gradient based on the member's name
  const getGradientByName = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash) % 360;
    // Deep HSL ranges: cyan (180-210), purple (260-290), magenta (300-330), blue (220-250)
    const techH = h % 4 === 0 ? 180 + (h % 30) : 
                  h % 4 === 1 ? 260 + (h % 30) : 
                  h % 4 === 2 ? 300 + (h % 30) : 220 + (h % 30);
    return `linear-gradient(135deg, hsl(${techH}, 85%, 45%) 0%, hsl(${(techH + 60) % 360}, 90%, 15%) 100%)`;
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
            <div className="cyber-glow"></div>
            {/* Cyborg interface elements */}
            <div className="avatar-corner-top"></div>
            <div className="avatar-corner-bottom"></div>
            {/* Technical grid lines overlay */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" className="cyber-icon">
              <path d="M12 2a10 10 0 0 0-10 10v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a10 10 0 0 0-10-10z"/>
              <circle cx="12" cy="11" r="3"/>
              <path d="M7 18h10"/>
            </svg>
          </div>
        )}
      </div>
      <h4 className="roster-name">{name}</h4>
      <p className="roster-role">{role}</p>

      <style jsx>{`
        .roster-card {
          padding: 32px 24px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          background: rgba(10, 10, 25, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--border-radius);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
        }
        .roster-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(180deg, rgba(0, 180, 216, 0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        .roster-card:hover {
          transform: translateY(-8px) scale(1.02);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-primary);
          box-shadow: 0 15px 40px rgba(0, 180, 216, 0.15);
        }
        .avatar-container {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          margin: 0 auto 24px;
          position: relative;
          padding: 4px;
          background: var(--accent-gradient);
          box-shadow: 0 0 20px rgba(0, 180, 216, 0.3);
          transition: all 0.4s ease;
        }
        .roster-card:hover .avatar-container {
          box-shadow: 0 0 30px rgba(0, 180, 216, 0.6);
          transform: scale(1.05);
        }
        .avatar-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #020208;
        }
        .avatar-fallback {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 3px solid #020208;
          overflow: hidden;
        }
        .fallback-initials {
          font-size: 2.4rem;
          font-weight: 800;
          color: #fff;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.6);
          letter-spacing: -1px;
        }
        .cyber-glow {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%);
          z-index: 1;
        }
        .avatar-corner-top {
          position: absolute;
          top: 8px; left: 8px; width: 6px; height: 6px;
          border-top: 1px solid rgba(255,255,255,0.4);
          border-left: 1px solid rgba(255,255,255,0.4);
          z-index: 2;
        }
        .avatar-corner-bottom {
          position: absolute;
          bottom: 8px; right: 8px; width: 6px; height: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.4);
          border-right: 1px solid rgba(255,255,255,0.4);
          z-index: 2;
        }
        .cyber-icon {
          position: absolute;
          bottom: 8px;
          z-index: 2;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .roster-card:hover .cyber-icon {
          transform: translateY(-2px) scale(1.1);
          stroke: #fff;
          opacity: 0.9;
        }
        .roster-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
          line-height: 1.3;
          transition: color 0.3s;
        }
        .roster-card:hover .roster-name {
          color: var(--accent-primary);
        }
        .roster-role {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default function ManagementTeam() {
  const departments = [
    {
      name: "Core Executive",
      description: "Steering the visionary direction, administrative strategy, and technological integration of the Soedirman Robotic Team.",
      members: [
        { name: 'Muhammad Rizqy', role: 'President', imagePath: '/images/managementTeam/president.jpg' },
        { name: 'Adhe Akbar Azanni', role: 'Vice President', imagePath: '/images/managementTeam/vp.jpg' }
      ]
    },
    {
      name: "Administration & Financials",
      description: "Managing standard corporate documentation, archival systems, and rigorous financial balance metrics.",
      members: [
        { name: 'Khoirunnisaa', role: 'Head of Secretary', imagePath: '/images/managementTeam/secretary.jpg' },
        { name: 'Khaerani Julieta', role: 'Financial Manager', imagePath: '/images/managementTeam/finance.jpg' }
      ]
    },
    {
      name: "Human Resources Development",
      description: "Coordinating member evaluations, training roadmaps, and organizing technical talent development tracks.",
      members: [
        { name: 'Ramania Nur', role: 'HR Development Manager', imagePath: '/images/managementTeam/hrd.jpg' }
      ]
    },
    {
      name: "Public Relations",
      description: "Handling organizational brand representation, external networks, university alliances, and media inquiries.",
      members: [
        { name: 'Farizza Ginna', role: 'Public Relation Manager', imagePath: '/images/managementTeam/pr.jpg' }
      ]
    },
    {
      name: "Creative Media",
      description: "Creating premium digital graphics, interactive branding kits, video layouts, and managing social feeds.",
      members: [
        { name: 'Amanda Jovita', role: 'Creative Media Manager', imagePath: '/images/managementTeam/creative.jpg' }
      ]
    },
    {
      name: "Operations & Operations Support",
      description: "Overseeing robot competition mechanics, technical inventory tracks, and corporate sponsorships.",
      members: [
        { name: 'Arimbi Sukma', role: 'Team Manager', imagePath: '/images/managementTeam/manager.jpg' },
        { name: 'Rizka Nur', role: 'Sponsorship Coordinator', imagePath: '/images/managementTeam/sponsorship.jpg' }
      ]
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at center, #0a0a20 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}>
        {/* Glow overlay */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.1) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Custom Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>About Us</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Management Team</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            MANAGEMENT TEAM
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Meet the Leaders of Soedirman Robotic Team
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', maxWidth: '650px' }}>
            A synergistic group of visionary leaders dedicated to managing organizational operations, public relations, strategic sponsorship, and leading-edge creative engineering projects.
          </p>
        </div>
      </section>

      {/* Roster Sections */}
      <section style={{ padding: '80px 0 120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          {departments.map((dept, index) => (
            <div 
              key={dept.name} 
              className="dept-section animate-fade-in" 
              style={{ 
                animationDelay: `${index * 0.15}s`, 
                marginBottom: '80px',
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.02)',
                borderRadius: '24px',
                padding: '40px'
              }}
            >
              <div style={{ maxWidth: '600px', margin: '0 auto 48px auto', textAlign: 'center' }}>
                <h3 className="dept-title">{dept.name}</h3>
                <div style={{ width: '60px', height: '3px', background: 'var(--accent-gradient)', margin: '16px auto', borderRadius: '2px' }}></div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>{dept.description}</p>
              </div>

              <div className="roster-grid">
                {dept.members.map((member) => (
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
        .dept-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .roster-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
          justify-content: center;
        }
        
        /* Adjust core executive centering */
        .roster-grid:has(> *:only-child) {
          grid-template-columns: minmax(240px, 320px);
        }
        
        @media (max-width: 768px) {
          .dept-title {
            font-size: 1.6rem;
          }
          .dept-section {
            padding: 24px 16px !important;
            margin-bottom: 40px !important;
          }
          .roster-grid {
            gap: 20px;
          }
        }
      `}</style>
    </main>
  );
}
