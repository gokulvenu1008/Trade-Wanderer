import React from 'react';
import { User, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Led by <span className="text-gold">Experts</span></h2>
            <p className="about-lead">
              Founded by <strong>Gokul V & Vinaya R</strong>, full-time professional traders with a mission to create profitable, independent traders.
            </p>
            <p className="about-desc">
              We don't sell dreams; we teach the reality of the markets. With proven results in global forex and commodity markets, our methodology focuses on Psychology, Risk Management, and Precision.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <TrendingUp className="text-gold" size={32} />
                <h3>Proven</h3>
                <p>Results</p>
              </div>
              <div className="stat-card">
                <Award className="text-gold" size={32} />
                <h3>Pro</h3>
                <p>Mentorship</p>
              </div>
            </div>
          </div>

          <div className="founders-card-container">
            <div className="founder-card">
              <div className="founder-image-placeholder">
                <User size={64} color="#555" />
              </div>
              <div className="founder-info">
                <h3>Gokul V & VINAYA R</h3>
                <p className="founder-role">Professional Signal Traders</p>
                <div className="divider"></div>
                <p className="founder-bio">Specialists in Gold (XAUUSD) & Major Forex Pairs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }

        .about-lead {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 16px;
        }

        .about-desc {
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.8;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .stats-grid {
          display: flex;
          gap: 30px;
        }

        .stat-card {
          background: rgba(255,255,255,0.03);
          padding: 20px;
          border-radius: 12px;
          min-width: 120px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .stat-card h3 {
          margin: 10px 0 5px;
          font-size: 1.2rem;
        }

        .stat-card p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .founders-card-container {
          display: flex;
          justify-content: center;
        }

        .founder-card {
          background: #1a1a24;
          padding: 30px;
          border-radius: 20px;
          width: 100%;
          max-width: 400px;
          text-align: center;
          border: 1px solid rgba(255, 215, 0, 0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          position: relative;
        }

        /* Gold Glow effect */
        .founder-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          padding: 1px;
          background: linear-gradient(45deg, transparent, var(--gold-primary), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .founder-image-placeholder {
          width: 120px;
          height: 120px;
          background: #111;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--gold-primary);
        }

        .founder-info h3 {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }

        .founder-role {
          color: var(--gold-primary);
          font-weight: 500;
        }

        .divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 20px 0;
        }

        .founder-bio {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
