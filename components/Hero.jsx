"use client";

import LinearIcon from './LinearIcon';

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

      {/* Sponsors Marquee */}
      <div className="sponsors-marquee-container">
        <div className="sponsors-marquee">
          <div className="sponsors-track">
            {/* First set */}
            <img src="/sponsors/Buana Karya.webp" alt="Buana Karya" className="sponsor-logo" />
            <img src="/sponsors/DANZ PUSAT.webp" alt="DANZ PUSAT" className="sponsor-logo" />
            <img src="/sponsors/Kedai Teknik.webp" alt="Kedai Teknik" className="sponsor-logo" />
            <img src="/sponsors/LOSQ.webp" alt="LOSQ" className="sponsor-logo bg-white" />
            <img src="/sponsors/MFX.webp" alt="MFX" className="sponsor-logo" />
            <img src="/sponsors/Prosandang.webp" alt="Prosandang" className="sponsor-logo bg-white" />
            <img src="/sponsors/RUMAH JASA CNC.webp" alt="RUMAH JASA CNC" className="sponsor-logo" />
            <img src="/sponsors/Sewun indo konsultan.webp" alt="Sewun indo konsultan" className="sponsor-logo" />
            <img src="/sponsors/Trika Putih.webp" alt="Trika Putih" className="sponsor-logo" />
            <img src="/sponsors/gemfan.webp" alt="gemfan" className="sponsor-logo" />
            <img src="/sponsors/yeay apparel.webp" alt="yeay apparel" className="sponsor-logo" />
            {/* Second set for infinite loop */}
            <img src="/sponsors/Buana Karya.webp" alt="Buana Karya" className="sponsor-logo" />
            <img src="/sponsors/DANZ PUSAT.webp" alt="DANZ PUSAT" className="sponsor-logo" />
            <img src="/sponsors/Kedai Teknik.webp" alt="Kedai Teknik" className="sponsor-logo" />
            <img src="/sponsors/LOSQ.webp" alt="LOSQ" className="sponsor-logo bg-white" />
            <img src="/sponsors/MFX.webp" alt="MFX" className="sponsor-logo" />
            <img src="/sponsors/Prosandang.webp" alt="Prosandang" className="sponsor-logo bg-white" />
            <img src="/sponsors/RUMAH JASA CNC.webp" alt="RUMAH JASA CNC" className="sponsor-logo" />
            <img src="/sponsors/Sewun indo konsultan.webp" alt="Sewun indo konsultan" className="sponsor-logo" />
            <img src="/sponsors/Trika Putih.webp" alt="Trika Putih" className="sponsor-logo" />
            <img src="/sponsors/gemfan.webp" alt="gemfan" className="sponsor-logo" />
            <img src="/sponsors/yeay apparel.webp" alt="yeay apparel" className="sponsor-logo" />
          </div>
        </div>
      </div>

      {/* Decorative mascot-style elements */}
      <div className="hero-deco hero-deco-1" aria-hidden="true"><LinearIcon name="gear" size={48} color="rgba(255,255,255,0.6)" strokeWidth={1} /></div>
      <div className="hero-deco hero-deco-2" aria-hidden="true"><LinearIcon name="robot" size={64} color="rgba(255,255,255,0.6)" strokeWidth={1} /></div>
      <div className="hero-deco hero-deco-3" aria-hidden="true"><LinearIcon name="wrench" size={48} color="rgba(255,255,255,0.6)" strokeWidth={1} /></div>

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

        /* Sponsors Marquee */
        .sponsors-marquee-container {
          position: relative;
          z-index: 2;
          background: #040a18; /* Deep Midnight Blue */
          border-top: 1px solid rgba(2, 74, 216, 0.4);
          border-bottom: 1px solid rgba(2, 74, 216, 0.4);
          box-shadow: inset 0 0 40px rgba(2, 74, 216, 0.2); /* Subtle inner blue glow */
          margin-top: auto;
          overflow: hidden;
          padding: 24px 0;
        }

        .sponsors-marquee {
          width: 100%;
          overflow: hidden;
        }

        .sponsors-track {
          display: flex;
          align-items: center;
          gap: 80px;
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .sponsor-logo {
          height: 44px;
          object-fit: contain;
          opacity: 0.85;
          /* Adds a soft white halo so dark logos are readable on dark backgrounds */
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
          transition: all 0.4s ease;
        }

        .sponsor-logo:hover {
          opacity: 1;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
          transform: scale(1.05);
        }

        .sponsor-logo.bg-white {
          background-color: #ffffff;
          padding: 4px 12px;
          border-radius: var(--rounded-sm);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Decorative emoji mascots */
        .hero-deco {
          position: absolute;
          z-index: 2;
          opacity: 0.15;
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }
        .hero-deco-1 { top: 15%; right: 8%; animation-delay: 0s; }
        .hero-deco-2 { top: 45%; right: 5%; animation-delay: 2s; }
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
          .sponsors-marquee-container {
            padding: var(--spacing-lg) 0;
          }
          .sponsor-logo {
            height: 36px;
          }
          .hero-deco {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
