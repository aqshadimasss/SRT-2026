"use client";

import LinearIcon from './LinearIcon';

export default function Achievements() {
  const achievements = [
    {
      year: '2025 • KRTI',
      title: '16 Besar KRTI',
      desc: 'Kontes Robot Terbang Indonesia (KRTI) 2025.',
      icon: 'trophy'
    },
    {
      year: '2025 • KRAI',
      title: '16 Besar KRAI',
      desc: 'Kontes Robot ABU Indonesia (KRAI) 2025.',
      icon: 'medal'
    },
    {
      year: '2024 • KRSRI',
      title: 'Lolos KRSRI 2024',
      desc: 'Kontes Robot SAR Indonesia (KRSRI) 2024.',
      icon: 'target'
    },
    {
      year: '2024 • KRTI',
      title: 'Lolos KRTI 2024',
      desc: 'Kontes Robot Terbang Indonesia (KRTI) 2024.',
      icon: 'rocket'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="achievements-header">
          <p className="eyebrow achievements-eyebrow">Our Track Record</p>
          <h2 className="display-large achievements-title">
            <span className="chip-lime-keyword">Achievements</span>
          </h2>
          <p className="body-lg achievements-subtitle">
            Perjalanan dan pencapaian yang membentuk kami.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="achievement-card card-feature-dark animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="achievement-icon"><LinearIcon name={item.icon} size={36} color="var(--colors-accent-lime)" strokeWidth={1.3} /></div>
              <p className="micro-cap achievement-year">{item.year}</p>
              <h3 className="heading-md achievement-title">{item.title}</h3>
              <p className="body-md achievement-desc">{item.desc}</p>
              <div className="achievement-link">
                <span className="button-cap-light">MORE DETAILS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          ))}
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

      <style jsx>{`
        .achievements-section {
          padding: var(--spacing-section) 0;
          background: var(--colors-section-alt-bg);
          position: relative;
        }
        .achievements-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .achievements-eyebrow {
          color: var(--colors-accent-pink);
          margin-bottom: var(--spacing-md);
        }
        .achievements-title {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-lg);
        }
        .achievements-subtitle {
          color: var(--colors-text-secondary);
          max-width: 480px;
          margin: 0 auto;
        }
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--spacing-xl);
        }
        .achievement-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .achievement-card:hover {
          transform: translateY(-6px);
          border-color: var(--colors-accent-lime);
        }
        .achievement-icon {
          line-height: 1;
          margin-bottom: var(--spacing-sm);
        }
        .achievement-year {
          color: var(--colors-accent-violet-mid);
        }
        .achievement-title {
          color: var(--colors-text-primary);
        }
        .achievement-desc {
          color: var(--colors-text-secondary);
          flex: 1;
        }
        .achievement-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          color: var(--colors-accent-lime);
          margin-top: var(--spacing-sm);
          transition: gap 0.2s ease;
          cursor: pointer;
        }
        .achievement-card:hover .achievement-link {
          gap: var(--spacing-md);
        }

        /* Stats Bar */
        .stats-bar {
          position: relative;
          z-index: 2;
          border-top: 1px solid var(--colors-card-border);
          margin-top: 80px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-xl);
          padding: var(--spacing-xl) 0 0 0;
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

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-lg);
          }
        }
        @media (max-width: 576px) {
          .achievements-section {
            padding: 48px 0;
          }
        }
      `}</style>
    </section>
  );
}
