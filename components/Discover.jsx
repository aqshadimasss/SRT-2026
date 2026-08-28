"use client";

import { useState } from 'react';
import LinearIcon from './LinearIcon';

export default function Discover() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const faqs = [
    { q: 'How can we initiate a partnership with your organization?', a: 'Please contact our PR team via email or Instagram DM. We are open to collaborations with universities, companies, and communities.' },
    { q: 'Do you offer any programs or booths for us to visit?', a: 'Yes, we frequently participate in university expos and host open-door days during exhibition periods.' },
    { q: 'When will you be opening recruitment for new members?', a: 'Recruitment typically opens at the start of the odd semester. Follow our Instagram for announcements.' }
  ];

  return (
    <section id="media" className="discover-section">
      <div className="container">
        <div className="discover-grid">
          
          {/* Left Side: Title + Video + Description */}
          <div className="discover-left">
            <p className="eyebrow discover-eyebrow">Explore & Learn</p>
            <h2 className="display-large discover-heading">
              DISCOVER SRT<br/>IN A <span className="chip-lime-keyword">NEW WAY</span>
            </h2>
            
            <div className="video-container" style={{ marginBottom: '32px' }}>
             {!isVideoPlaying ? (
               <div className="video-thumbnail" onClick={() => setIsVideoPlaying(true)}>
                 <img src="https://img.youtube.com/vi/nWfBetKv8dg/maxresdefault.jpg" alt="SRT Journey Video" />
                 <div className="video-play-overlay">
                   <div className="play-icon large">
                     <LinearIcon name="play" size={24} color="var(--colors-text-primary)" strokeWidth={2} style={{ marginLeft: '4px' }} />
                   </div>
                 </div>
               </div>
             ) : (
               <iframe 
                 width="100%" 
                 height="100%" 
                 src="https://www.youtube.com/embed/nWfBetKv8dg?autoplay=1" 
                 title="YouTube video player" 
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 allowFullScreen
                 className="video-iframe"
               ></iframe>
             )}
            </div>

            <p className="body-lg discover-desc">
              Have you ever wondered how our robots are built? From late night coding to arena battles, discover our journey.
            </p>
          </div>

          {/* Right Side: FAQ */}
          <div className="discover-right">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-container">
               {faqs.map((faq, i) => (
                  <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="faq-item">
                     <h4 className="faq-question body-strong">
                       {faq.q} 
                       <span className={`faq-plus ${openFaq === i ? 'rotated' : ''}`}>+</span>
                     </h4>
                     {openFaq === i && (
                       <p className="faq-answer body-md">{faq.a}</p>
                     )}
                  </div>
               ))}
            </div>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        .discover-section {
          padding: var(--spacing-section) 0;
          background: var(--colors-section-alt-bg);
        }
        .discover-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .discover-left {
          display: flex;
          flex-direction: column;
        }
        .discover-right {
          display: flex;
          flex-direction: column;
          padding-top: 8px;
        }
        .faq-title {
          color: var(--colors-text-primary);
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }
        .discover-eyebrow {
          color: var(--colors-accent-pink);
          margin-bottom: var(--spacing-md);
        }
        .discover-heading {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-xxl);
          font-size: 48px;
        }

        /* Play Icon (Base) */
        .play-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--rounded-full);
          border: 2px solid var(--colors-text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .discover-desc {
          color: var(--colors-text-secondary);
          margin-bottom: 48px;
        }

        /* FAQ */
        .faq-container {
          display: flex;
          flex-direction: column;
        }
        .faq-item {
          padding: var(--spacing-lg) 0;
          cursor: pointer;
          border-bottom: 1px solid var(--colors-card-border);
          transition: all 0.2s ease;
        }
        .faq-item:hover {
          padding-left: var(--spacing-sm);
        }
        .faq-question {
          color: var(--colors-text-primary);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-lg);
        }
        .faq-plus {
          color: var(--colors-accent-lime);
          font-size: 24px;
          font-weight: 300;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .faq-plus.rotated {
          transform: rotate(45deg);
        }
        .faq-answer {
          margin-top: var(--spacing-md);
          color: var(--colors-text-secondary);
          padding-right: 48px;
        }

        /* Video Embed */
        .video-container {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          border: 1px solid var(--colors-card-border);
          position: relative;
        }
        .video-thumbnail {
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
        }
        .video-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .video-thumbnail:hover img {
          transform: scale(1.05);
        }
        .video-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .video-thumbnail:hover .video-play-overlay {
          background: rgba(0, 0, 0, 0.2);
        }
        .play-icon.large {
          width: 72px;
          height: 72px;
          background: rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.3);
          backdrop-filter: blur(4px);
        }
        .video-thumbnail:hover .play-icon.large {
          background: var(--colors-accent-lime);
          border-color: var(--colors-accent-lime);
        }
        .video-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        
        @media (max-width: 992px) {
          .discover-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .discover-heading {
            font-size: 36px;
          }
        }
        @media (max-width: 576px) {
          .discover-section {
            padding: 48px 0;
          }
          .discover-heading {
            font-size: 28px;
          }
          .media-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
}
