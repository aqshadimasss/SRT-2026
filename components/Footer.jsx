"use client";

import Link from 'next/link';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/srtunsoed/',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@soedirmanroboticteam',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@srtunsoed',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
        </svg>
      )
    },
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=658206aaf3c14fa5',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/soedirman-robotic-team',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="srt-footer">
      {/* Lime Squiggly Divider */}
      <div className="squiggly-divider" />

      <div className="container">
        
        {/* UPPER GRID */}
        <div className="footer-upper">
          
          <div className="footer-col">
            <h4 className="button-cap footer-col-title">About Us</h4>
            <ul className="footer-links">
              <li><Link href="/managementTeam" className="footer-link">Management Team</Link></li>
              <li><Link href="/kri-teams" className="footer-link">KRI Teams</Link></li>
              <li><Link href="/krti-teams" className="footer-link">KRTI Teams</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="button-cap footer-col-title">Media</h4>
            <ul className="footer-links">
              <li><a href="https://medium.com/@soedirmanrobotic" target="_blank" rel="noopener noreferrer" className="footer-link">Konten Edukasi</a></li>
              <li><a href="https://www.instagram.com/srtunsoed/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@srtunsoed" target="_blank" rel="noopener noreferrer" className="footer-link">TikTok</a></li>
              <li><a href="https://www.youtube.com/@soedirmanroboticteam" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="button-cap footer-col-title">Events</h4>
            <ul className="footer-links">
              <li><Link href="/pengmas" className="footer-link">Our Activities</Link></li>
              <li><Link href="/internship" className="footer-link">Internship</Link></li>
              <li><Link href="/oprec" className="footer-link">Open Recruitment</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="button-cap footer-col-title">Big Thanks To</h4>
            <div className="sponsor-row">
              <div className="sponsor-badge">
                <img src="/images/robosoedwear.png" alt="Robosoedwear" className="sponsor-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="sponsor-fallback">ROBOSOEDWEAR</span>
              </div>
              <div className="sponsor-badge">
                <img src="/images/logooemah.jpg" alt="Oemah" className="sponsor-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="sponsor-fallback">OEMAH</span>
              </div>
              <div className="sponsor-badge">
                <img src="/images/smartfren.png" alt="Smartfren" className="sponsor-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                <span className="sponsor-fallback">SMARTFREN</span>
              </div>
            </div>
          </div>

        </div>

        {/* LOWER SECTION */}
        <div className="footer-lower">
          
          <div className="footer-brand">
            <img src="/logo.png" alt="SRT Logo" className="footer-logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="footer-brand-text">
              <span className="footer-brand-word">SOEDIRMAN</span>
              <span className="footer-brand-word accent">ROBOTIC</span>
              <span className="footer-brand-word">TEAM</span>
            </div>
          </div>

          <div className="footer-info-block">
            <h5 className="micro-cap footer-info-label">Address</h5>
            <p className="caption footer-info-text">
              Jl. Dr. HR Boenyamin No. 708,<br/>
              Grendeng, Purwokerto Utara,<br/>
              Kabupaten Banyumas, Jawa Tengah
            </p>
          </div>

          <div className="footer-info-block">
            <h5 className="micro-cap footer-info-label">About</h5>
            <p className="caption footer-info-text">
              We are a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI).
            </p>
          </div>

          <div className="footer-info-block">
            <a href="https://www.instagram.com/srtunsoed/" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <button className="footer-touch-btn button-cap-light">GET IN TOUCH</button>
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="caption footer-copyright">
            © 2026 Soedirman Robotic Team. All Rights Reserved.
          </p>
        </div>

      </div>

      <style jsx>{`
        .srt-footer {
          background: var(--colors-footer-bg);
          color: var(--colors-text-secondary);
          padding: 0 0 var(--spacing-xxl);
        }

        /* Upper Grid */
        .footer-upper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 48px;
          padding: 64px 0 48px;
          border-bottom: 1px solid var(--colors-card-border);
          margin-bottom: 48px;
        }
        .footer-col-title {
          color: var(--colors-text-primary);
          margin-bottom: 20px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          padding: 0;
        }
        .footer-link {
          color: var(--colors-text-secondary);
          transition: all 0.2s ease;
          font-size: 14px;
          font-weight: 400;
          display: inline-block;
        }
        .footer-link:hover {
          color: var(--colors-accent-lime);
          transform: translateX(4px);
        }

        /* Sponsors */
        .sponsor-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }
        .sponsor-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--colors-ghost-bg);
          border: 1px solid var(--colors-card-border);
          padding: 6px 12px;
          border-radius: var(--rounded-md);
          min-width: 80px;
        }
        .sponsor-img {
          height: 24px;
          object-fit: contain;
        }
        .sponsor-fallback {
          display: none;
          font-size: 9px;
          font-weight: 700;
          color: var(--colors-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Lower Section */
        .footer-lower {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 48px;
          padding-bottom: var(--spacing-xxl);
          border-bottom: 1px solid var(--colors-card-border);
          margin-bottom: var(--spacing-xxl);
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }
        .footer-logo-img {
          height: 48px;
          object-fit: contain;
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .footer-brand-word {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--colors-text-primary);
        }
        .footer-brand-word.accent {
          color: var(--colors-accent-lime);
        }
        .footer-info-label {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-sm);
        }
        .footer-info-text {
          color: var(--colors-text-secondary);
          line-height: 1.6;
        }
        .footer-touch-btn {
          width: 100%;
          background: transparent;
          color: var(--colors-text-primary);
          border: 1px solid var(--colors-card-border);
          padding: var(--spacing-md) var(--spacing-xl);
          border-radius: var(--rounded-full);
          transition: all 0.3s ease;
          font-family: var(--font-ui);
          cursor: pointer;
        }
        .footer-touch-btn:hover {
          background: var(--colors-accent-lime);
          color: var(--colors-ink-deep);
          border-color: var(--colors-accent-lime);
          transform: translateY(-2px);
        }

        /* Bottom */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        .footer-socials {
          display: flex;
          gap: var(--spacing-md);
          align-items: center;
        }
        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--rounded-full);
          background: var(--colors-ghost-bg);
          border: 1px solid var(--colors-card-border);
          color: var(--colors-text-secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .social-icon-link:hover {
          background: var(--colors-accent-lime);
          color: var(--colors-ink-deep);
          border-color: var(--colors-accent-lime);
          transform: translateY(-4px) scale(1.08);
        }
        .footer-copyright {
          color: var(--colors-text-secondary);
          opacity: 0.6;
          text-align: center;
        }

        @media(min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  );
}
