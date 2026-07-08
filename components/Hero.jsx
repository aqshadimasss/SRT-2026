"use client";

export default function Hero() {
  return (
    <section className="hero-section starfield">
      {/* Overlay */}
      <div className="hero-overlay" />

      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow animate-fade-in">
            JENDERAL SOEDIRMAN UNIVERSITY
          </p>
          
          <h1 className="display-hero animate-fade-in hero-title">
            SOEDIRMAN<br/>
            <span className="chip-lime-keyword">ROBOTIC</span> TEAM
          </h1>
          
          <p className="body-lg animate-fade-in hero-desc">
            A student organization at Jenderal Soedirman University engaged in robotics research and student development — building the next generation of engineers.
          </p>

          <div className="hero-buttons animate-fade-in">
            <a href="#achievements">
              <button className="button-primary hero-glow-halo">EXPLORE MORE</button>
            </a>
            <a href="https://www.instagram.com/srtunsoed/" target="_blank" rel="noopener noreferrer">
              <button className="button-ghost">GET IN TOUCH</button>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg>
              </div>
              <div>
                <p className="micro-cap stat-label">Projects</p>
                <p className="heading-sm stat-value">0+ Completed</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <div>
                <p className="micro-cap stat-label">Awards</p>
                <p className="heading-sm stat-value">0+ Won</p>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <p className="micro-cap stat-label">Members</p>
                <p className="heading-sm stat-value">0+ Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative mascot-style elements */}
      <div className="hero-deco hero-deco-1" aria-hidden="true">⚙️</div>
      <div className="hero-deco hero-deco-2" aria-hidden="true">🤖</div>
      <div className="hero-deco hero-deco-3" aria-hidden="true">🔧</div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          background: url("/hero-bg.JPG") no-repeat center center/cover;
          padding-top: 100px;
          padding-bottom: 0;
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: var(--colors-hero-overlay);
          z-index: 1;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          flex: 1;
        }
        .hero-content {
          max-width: 720px;
        }
        .hero-eyebrow {
          color: var(--colors-accent-lime);
          margin-bottom: var(--spacing-lg);
          animation-delay: 0.1s;
        }
        .hero-title {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-xl);
          animation-delay: 0.2s;
        }
        .hero-desc {
          color: var(--colors-text-secondary);
          max-width: 560px;
          margin-bottom: var(--spacing-xxl);
          animation-delay: 0.3s;
        }
        .hero-buttons {
          display: flex;
          gap: var(--spacing-lg);
          flex-wrap: wrap;
          animation-delay: 0.4s;
        }
        .hero-glow-halo {
          box-shadow: rgb(21,15,35) 0 0 12px 8px;
        }

        /* Stats Bar */
        .stats-bar {
          position: relative;
          z-index: 2;
          border-top: 1px solid var(--colors-card-border);
          background: var(--colors-surface-night);
          margin-top: auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
          padding: var(--spacing-xl) 0;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
        }
        .stat-icon {
          width: 44px;
          height: 44px;
          border: 1px solid var(--colors-accent-lime);
          border-radius: var(--rounded-full);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--colors-accent-lime);
          flex-shrink: 0;
        }
        .stat-label {
          color: var(--colors-text-secondary);
          margin-bottom: 2px;
        }
        .stat-value {
          color: var(--colors-text-primary);
          font-size: 16px;
        }

        /* Decorative emoji mascots */
        .hero-deco {
          position: absolute;
          z-index: 2;
          font-size: 48px;
          opacity: 0.15;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }
        .hero-deco-1 { top: 15%; right: 8%; animation-delay: 0s; }
        .hero-deco-2 { top: 45%; right: 5%; animation-delay: 2s; font-size: 64px; }
        .hero-deco-3 { bottom: 25%; right: 12%; animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(5deg); }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding-top: 120px;
            padding-bottom: 0;
          }
          .hero-content {
            padding-bottom: 48px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
          .hero-deco {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
