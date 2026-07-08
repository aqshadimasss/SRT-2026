"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Countdown from '../../components/Countdown';

export default function KRITeams() {
  const blakasutha = [
    { name: 'Muhamad Kelvin Adiyasa', role: 'Head of Blakasutha' },
    { name: 'Zaidan Al Ghoffari', role: 'Mechanic' },
    { name: 'Ahmad Faisal Falah', role: 'Electronic' },
    { name: 'Daffa Randika', role: 'Programmer' },
    // ... shortened for visual presentation
  ];

  const satria = [
    { name: 'Galuh Agung Wicaksono', role: 'Head of Satria' },
    { name: 'Nadaa Mufiidah Sari', role: 'Mechanic' },
    { name: 'Rafid Zaki Nurrohman', role: 'Electronic' },
    { name: 'Tegar Dwi Agung Saputra', role: 'Programmer' },
  ];

  const yudishtira = [
    { name: 'Rizki Nugroho Kurniawan', role: 'Head of Yudishtira' },
    { name: 'Nabil Emillul Fata', role: 'Mechanic' },
    { name: 'Indah Karisma Hidayah Riyanto', role: 'Electronic' },
    { name: 'Muhammad Sholahatul Haq', role: 'Programmer' },
  ];

  const TeamSection = ({ title, members, delay }) => (
    <div className="animate-fade-in" style={{ animationDelay: delay, marginBottom: '80px' }}>
      <h3 className="team-section-title">
        {title}
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '32px' }}>
        {members.map((member, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{member.name}</h4>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
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
          <TeamSection title="Blakasutha" members={blakasutha} delay="0s" />
          <TeamSection title="Satria" members={satria} delay="0.2s" />
          <TeamSection title="Yudishtira" members={yudishtira} delay="0.4s" />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .team-section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-primary);
          margin-bottom: 32px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        @media (max-width: 768px) {
          .team-section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </main>
  );
}
