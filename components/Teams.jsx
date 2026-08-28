"use client";

export default function Teams() {
  const management = [
    {
      "name": "Hanif Muhamad Anam",
      "role": "President",
      "imagePath": "/teams/BPH/President.webp"
    },
    {
      "name": "Rio Juharno Putra",
      "role": "Vice President",
      "imagePath": "/teams/BPH/Vice President.webp"
    },
    {
      "name": "Shafira Arintia Zen",
      "role": "Head Of Secretary",
      "imagePath": "/teams/BPH/Head Of Secretary.webp"
    },
    {
      "name": "Salsabila Arvani Hasibuan",
      "role": "Head Of Financial Manager",
      "imagePath": "/teams/BPH/Head Of Financial Manager.webp"
    },
    {
      "name": "Pratiwi Rahmadiana",
      "role": "Head Of Human Resource",
      "imagePath": "/teams/HRD/Head Of Human Resource.webp"
    },
    {
      "name": "Muhammad Habib Al Fatih",
      "role": "HEAD OF TEAM MANAGER",
      "imagePath": "/teams/MANAGER/HEAD OF TEAM MANAGER.webp"
    },
    {
      "name": "Citra Salsabila",
      "role": "Head Of Creative Media",
      "imagePath": "/teams/MEDKRE/Head Of Creative Media.webp"
    },
    {
      "name": "Kia Shadra Afiqa Busono",
      "role": "HEAD OF PR",
      "imagePath": "/teams/PR/HEAD OF PR.webp"
    },
    {
      "name": "Muhammad Akbar Firmansyah",
      "role": "Head Of Sponsor",
      "imagePath": "/teams/SPONSOR/Head Of Sponsor.webp"
    }
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
              <div className="team-image-wrapper">
                <img
                  src={member.imagePath}
                  alt={member.role}
                  className="team-image"
                />
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
          color: var(--colors-primary);
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
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: var(--spacing-xl);
        }
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
