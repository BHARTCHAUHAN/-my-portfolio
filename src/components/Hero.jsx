import React from 'react';
import profileImage from '../assets/bhart.png';
import { personalInfo, socialLinks } from '../data/config';

const Hero = () => {
    return (
        <section className="hero-canva" id="home">
            <div className="hero-canva-container">
                {/* Profile Section - Centered */}
                <div className="hero-canva-profile" data-aos="fade-up">
                    <div className="hero-canva-image-wrapper">
                        <img 
                            src={profileImage} 
                            alt={personalInfo.name} 
                            className="hero-canva-image"
                            loading="eager"
                        />
                    </div>

                    <div className="hero-canva-intro">
                        <p className="hero-canva-tagline">{personalInfo.tagline}</p>
                        <p className="hero-canva-tagline-highlight">{personalInfo.taglineHighlight}</p>
                    </div>

                    <div className="hero-canva-name">
                        <h1>{personalInfo.firstName}</h1>
                        <h1>{personalInfo.lastName}</h1>
                    </div>

                    <div className="hero-canva-bio">
                        {personalInfo.bio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="hero-canva-actions">
                        <a href={personalInfo.resume} className="hero-canva-btn-primary" download>
                            <i className="bx bx-download"></i> Download CV
                        </a>
                    </div>

                    <div className="hero-canva-socials">
                        {socialLinks.slice(0, 3).map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hero-canva-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.label}
                                aria-label={link.label}
                            >
                                <i className={`bx ${link.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;