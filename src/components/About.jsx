import React from 'react';
import { User, TrendingUp, Award } from 'lucide-react';
import profilePic from '../assets/profile pic.jpg';

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
              "Instead of chasing market myths, we master real-world mechanics through a disciplined focus on high-precision entries and professional risk management."
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
                <img src={profilePic} alt="Gokul V & Vinaya R" className="founder-img" />
              </div>
              <div className="founder-info">
                <h3>Gokul V & Vinaya R</h3>
                <p className="founder-role">Professional Traders</p>
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
          background: rgba(20, 20, 25, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid var(--gold-primary);
          padding: 32px;
          border-radius: 24px;
          width: 100%;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
                      0 0 30px rgba(212, 175, 55, 0.1);
          transform: rotateY(-10deg) rotateX(5deg);
          transition: transform 0.4s ease;
          animation: float 6s ease-in-out infinite;
          perspective: 1000px;
        }

        .founder-card:hover {
          transform: rotateY(0) rotateX(0) translateY(-10px);
        }

        @keyframes float {
          0% { transform: rotateY(-10deg) rotateX(5deg) translateY(0px); }
          50% { transform: rotateY(-10deg) rotateX(5deg) translateY(-15px); }
          100% { transform: rotateY(-10deg) rotateX(5deg) translateY(0px); }
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
          overflow: hidden;
        }

        .founder-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
          
          .founder-card {
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
