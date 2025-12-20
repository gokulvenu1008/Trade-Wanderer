import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="text-gold">TRADE</span> WANDERER
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#course" onClick={() => setIsMobileMenuOpen(false)}>Course</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <button className="close-menu" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="nav-actions">
          <a href="https://wa.me/+917306593906" className="btn-primary flex-center">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Book Now
          </a>
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} color="white" />
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          font-weight: 500;
          opacity: 0.8;
          position: relative;
        }

        .nav-links a:hover {
          opacity: 1;
          color: var(--gold-primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--gold-primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .flex-center {
          display: flex;
          align-items: center;
        }

        .mobile-toggle, .close-menu {
          display: none;
          background: none;
          color: white;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 80%;
            background: var(--bg-secondary);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
            box-shadow: -5px 0 20px rgba(0,0,0,0.5);
          }

          .nav-links.active {
            right: 0;
          }

          .mobile-toggle {
            display: block;
          }
          
          .close-menu {
            display: block;
            position: absolute;
            top: 20px;
            right: 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
