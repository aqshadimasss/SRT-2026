"use client";

import { useState } from 'react';
import LinearIcon from './LinearIcon';

export default function Discover() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqs = [
    { q: 'How can we initiate a partnership with your organization?', a: 'Please contact our PR team via email or Instagram DM. We are open to collaborations with universities, companies, and communities.' },
    { q: 'Do you offer any programs or booths for us to visit?', a: 'Yes, we frequently participate in university expos and host open-door days during exhibition periods.' },
    { q: 'When will you be opening recruitment for new members?', a: 'Recruitment typically opens at the start of the odd semester. Follow our Instagram for announcements.' }
  ];

  return (
    <section id="media" className="discover-section">
      <div className="container">
        <div className="discover-grid">
          
          {/* Left Side */}
          <div className="discover-left">
            <p className="eyebrow discover-eyebrow">Explore & Learn</p>
            <h2 className="display-large discover-heading">
              DISCOVER SRT<br/>IN A <span className="chip-lime-keyword">NEW WAY</span>
            </h2>
            
            <div className="watch-media-btn">
              <div className="play-icon">
                <LinearIcon name="play" size={14} color="var(--colors-text-primary)" strokeWidth={2} style={{ marginLeft: '2px' }} />
              </div>
              <span className="button-cap-light watch-text">WATCH THE MEDIA</span>
            </div>

            <p className="body-lg discover-desc">
              Have you ever wondered how our robots are built? From late night coding to arena battles, discover our journey.
            </p>

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

          {/* Right Side: Media Grid */}
          <div className="media-grid">
             {[
               { label: 'Workshop', icon: 'tools' },
               { label: 'Competition', icon: 'trophy' },
               { label: 'Team Building', icon: 'handshake' },
               { label: 'Lab Session', icon: 'microscope' }
             ].map((item, i) => (
                <div key={i} className="media-card">
                  <div className="media-card-emoji"><LinearIcon name={item.icon} size={40} color="var(--colors-accent-lime)" strokeWidth={1.2} /></div>
                  <div className="media-play-btn">
                    <LinearIcon name="play" size={12} color="var(--colors-text-primary)" strokeWidth={2} style={{ marginLeft: '2px' }} />
                  </div>
                  <p className="micro-cap media-label">{item.label}</p>
                </div>
             ))}
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
        .discover-eyebrow {
          color: var(--colors-accent-pink);
          margin-bottom: var(--spacing-md);
        }
        .discover-heading {
          color: var(--colors-text-primary);
          margin-bottom: var(--spacing-xxl);
          font-size: 48px;
        }

        /* Watch Button */
        .watch-media-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xxl);
          cursor: pointer;
          width: fit-content;
        }
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
        .play-icon span {
          color: var(--colors-text-primary);
          margin-left: 3px;
          font-size: 14px;
        }
        .watch-media-btn:hover .play-icon {
          background: var(--colors-accent-lime);
          border-color: var(--colors-accent-lime);
        }
        .watch-media-btn:hover .play-icon span {
          color: var(--colors-ink-deep);
        }
        .watch-text {
          color: var(--colors-text-primary);
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

        /* Media Grid */
        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }
        .media-card {
          aspect-ratio: 1;
          background: var(--colors-card-bg);
          border: 1px solid var(--colors-card-border);
          border-radius: var(--rounded-xxl);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }
        .media-card:hover {
          border-color: var(--colors-accent-violet-mid);
          transform: scale(1.03);
        }
        .media-card-emoji {
          opacity: 0.35;
          transition: all 0.3s ease;
          line-height: 1;
        }
        .media-card:hover .media-card-emoji {
          opacity: 0.6;
          transform: scale(1.1);
        }
        .media-play-btn {
          width: 36px;
          height: 36px;
          border-radius: var(--rounded-full);
          background: var(--colors-ghost-bg);
          border: 1px solid var(--colors-card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .media-play-btn svg {
          color: var(--colors-text-primary);
        }
        .media-card:hover .media-play-btn {
          background: var(--colors-accent-lime);
          border-color: var(--colors-accent-lime);
        }
        .media-card:hover .media-play-btn span {
          color: var(--colors-ink-deep);
        }
        .media-label {
          color: var(--colors-text-secondary);
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
