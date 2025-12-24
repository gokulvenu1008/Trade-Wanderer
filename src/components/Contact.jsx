import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center">Get in <span className="text-gold">Touch</span></h2>
        <p className="section-subtitle text-center">
          Have questions? We're here to help you start your trading journey.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-box">
                <Phone size={24} />
              </div>
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:+917306593906" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>+91 73065 93906</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:gokulv508g@gmail.com" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'} onMouseLeave={(e) => e.target.style.color = '#aaa'}>gokulv508g@gmail.com</a></p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>

            <div className="social-links">
              {/* Add social links if needed later */}
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, #0a0a0a, #111);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          margin-top: 50px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.03);
          padding: 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold-primary);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-primary);
        }

        .info-card h3 {
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: #fff;
        }

        .info-card p {
          color: #aaa;
          font-size: 0.95rem;
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.03);
          padding: 40px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #fff;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--gold-primary);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .contact-form {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
