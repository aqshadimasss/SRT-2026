"use client";

export default function Portfolio() {
  const projects = [
    { title: "JOINMUN", category: "Event Platform", link: "#" },
    { title: "Satu Teladan", category: "Web Application", link: "#" },
    { title: "FSDE", category: "Landing Page", link: "#" },
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Our Recent <span className="text-gradient">Portfolio</span></h2>
            <p className="text-muted">Explore some of the high-quality solutions we've built.</p>
          </div>
          <button className="btn-outline">Explore More of Our Work</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="glass card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Fake Image Placeholder */}
              <div style={{ height: '240px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', width: '150%', height: '150%', background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)', transform: 'rotate(45deg)' }}></div>
                 <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{proj.title} Preview</span>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>{proj.category}</p>
                <h3 className="heading-md" style={{ marginBottom: '16px' }}>{proj.title}</h3>
                <a href={proj.link} style={{ color: 'var(--text-primary)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="portfolio-link">
                  View Detail <span style={{ transition: 'transform 0.3s ease' }}>→</span>
                </a>
              </div>
              <style jsx>{`
                .portfolio-link:hover span { transform: translateX(5px); }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
