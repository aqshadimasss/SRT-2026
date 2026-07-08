"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PengmasPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'workshop', label: 'Workshops & Training' },
    { id: 'expo', label: 'Expos & Open House' },
    { id: 'outreach', label: 'Community Outreach' },
    { id: 'gathering', label: 'Team Gatherings' }
  ];

  const activities = [
    {
      id: 1,
      title: 'Workshop Internal Robotika',
      category: 'workshop',
      date: 'March 14, 2026',
      tag: 'Internal Training',
      desc: 'Empowering team mechanics, aviation electronics, and firmware developers through intensive collaborative sessions in building custom IoT-based microcontrollers.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Visitasi Universitas Muhammadiyah Purwokerto',
      category: 'outreach',
      date: 'January 28, 2026',
      tag: 'Academic Collaboration',
      desc: 'Robotics academic research exchanges and alliance-building showcases with UMP, sharing advanced knowledge in navigation algorithms and sensory feedback loops.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Expo UKM Universitas Jenderal Soedirman',
      category: 'expo',
      date: 'September 08, 2025',
      tag: 'Exhibition',
      desc: 'Welcoming new university students with high-speed flight simulator demonstrations, autonomous search & rescue trials, and interactive pilot experiences.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 22"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Open House Soedirman Robotic Team',
      category: 'expo',
      date: 'October 19, 2025',
      tag: 'Open House',
      desc: 'Opening our high-tech laboratories to the public and student circles, offering robotics workshops, active pilot testing, and mechanical fabrication demonstrations.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Panggih Sedulur SRT',
      category: 'gathering',
      date: 'November 30, 2025',
      tag: 'Team Building',
      desc: 'An internal integration and organizational bonding event for active members, mechanical divisions, pilots, and operations coordinators to enhance synergy.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: 'SMAN 2 Purbalingga Robotics Training',
      category: 'outreach',
      date: 'February 15, 2026',
      tag: 'Community Service',
      desc: 'Community outreach teaching high school students drone flight physics, circuit board schematics, and hands-on microcontroller soldering practices.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      )
    }
  ];

  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(act => act.category === activeFilter);

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
        background: 'radial-gradient(circle at center, #050d24 0%, #000000 100%)',
        paddingTop: '140px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '10%', right: '20%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.06) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.03)', padding: '6px 16px', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px', fontSize: '0.85rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} className="breadcrumb-link">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>Events</span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span style={{ color: 'var(--accent-primary)' }}>Our Activities</span>
          </div>

          <h1 className="heading-travel text-gradient animate-fade-in" style={{ marginBottom: '24px', display: 'inline-block' }}>
            OUR ACTIVITIES
          </h1>
          
          <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px' }} className="animate-fade-in">
            Connecting Robotics Innovation with the Community
          </h4>

          <p className="text-travel-desc animate-fade-in" style={{ margin: '0 auto', animationDelay: '0.1s', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', maxWidth: '650px' }}>
            Discover our outreach programs, academic collaborations, high school training courses, and public robotics exhibitions.
          </p>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section style={{ background: '#020208', borderTop: '1px solid rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.03)', padding: '20px 0', zIndex: 10 }}>
        <div className="container">
          <div className="filters-container">
            {categories.map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
                {activeFilter === cat.id && <div className="tab-underline" />}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section style={{ padding: '80px 0 120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container">
          {filteredActivities.length > 0 ? (
            <div className="activities-grid">
              {filteredActivities.map((act) => (
                <div key={act.id} className="activity-card glass animate-fade-in">
                  <div className="card-badge-container">
                    <span className="card-badge">{act.tag}</span>
                    <span className="card-date">{act.date}</span>
                  </div>
                  
                  <div className="card-icon-container">
                    {act.icon}
                  </div>

                  <h3 className="card-title">{act.title}</h3>
                  <p className="card-desc">{act.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>No activities found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .breadcrumb-link:hover {
          color: var(--accent-primary) !important;
        }
        
        .filters-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
        }
        
        .filter-tab {
          background: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 8px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .filter-tab:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.02);
        }
        
        .filter-tab.active {
          color: var(--accent-primary);
        }
        
        .tab-underline {
          position: absolute;
          bottom: 0; left: 20px; right: 20px;
          height: 2px;
          background: var(--accent-gradient);
          border-radius: 2px;
          box-shadow: 0 0 10px var(--accent-primary);
        }
        
        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }
        
        .activity-card {
          padding: 40px 32px;
          background: rgba(10, 10, 25, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: var(--border-radius);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        
        .activity-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 180, 216, 0.3);
          box-shadow: 0 20px 40px rgba(0, 180, 216, 0.15);
        }
        
        .card-badge-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .card-badge {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
          color: var(--accent-primary);
        }
        
        .card-date {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 500;
        }
        
        .card-icon-container {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(0, 180, 216, 0.08);
          border: 1px solid rgba(0, 180, 216, 0.2);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.4s ease;
        }
        
        .activity-card:hover .card-icon-container {
          background: var(--accent-gradient);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 180, 216, 0.4);
          transform: rotate(6deg) scale(1.05);
        }
        
        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s;
        }
        
        .activity-card:hover .card-title {
          color: var(--accent-primary);
        }
        
        .card-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .activity-card {
            padding: 32px 24px;
          }
          
          .filters-container {
            gap: 4px;
          }
          
          .filter-tab {
            padding: 8px 12px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </main>
  );
}
