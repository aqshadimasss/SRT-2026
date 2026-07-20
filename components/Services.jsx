"use client";

import LinearIcon from './LinearIcon';

export default function Services() {
  const services = [
    {
      title: "Full Web Development",
      description: "One-stop Website Development Solution tailored to your specific business requirements.",
      icon: "globe"
    },
    {
      title: "AI & ML Solutions",
      description: "AI/ML consulting and model dev, Data analysis, Performance tracking and automation.",
      icon: "robot"
    },
    {
      title: "App Development",
      description: "Provide customized mobile application development services to enhance user experience.",
      icon: "smartphone"
    },
    {
      title: "Product Development",
      description: "Provide innovative product solutions from ideation and prototyping to final launch.",
      icon: "lightbulb"
    },
    {
      title: "Cybersecurity Services",
      description: "Protect digital assets and reduce security risks with comprehensive audits and fixes.",
      icon: "shield"
    }
  ];

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '16px' }}>We Offer Custom Digital <br/><span className="text-gradient">Services</span></h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>To build on your ideas and deliver high-quality solutions mastering modern tech stacks.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((svc, idx) => (
            <div key={idx} className="glass card" style={{ position: 'relative', overflow: 'hidden' }}>
               <div style={{ marginBottom: '24px' }}><LinearIcon name={svc.icon} size={48} color="var(--colors-accent-lime)" strokeWidth={1.2} /></div>
               <h3 className="heading-md" style={{ marginBottom: '16px' }}>{svc.title}</h3>
               <p className="text-muted">{svc.description}</p>
               {/* Hover Effect Border Bottom */}
               <div style={{ position: 'absolute', bottom: 0, left: 0, height: '4px', width: '100%', background: 'var(--accent-gradient)', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s ease' }} className="card-border"></div>
               <style jsx>{`
                 .card:hover .card-border { transform: scaleX(1) !important; }
               `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
