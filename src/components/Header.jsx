import React, { useState, useEffect, useRef } from "react";
import { personalInfo, navLinks } from '../data/config';

export default function Header() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== 'undefined' ? window.innerWidth >= 992 : true));

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
      if (desktop) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = ({ key }) => {
      if (key === 'Escape') {
        closeMenu();
      }
    };

    const handleClickOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      let currentSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`navbar navbar-expand-lg fixed-top modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand" href="#home">
          <span className="brand-icon">
            <i className="bx bxs-data"></i>
          </span>
          <span className="brand-text">{personalInfo.name}</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse modern-navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
          style={isDesktop ? undefined : { display: isMenuOpen ? 'block' : 'none' }}
        >
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.slice(1));
                    closeMenu();
                  }}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar-cta ms-lg-3">
            <a href={personalInfo.resume} className="btn btn-primary" download onClick={closeMenu}>
              <i className="bx bx-download"></i>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
