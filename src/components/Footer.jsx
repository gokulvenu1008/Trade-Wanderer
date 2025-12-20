import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="text-gold">TRADE</span> WANDERER
                    </div>
                    <p className="copyright">
                        © {new Date().getFullYear()} Trade Wanderer. All rights reserved.
                    </p>
                </div>
            </div>

            <style>{`
        .footer {
          padding: 60px 0 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 80px;
        }

        .footer-content {
          text-align: center;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
