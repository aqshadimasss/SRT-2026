"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Countdown from '../../components/Countdown';

import { teams } from './arrays';

export default function KRITeams() {

  const TeamSection = ({ title, members, delay }) => (
    <div className="animate-fade-in" style={{ animationDelay: delay, marginBottom: '80px' }}>
      <h3 className="team-section-title">
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
        {members.map((member, index) => (
          <div key={index} className="team-card animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="team-image-wrapper">
               {member.imagePath ? (
                 <img src={member.imagePath} alt={member.name} className="team-image" />
               ) : (
                 <div className="team-image" style={{ background: 'var(--colors-surface-night)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--colors-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                 </div>
               )}
              <div className="team-overlay"></div>
              <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main>
      <Navbar />
      
      {/* Hero / About KRI Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'url("/hero-bg.jpg") no-repeat center center/cover',
        paddingTop: '120px',
        paddingBottom: '80px'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.9)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            KRI TEAMS
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px' }} className="animate-fade-in">
            About KRI
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto 64px auto', animationDelay: '0.2s', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          {/* Countdown Timer */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '24px', fontWeight: 600 }}>
               Time Remaining Until KRAI 2026
             </p>
             <Countdown targetDate="2026-07-07T00:00:00" />
          </div>
        </div>
      </section>

      {/* Teams Roster */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          {teams.map((team, idx) => (
            <TeamSection key={idx} title={team.name} members={team.members} delay={`${idx * 0.2}s`} />
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
          margin-bottom: 32px;
          border-bottom: 2px solid rgba(255,255,255,0.1);
          padding-bottom: 16px;
        }
        @media (max-width: 768px) {
          .team-section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }
        }
        
        /* New Team Card Style */
        .team-card {
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 3/4;
          background: #d4d4d4; /* Default background for transparent images */
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
      `}</style>
    </main>
  );
}
