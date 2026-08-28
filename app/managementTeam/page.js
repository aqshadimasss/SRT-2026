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
          color: #ffffff;
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

export default function ManagementTeam() {
    const departments = [
    {
      name: "BPH (Badan Pengurus Harian)",
      description: "The core executive body steering the visionary direction, administration, and financial strategy of the Soedirman Robotic Team.",
      members: [
        {
                "name": "-",
                "role": "Financial Manager's Staff 1",
                "imagePath": "/teams/BPH/Financial Manager's Staff 1.webp"
              },
        {
                "name": "-",
                "role": "Financial Manager's Staff 2",
                "imagePath": "/teams/BPH/Financial Manager's Staff 2.webp"
              },
        {
                "name": "-",
                "role": "Head Of Financial Manager",
                "imagePath": "/teams/BPH/Head Of Financial Manager.webp"
              },
        {
                "name": "-",
                "role": "Head Of Secretary",
                "imagePath": "/teams/BPH/Head Of Secretary.webp"
              },
        {
                "name": "-",
                "role": "President",
                "imagePath": "/teams/BPH/President.webp"
              },
        {
                "name": "-",
                "role": "Secretary's Staff 1",
                "imagePath": "/teams/BPH/Secretary's Staff 1.webp"
              },
        {
                "name": "-",
                "role": "Secretary's Staff 2",
                "imagePath": "/teams/BPH/Secretary's Staff 2.webp"
              },
        {
                "name": "-",
                "role": "Vice President",
                "imagePath": "/teams/BPH/Vice President.webp"
              }
    ]
    },
    {
      name: "HRD (Human Resource Development)",
      description: "Coordinating member evaluations, training roadmaps, and organizing technical talent development tracks.",
      members: [
        {
                "name": "-",
                "role": "Head Of Human Resource",
                "imagePath": "/teams/HRD/Head Of Human Resource.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 1",
                "imagePath": "/teams/HRD/HRD STAFF 1.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 2",
                "imagePath": "/teams/HRD/HRD STAFF 2.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 3",
                "imagePath": "/teams/HRD/HRD STAFF 3.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 4",
                "imagePath": "/teams/HRD/HRD STAFF 4.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 5",
                "imagePath": "/teams/HRD/HRD STAFF 5.webp"
              },
        {
                "name": "-",
                "role": "HRD STAFF 6",
                "imagePath": "/teams/HRD/HRD STAFF 6.webp"
              }
    ]
    },
    {
      name: "Team Manager",
      description: "Overseeing operational logistics, team coordination, and ensuring seamless execution across all robot competition divisions.",
      members: [
        {
                "name": "-",
                "role": "Biantara FW Manager 1",
                "imagePath": "/teams/MANAGER/Biantara FW Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Biantara FW Manager 2",
                "imagePath": "/teams/MANAGER/Biantara FW Manager 2.webp"
              },
        {
                "name": "-",
                "role": "Biantara LELA Manager 1",
                "imagePath": "/teams/MANAGER/Biantara LELA Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Biantara RP Manager 1",
                "imagePath": "/teams/MANAGER/Biantara RP Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Biantara RP Manager 2",
                "imagePath": "/teams/MANAGER/Biantara RP Manager 2.webp"
              },
        {
                "name": "-",
                "role": "Blakasutha's Manager 1",
                "imagePath": "/teams/MANAGER/Blakasutha's Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Blakasutha's Manager",
                "imagePath": "/teams/MANAGER/Blakasutha's Manager.webp"
              },
        {
                "name": "-",
                "role": "HEAD OF TEAM MANAGER",
                "imagePath": "/teams/MANAGER/HEAD OF TEAM MANAGER.webp"
              },
        {
                "name": "-",
                "role": "Satria Manager 1",
                "imagePath": "/teams/MANAGER/Satria Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Satria Manager's 2",
                "imagePath": "/teams/MANAGER/Satria Manager's 2.webp"
              },
        {
                "name": "-",
                "role": "Yudhistira Manager 1",
                "imagePath": "/teams/MANAGER/Yudhistira Manager 1.webp"
              },
        {
                "name": "-",
                "role": "Yudhistira Manager 2",
                "imagePath": "/teams/MANAGER/Yudhistira Manager 2.webp"
              }
    ]
    },
    {
      name: "MEDKRE (Media Kreatif)",
      description: "Creating premium digital graphics, interactive branding kits, video layouts, and managing social feeds for the team.",
      members: [
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 1",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 1.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 2",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 2.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 3",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 3.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 4",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 4.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 5",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 5.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 6",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 6.webp"
              },
        {
                "name": "-",
                "role": "CREATIVE MEDIA STAFF 7",
                "imagePath": "/teams/MEDKRE/CREATIVE MEDIA STAFF 7.webp"
              },
        {
                "name": "-",
                "role": "Head Of Creative Media",
                "imagePath": "/teams/MEDKRE/Head Of Creative Media.webp"
              }
    ]
    },
    {
      name: "PR (Public Relations)",
      description: "Handling organizational brand representation, external networks, university alliances, and media inquiries.",
      members: [
        {
                "name": "-",
                "role": "HEAD OF PR",
                "imagePath": "/teams/PR/HEAD OF PR.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 1",
                "imagePath": "/teams/PR/PR STAFF 1.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 2",
                "imagePath": "/teams/PR/PR STAFF 2.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 3",
                "imagePath": "/teams/PR/PR STAFF 3.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 4",
                "imagePath": "/teams/PR/PR STAFF 4.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 5",
                "imagePath": "/teams/PR/PR STAFF 5.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 6",
                "imagePath": "/teams/PR/PR STAFF 6.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 7",
                "imagePath": "/teams/PR/PR STAFF 7.webp"
              },
        {
                "name": "-",
                "role": "PR STAFF 8",
                "imagePath": "/teams/PR/PR STAFF 8.webp"
              }
    ]
    },
    {
      name: "Sponsor",
      description: "Managing partnerships, funding acquisition, and corporate sponsorship relations for competition seasons.",
      members: [
        {
                "name": "-",
                "role": "Head Of Sponsor",
                "imagePath": "/teams/SPONSOR/Head Of Sponsor.webp"
              },
        {
                "name": "-",
                "role": "Sponsor Staff 2",
                "imagePath": "/teams/SPONSOR/Sponsor Staff 2.webp"
              },
        {
                "name": "-",
                "role": "Sponsor Staff 3",
                "imagePath": "/teams/SPONSOR/Sponsor Staff 3.webp"
              },
        {
                "name": "-",
                "role": "Sponsor Staff 4",
                "imagePath": "/teams/SPONSOR/Sponsor Staff 4.webp"
              },
        {
                "name": "-",
                "role": "Sponsor Staff 5",
                "imagePath": "/teams/SPONSOR/Sponsor Staff 5.webp"
              },
        {
                "name": "-",
                "role": "Sponsor Staff 6",
                "imagePath": "/teams/SPONSOR/Sponsor Staff 6.webp"
              },
        {
                "name": "-",
                "role": "Sponsor's Staff 1",
                "imagePath": "/teams/SPONSOR/Sponsor's Staff 1.webp"
              }
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
        background: 'var(--colors-surface-canvas)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}>
        {/* Glow overlay */}
        
        
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
                {dept.members.map((member, mIdx) => (
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
