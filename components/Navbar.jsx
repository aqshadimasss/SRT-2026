"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  const menuItems = {
    about: {
      title: 'About Us',
      links: [
        { label: 'Management Team', href: '/managementTeam' },
        { label: 'KRI Teams', href: '/kri-teams' },
        { label: 'KRTI Teams', href: '/krti-teams' }
      ]
    },
    media: {
      title: 'Media',
      links: [
        { label: 'Konten Edukasi', href: 'https://medium.com/@soedirmanrobotic', external: true },
        { label: 'Instagram', href: 'https://www.instagram.com/srtunsoed/', external: true },
        { label: 'TikTok', href: 'https://www.tiktok.com/@srtunsoed?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1', external: true },
        { label: 'YouTube', href: 'https://www.youtube.com/@soedirmanroboticteam', external: true }
      ]
    },
    events: {
      title: 'Events',
      links: [
        { label: 'Our Activities', href: '/pengmas' },
        { label: 'Internship', href: '/internship' },
        { label: 'Open Recruitment', href: '/oprec' }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const ChevronIcon = ({ isOpen: open }) => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s ease' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );


  return (
    <nav className={`srt-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* LOGO */}
        <Link href="/" className="nav-logo">
          <img src="/logo.png" alt="SRT Logo" className="nav-logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="nav-logo-text">
            <span className="nav-logo-word">SOEDIRMAN</span>
            <span className="nav-logo-word accent">ROBOTIC</span>
            <span className="nav-logo-word">TEAM</span>
          </div>
        </Link>
        
        {/* DESKTOP NAVIGATION */}
        <div className="desktop-nav-links">
          <Link href="/" className="nav-link-item">HOME</Link>
          
          {Object.entries(menuItems).map(([key, menu]) => (
            <div
              key={key}
              className="dropdown-wrapper"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`nav-link-item ${hoveredDropdown === key ? 'active' : ''}`}>
                {menu.title.toUpperCase()}
                <ChevronIcon isOpen={hoveredDropdown === key} />
              </button>
              
              {hoveredDropdown === key && (
                <div className="dropdown-menu">
                  {menu.links.map((link) => (
                    link.external ? (
                      <a key={link.href} href={link.href} className="dropdown-item" target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className="dropdown-item">
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/achievements" className="nav-link-item">ACHIEVEMENTS</Link>
        </div>

        {/* RIGHT SIDE: CTA */}
        <div className="nav-right">
          <Link href="https://www.instagram.com/srtunsoed/" target="_blank" className="desktop-cta">
            <button className="button-primary">CONTACT US</button>
          </Link>
          
          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="mobile-drawer">
          <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link">Home</Link>
          
          {Object.entries(menuItems).map(([key, menu]) => (
            <div key={key} className="mobile-dropdown">
              <button onClick={() => toggleMobileDropdown(key)} className="mobile-link mobile-link-btn">
                <span>{menu.title}</span>
                <ChevronIcon isOpen={activeDropdown === key} />
              </button>
              {activeDropdown === key && (
                <div className="mobile-sub-links">
                  {menu.links.map((link) => (
                    link.external ? (
                      <a key={link.href} href={link.href} className="mobile-sub-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.href} href={link.href} className="mobile-sub-link" onClick={() => setIsOpen(false)}>
                        {link.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/achievements" onClick={() => setIsOpen(false)} className="mobile-link">Achievements</Link>

          <Link href="https://www.instagram.com/srtunsoed/" target="_blank" onClick={() => setIsOpen(false)} className="mobile-cta-link">
            <button className="button-primary" style={{ width: '100%' }}>CONTACT US</button>
          </Link>
        </div>
      )}

      <style jsx>{`
        .srt-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: var(--spacing-lg) 0;
          background: transparent;
          transition: all 0.3s ease;
        }
        .srt-nav.scrolled {
          background: var(--colors-nav-bg);
          border-bottom: 1px solid var(--colors-card-border);
          padding: var(--spacing-sm) 0;
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .nav-logo-img {
          height: 42px;
          object-fit: contain;
        }
        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.05;
        }
        .nav-logo-word {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--colors-text-primary);
        }
        .nav-logo-word.accent {
          color: var(--colors-accent-lime);
        }

        /* Desktop links */
        .desktop-nav-links {
          display: none;
          gap: var(--spacing-xs);
          align-items: center;
        }
        .nav-link-item {
          color: var(--colors-nav-text);
          font-size: 13px;
          font-weight: 600;
          padding: var(--spacing-sm) var(--spacing-md);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          background: none;
          border: none;
          font-family: var(--font-ui);
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }
        .nav-link-item:hover,
        .nav-link-item.active {
          color: var(--colors-nav-text-hover);
          background: var(--colors-ghost-bg);
        }

        /* Dropdown */
        .dropdown-wrapper {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          min-width: 220px;
          background: var(--colors-dropdown-bg);
          border: 1px solid var(--colors-card-border);
          padding: var(--spacing-sm);
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .dropdown-item {
          padding: var(--spacing-sm) var(--spacing-lg);
          color: var(--colors-text-secondary);
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
          white-space: nowrap;
        }
        .dropdown-item:hover {
          color: var(--colors-text-primary);
          background: var(--colors-ghost-bg);
          padding-left: 20px;
        }

        /* Right side */
        .nav-right {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .desktop-cta {
          display: none;
        }

        /* Mobile */
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--colors-ghost-bg);
          border: 1px solid var(--colors-card-border);
          color: var(--colors-text-primary);
        }
        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: var(--spacing-lg);
          right: var(--spacing-lg);
          margin-top: var(--spacing-sm);
          background: var(--colors-dropdown-bg);
          border: 1px solid var(--colors-card-border);
          padding: var(--spacing-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
          animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          z-index: 999;
        }
        .mobile-link {
          padding: var(--spacing-sm) var(--spacing-md);
          font-weight: 600;
          color: var(--colors-text-primary);
          transition: background 0.15s ease;
          font-size: 15px;
        }
        .mobile-link:hover {
          background: var(--colors-ghost-bg);
        }
        .mobile-link-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          font-family: var(--font-ui);
          cursor: pointer;
          text-align: left;
        }
        .mobile-sub-links {
          display: flex;
          flex-direction: column;
          padding-left: var(--spacing-xl);
          margin-top: var(--spacing-xs);
          gap: 2px;
        }
        .mobile-sub-link {
          padding: var(--spacing-sm) var(--spacing-md);
          font-size: 14px;
          color: var(--colors-text-secondary);
          border-radius: var(--rounded-sm);
          transition: all 0.15s ease;
        }
        .mobile-sub-link:hover {
          color: var(--colors-text-primary);
          background: var(--colors-ghost-bg);
        }
        .mobile-cta-link {
          margin-top: var(--spacing-sm);
        }

        @media(min-width: 768px) {
          .desktop-nav-links { display: flex !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
