import React from 'react';
import { ArrowRight, Instagram, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-text animate-fade-in">
          <h1 className="hero-title">
            Create Real, <br />
            <span className="text-gradient">Profitable Traders</span>
          </h1>
          <p className="hero-subtitle">
            Not just another signal group. We deliver practical, ICT Concept training
            that works in real market conditions. Master Gold (XAUUSD) & Global Forex markets.
          </p>
          <div className="hero-actions">
            <a href="#course" className="btn-primary flex-center">
              Join Beginner Batch <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#about" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-visual animate-up">
          <div className="instagram-card">
            <div className="insta-header">
              <div className="insta-icon-wrapper">
                <Instagram size={40} className="text-gold" />
              </div>
              <div className="insta-info">
                <h3>Trade Wanderer</h3>
                <p>@tradewanderer</p>
              </div>
            </div>

            <div className="insta-stats">
              <div className="stat-item">
                <span className="stat-value">Daily</span>
                <span className="stat-label">Analysis</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">Live</span>
                <span className="stat-label">Mentorship</span>
              </div>
            </div>

            <p className="insta-desc">
              Join our growing community for daily market insights and trading tips.
            </p>

            <div className="social-actions">
              <a href="https://instagram.com/tradewanderer" target="_blank" rel="noopener noreferrer" className="btn-social btn-insta">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://t.me/tradewanderer" target="_blank" rel="noopener noreferrer" className="btn-social btn-telegram">
                <Send size={18} /> Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-sphere"></div>
        <div className="grid-overlay"></div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          max-width: 650px;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .instagram-card {
          background: rgba(20, 20, 25, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 24px;
          padding: 32px;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
                      0 0 30px rgba(212, 175, 55, 0.1);
          transform: rotateY(-10deg) rotateX(5deg);
          transition: transform 0.4s ease, border-color 0.4s ease;
          animation: float 6s ease-in-out infinite;
        }

        .instagram-card:hover {
          transform: rotateY(0) rotateX(0) translateY(-10px);
          border-color: var(--gold-primary);
        }

        .insta-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .insta-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insta-info h3 {
          font-size: 1.2rem;
          margin-bottom: 4px;
          color: #fff;
        }

        .insta-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .insta-stats {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-value {
          display: block;
          font-weight: 700;
          color: var(--gold-primary);
          font-size: 1.1rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
        }

        .insta-desc {
          color: #ccc;
          margin-bottom: 24px;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .social-actions {
          display: flex;
          gap: 12px;
        }

        .btn-social {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .btn-insta {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
          color: white;
        }

        .btn-telegram {
          background: #0088cc;
          color: white;
        }

        .btn-social:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .btn-outline {
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .gradient-sphere {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
          filter: blur(60px);
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        @keyframes float {
          0% { transform: rotateY(-10deg) rotateX(5deg) translateY(0px); }
          50% { transform: rotateY(-10deg) rotateX(5deg) translateY(-15px); }
          100% { transform: rotateY(-10deg) rotateX(5deg) translateY(0px); }
        }

        .animate-up {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text {
            margin: 0 auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-visual {
            margin-top: 60px;
            perspective: none;
          }
          
          .instagram-card {
            transform: none;
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 120px;
            align-items: flex-start;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary, .btn-outline {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
