"use client";

import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return newTimeLeft;
    };

    // Set initial state
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {timeBlocks.map((block, i) => (
        <div key={i} style={{ 
          background: 'rgba(255,255,255,0.05)', 
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '24px',
          minWidth: '120px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1 }}>
            {String(block.value).padStart(2, '0')}
          </h3>
          <p style={{ color: 'var(--accent-primary)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 600 }}>
            {block.label}
          </p>
        </div>
      ))}
    </div>
  );
}
