"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function OprecAnnouncementPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [individualResult, setIndividualResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const mockCandidates = [
    { id: 'SRT26-OPR-001', name: 'Farhan Adi', track: 'KRI Teams Division (Blakasutha)', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-002', name: 'Larasati Dewi', track: 'KRTI Teams Division (Biantara Fixed Wing)', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-003', name: 'Kuncoro Wibowo', track: 'KRI Teams Division (Yudishtira)', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-004', name: 'Gisela Amanda', track: 'Creative Media Division', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-005', name: 'Rifqi Fauzi', track: 'Public Relations & Sponsors', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-006', name: 'Hendra Setiawan', track: 'KRTI Teams Division (Biantara Racing Plane)', status: 'ACCEPTED' },
    { id: 'SRT26-OPR-007', name: 'Putri Utami', track: 'KRI Teams Division (Satria)', status: 'WAITLISTED' },
    { id: 'SRT26-OPR-008', name: 'Yusuf Ibrahim', track: 'KRTI Teams Division (Biantara Fixed Wing)', status: 'WAITLISTED' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setIndividualResult(null);
      setSearched(false);
      return;
    }

    const found = mockCandidates.find(
      c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           c.id.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    setIndividualResult(found || 'NOT_FOUND');
    setSearched(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIndividualResult(null);
    setSearched(false);
  };

  return (
    <main>
      <Navbar />

      {/* Header / Congratulations Banner */}
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at center, #1b0724 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}>
        {/* Glowing holographic ambient overlays */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(circle, rgba(114, 9, 183, 0.1) 0%, transparent 75%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <Link href="/oprec" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Open Recruitment</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Announcement</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            SELECTION RESULTS
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Congratulations to the Selected SRT Members!
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.75)', fontSize: '1rem', maxWidth: '650px' }}>
            Welcome to the operational and engineering divisions of the Soedirman Robotic Team. Together, we will build, test, and compete at national levels.
          </p>
        </div>
      </section>

      {/* Interactive Search Tool Section */}
      <section style={{ padding: '60px 0', background: '#020208', borderTop: '1px solid rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <div className="container" style={{ maxWidth: '650px' }}>
          <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>Verify Your Candidate Status</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '24px' }}>Input your registered Full Name or Registration ID (e.g. SRT26-OPR-001) to verify your individual status.</p>
            
            <form onSubmit={handleSearch} className="search-form">
              <input 
                type="text" 
                placeholder="Type your name or registration ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn-primary search-btn">
                Search
              </button>
            </form>

            {searched && (
              <div className="search-result-block animate-fade-in" style={{ marginTop: '24px', padding: '20px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'left' }}>
                {individualResult === 'NOT_FOUND' ? (
                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#f44336', fontWeight: 700, marginBottom: '6px' }}>Status Not Found</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Double check the spelling or registration ID code and try again.</p>
                  </div>
                ) : (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{individualResult.id}</span>
                      <span className={`status-badge ${individualResult.status.toLowerCase()}`}>{individualResult.status}</span>
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>{individualResult.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Allocated Division: <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{individualResult.track}</span></p>
                    
                    {individualResult.status === 'ACCEPTED' ? (
                      <p style={{ color: '#4caf50', fontSize: '0.8rem', fontWeight: 600, marginTop: '12px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}><polyline points="20 6 9 17 4 12"/></svg> Welcome to the team! Check your email and messaging handles for division briefing times and orientation schedules.</p>
                    ) : (
                      <p style={{ color: '#ff9800', fontSize: '0.8rem', fontWeight: 600, marginTop: '12px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> You are on the priority waitlist. We will notify you if placements open.</p>
                    )}
                  </div>
                )}
                
                <button onClick={clearSearch} style={{ display: 'block', margin: '12px auto 0 auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'underline', cursor: 'pointer' }}>
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Selected List Spreadsheet Table */}
      <section style={{ padding: '80px 0 120px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Full Qualified Candidates Roster</h3>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Showing 8 entries</span>
          </div>

          {/* HTML Spreadsheet Table */}
          <div className="table-wrapper glass">
            <table className="announcement-table">
              <thead>
                <tr>
                  <th>REG ID</th>
                  <th>CANDIDATE NAME</th>
                  <th>ALLOCATED DIVISION</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {mockCandidates.map((cand) => (
                  <tr key={cand.id}>
                    <td style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{cand.id}</td>
                    <td style={{ color: '#fff', fontWeight: 700 }}>{cand.name}</td>
                    <td style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{cand.track}</td>
                    <td>
                      <span className={`status-badge ${cand.status.toLowerCase()}`}>{cand.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .breadcrumb-link:hover {
          color: var(--accent-primary) !important;
        }
        
        .search-form {
          display: flex;
          gap: 12px;
          width: 100%;
        }
        
        .search-input {
          flex: 1;
          padding: 14px 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(0, 180, 216, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .search-btn {
          padding: 14px 24px !important;
          border-radius: 10px !important;
          font-size: 0.95rem !important;
        }
        
        .status-badge {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          display: inline-block;
        }
        
        .status-badge.accepted {
          background: rgba(76, 175, 80, 0.1);
          border: 1px solid rgba(76, 175, 80, 0.3);
          color: #4caf50;
        }
        
        .status-badge.waitlisted {
          background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.3);
          color: #ff9800;
        }
        
        .table-wrapper {
          overflow-x: auto;
          background: rgba(10, 10, 25, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
        }
        
        .announcement-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        
        .announcement-table th {
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 18px 24px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent-primary);
          font-weight: 700;
        }
        
        .announcement-table td {
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          font-size: 0.95rem;
        }
        
        .announcement-table tr:last-child td {
          border-bottom: none;
        }
        
        .announcement-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }
        
        @media (max-width: 768px) {
          .announcement-table th, .announcement-table td {
            padding: 14px 16px;
          }
        }
        
        @media (max-width: 576px) {
          .search-form {
            flex-direction: column;
            gap: 12px;
          }
          .search-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
