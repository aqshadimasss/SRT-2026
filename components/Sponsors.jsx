"use client";

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>Our Sponsors</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            We are proud to be supported by these amazing organizations who believe in our vision.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="glass" style={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', opacity: 0.7, transition: 'opacity 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}>
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Sponsor {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
