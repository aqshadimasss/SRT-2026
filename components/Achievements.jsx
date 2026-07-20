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

        @media (max-width: 576px) {
          .achievements-section {
            padding: 48px 0;
          }
        }
      `}</style>
    </section>
  );
}
