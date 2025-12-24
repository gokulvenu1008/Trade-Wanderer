import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';

const Course = () => {
  return (
    <section id="course" className="section">
      <div className="container">
        <div className="pricing-card-wrapper">
          <div className="pricing-card">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h2>Beginner Batch</h2>
              <p>The complete foundation for profitable trading</p>
            </div>

            <div className="price-box">
              <span className="currency">₹</span>
              <span className="amount">3000</span>
              <span className="original-price">₹5000</span>
            </div>

            <ul className="course-features">
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>ICT Concepts - Basic to Advanced</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Trading Setup</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Live Training Sessions</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Lifetime Community Access</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>24/7 Whatsapp Support</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Risk Management Strategy</span>
              </li>
            </ul>

            <a href="https://wa.me/+917306593906" className="btn-primary full-width">
              Enroll Now <Zap size={18} style={{ marginLeft: '8px' }} />
            </a>

            <p className="guarantee-text">Limited seats available for next batch</p>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h2>1-on-1 Mentorship</h2>
              <p>Ultimate personalized learning experience</p>
            </div>

            <div className="price-box">
              <span className="currency">₹</span>
              <span className="amount">7000</span>
              <span className="original-price">₹10000</span>
            </div>

            <ul className="course-features">
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Personal Guidance</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Real-time 1-on-1 Feedback</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Personal Trading Setup</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Lifetime Community Access</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>24/7 Whatsapp Support</span>
              </li>
              <li>
                <CheckCircle size={20} className="check-icon" />
                <span>Risk Management Strategy</span>
              </li>
            </ul>

            <a href="https://wa.me/+917306593906" className="btn-primary full-width" style={{ marginTop: 'auto' }}>
              Enroll Now <Zap size={18} style={{ marginLeft: '8px' }} />
            </a>

            <p className="guarantee-text">Exclusive mentorship slots</p>
          </div>
        </div>
      </div>

      <style>{`
        .pricing-card-wrapper {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          padding: 40px 0;
        }

        .pricing-card {
          background: linear-gradient(145deg, #1a1a24, #13131b);
          border-radius: 24px;
          padding: 50px;
          width: 100%;
          max-width: 450px;
          position: relative;
          border: 1px solid rgba(255, 215, 0, 0.15);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--gold-gradient);
          color: black;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
        }

        .card-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .card-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .card-header p {
          color: var(--text-secondary);
        }

        .price-box {
          text-align: center;
          margin-bottom: 40px;
          color: white;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 12px;
        }

        .currency {
          font-size: 2rem;
          font-weight: 600;
        }

        .amount {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
        }

        .original-price {
          color: var(--text-secondary);
          text-decoration: line-through;
          font-size: 1.5rem;
          font-weight: 600;
          opacity: 0.6;
        }

        .period {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .course-features {
          list-style: none;
          margin-bottom: 40px;
        }

        .course-features li {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          font-size: 1.05rem;
        }

        .check-icon {
          color: var(--gold-primary);
          margin-right: 15px;
          min-width: 20px;
        }

        .full-width {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
          font-size: 1.1rem;
        }

        .guarantee-text {
          text-align: center;
          margin-top: 15px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default Course;
