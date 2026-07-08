"use client";

export default function Teams() {
  const management = [
    { name: 'Muhammad Rizqy', role: 'President' },
    { name: 'Adhe Akbar Azanni', role: 'Vice President' },
    { name: 'Khoirunnisaa', role: 'Head of Secretary' },
    { name: 'Khaerani Julieta', role: 'Financial Manager' },
    { name: 'Ramania Nur', role: 'HR Development' },
    { name: 'Farizza Ginna', role: 'Public Relation' },
    { name: 'Rizka Nur', role: 'Sponsorship' },
    { name: 'Amanda Jovita', role: 'Creative Media' },
    { name: 'Arimbi Sukma', role: 'Team Manager' },
  ];

  return (
    <section id="teams" className="teams-section starfield">
      <div className="container">
        <div className="teams-header">
          <p className="eyebrow teams-eyebrow">The People Behind SRT</p>
          <h2 className="display-large teams-title">
            Our <span className="chip-lime-keyword">Teams</span>
          </h2>
          <p className="body-lg teams-subtitle">
            Get to Know Our Management and Technical Teams
          </p>
        </div>
        
        <div className="teams-grid">
          {management.map((member, index) => (
            <div
              key={index}
              className="team-card animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="team-avatar">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h4 className="heading-sm team-name">{member.name}</h4>
              <p className="micro-cap team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .teams-section {
          padding: var(--spacing-section) 0;
          background: var(--colors-surface-canvas);
          position: relative;
        }
        .teams-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .teams-eyebrow {
          color: var(--colors-accent-pink);
          margin-bottom: var(--spacing-md);
        }
        .teams-title {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-lg);
        }
        .teams-subtitle {
          color: var(--colors-text-secondary);
          max-width: 480px;
          margin: 0 auto;
        }
        .teams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: var(--spacing-xxl);
        }
        .team-card {
          text-align: center;
          padding: var(--spacing-xxl) var(--spacing-lg);
          border-radius: var(--rounded-xxl);
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .team-card:hover {
          background: var(--colors-ghost-bg);
          border-color: var(--colors-card-border);
          transform: translateY(-4px);
        }
        .team-avatar {
          width: 72px;
          height: 72px;
          border-radius: var(--rounded-full);
          background: var(--colors-ghost-bg);
          margin: 0 auto var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--colors-card-border);
          color: var(--colors-accent-pink);
          transition: all 0.3s ease;
        }
        .team-card:hover .team-avatar {
          border-color: var(--colors-accent-pink);
          background: rgba(250, 127, 170, 0.1);
        }
        .team-name {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-xs);
          font-size: 16px;
        }
        .team-role {
          color: var(--colors-accent-lime);
        }

        @media (max-width: 576px) {
          .teams-section {
            padding: 48px 0;
          }
          .teams-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: var(--spacing-lg);
          }
        }
      `}</style>
    </section>
  );
}
