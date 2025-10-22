import React, { useState, useEffect } from "react";
import { personalInfo, navLinks } from '../data/config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <nav className={`navbar navbar-expand-lg fixed-top modern-navbar ${scrolled ? 'scrolled' : ''}`}>
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bx bx-menu"></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.slice(1))}
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="navbar-cta ms-lg-3">
            <a href={personalInfo.resume} className="btn btn-primary" download>
              <i className="bx bx-download"></i>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
