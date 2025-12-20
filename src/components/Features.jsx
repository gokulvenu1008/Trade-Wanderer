import React from 'react';
import { MonitorPlay, UserCheck, Crosshair, Brain } from 'lucide-react';

const features = [
  {
    icon: <MonitorPlay size={40} />,
    title: "Live Trading Sessions",
    desc: "Watch us trade live and learn execution in real-time."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Personalized Mentorship",
    desc: "1-on-1 guidance & trade reviews to correct your mistakes."
  },
  {
    icon: <Crosshair size={40} />,
    title: "XAUUSD Focus",
    desc: "Specialized strategies for Gold & Major Forex Pairs."
  },
  {
    icon: <Brain size={40} />,
    title: "Psychology Mastery",
    desc: "Master the mental game with our Risk Management frameworks."
  }
];

const Features = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: rgba(255,255,255,0.02);
          padding: 40px 30px;
          border-radius: 16px;
          transition: transform 0.3s ease, background 0.3s ease;
          border: 1px solid transparent;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255,255,255,0.05);
          border-color: rgba(255, 215, 0, 0.2);
        }

        .icon-wrapper {
          color: var(--gold-primary);
          margin-bottom: 24px;
          width: 70px;
          height: 70px;
          background: rgba(255, 215, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card h3 {
          margin-bottom: 12px;
          font-size: 1.25rem;
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
