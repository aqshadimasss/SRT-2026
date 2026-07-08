export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhimas Sulistio",
      role: "Web Developer",
      quote: "Working with OmahTI was an incredible experience. They delivered the project on time and exceeded our expectations in terms of quality and modern design."
    },
    {
      name: "Andi Pratama",
      role: "Startup Founder",
      quote: "The AI integration they built for us was flawless. True professionals who understand both business needs and cutting-edge technology."
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>What Our Clients <br/><span className="text-gradient">Say About Us</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          {testimonials.map((testi, idx) => (
            <div key={idx} className="glass card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '3rem', color: 'rgba(250, 204, 21, 0.2)', position: 'absolute', top: '16px', right: '32px', lineHeight: 1 }}>"</div>
              <p style={{ fontStyle: 'italic', marginBottom: '24px', position: 'relative', zIndex: 1 }}>"{testi.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-gradient)' }}></div>
                <div>
                  <h4 style={{ fontWeight: 600 }}>{testi.name}</h4>
                  <p className="text-muted" style={{ fontSize: '0.875rem' }}>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
