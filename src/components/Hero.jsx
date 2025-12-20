import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <h1 className="hero-title">
                        Create Real, <br />
                        <span className="text-gradient">Profitable Traders</span>
                    </h1>
                    <p className="hero-subtitle">
                        Not just another signal group. We deliver practical, no-nonsense training
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

        .hero-content {
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
          background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(15, 15, 15, 0) 70%);
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

        @media (max-width: 768px) {
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
