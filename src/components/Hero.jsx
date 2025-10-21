import React from 'react';
import profileImage from '../assets/bhart.png';

const socialLinks = [
    { href: 'https://www.linkedin.com/in/bhart-chauhan-8a65bb277/', icon: 'bxl-linkedin', label: 'LinkedIn' },
    { href: 'https://wa.me/918189091763', icon: 'bxl-whatsapp', label: 'WhatsApp' },
    { href: 'mailto:chauhanbhart2792@gmail.com', icon: 'bx-envelope', label: 'Email' },
];

const Hero = () => {
    return (
        <section className="hero-canva" id="home">
            <div className="hero-canva-container">
                {/* Profile Section - Centered */}
                <div className="hero-canva-profile" data-aos="fade-up">
                    <h2 className="hero-canva-subtitle">DATA ANALYST PORTFOLIO</h2>
                    
                    <div className="hero-canva-image-wrapper">
                        <img src={profileImage} alt="Bhart Chauhan" className="hero-canva-image" />
                    </div>

                    <div className="hero-canva-intro">
                        <p className="hero-canva-tagline">I help people finding insights</p>
                        <p className="hero-canva-tagline-highlight">through data</p>
                    </div>

                    <div className="hero-canva-name">
                        <h1>BHART</h1>
                        <h1>CHAUHAN</h1>
                    </div>

                    <div className="hero-canva-bio">
                        <p>Data Reporting / Analyst and Certified Banking Generalist with a proven track record in various analytical roles, showcasing expertise in end-to-end business processes within the Banking / Financial Industry.</p>
                        <p>Proficient in SQL, Python, Google Sheets, Microsoft Excel, Statistics, Tableau, and Google Looker Studio for comprehensive data analysis and visualization. Comfortable with end-to-end data analysis, data processing, dashboard / daily reporting creation, and presenting actionable insights with effective communication and engaging story-telling skills.</p>
                    </div>

                    <div className="hero-canva-actions">
                        <a href="Bhart_Chauhan_Resume.pdf" className="hero-canva-btn-primary" download>
                            <i className="bx bx-download"></i> Download CV
                        </a>
                    </div>

                    <div className="hero-canva-socials">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hero-canva-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.label}
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