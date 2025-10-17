import React, { useState } from 'react';
import profileImage from '../assets/iamge2.jpg';

const metrics = [
    { value: '25+', label: 'Dashboards Delivered' },
    { value: '120K+', label: 'Rows Automated Daily' },
    { value: '5+', label: 'Industries Analyzed' },
];

const highlightCards = [
    {
        icon: 'bx bx-line-chart',
        title: 'Insight Automation',
        description: 'Power BI & Python workflows for real-time KPI tracking.',
    },
    {
        icon: 'bx bx-brain',
        title: 'Predictive Analytics',
        description: 'Churn, sales & retention models that drive business strategy.',
    },
    {
        icon: 'bx bx-transfer',
        title: 'Data Ops',
        description: 'Built resilient ETL pipelines processing 500GB+ datasets.',
    },
];

const socialLinks = [
    { href: 'https://github.com/BHARTCHAUHAN', icon: 'bxl-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/bhart-chauhan-8a65bb277/', icon: 'bxl-linkedin', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/bhart___chauhan_', icon: 'bxl-instagram', label: 'Instagram' },
    { href: 'mailto:chauhanbhart2792@gmail.com', icon: 'bx-envelope', label: 'Email' },
];

const ambientShapes = [
    'hero-orb hero-orb-one',
    'hero-orb hero-orb-two',
    'hero-orb hero-orb-three',
    'hero-orb hero-orb-four',
    'hero-dotted-ring',
];

const backgroundVariants = [
    { key: 'gradient', label: 'Aurora Glow' },
    { key: 'nebula', label: 'Circuit Nebula' },
];

const Hero = () => {
    const [backgroundVariant, setBackgroundVariant] = useState(backgroundVariants[0].key);

    const toggleBackground = () => {
        setBackgroundVariant((current) =>
            current === backgroundVariants[0].key ? backgroundVariants[1].key : backgroundVariants[0].key,
        );
    };

    const activeBackground =
        backgroundVariants.find((variant) => variant.key === backgroundVariant)?.label ||
        backgroundVariants[0].label;
    const nextBackground =
        backgroundVariant === backgroundVariants[0].key ? backgroundVariants[1] : backgroundVariants[0];

    return (
        <section className={`hero-n8n hero-bg-${backgroundVariant}`} id="home">
            <div className="hero-n8n-background" aria-hidden="true" />
            <div className="hero-ambient" aria-hidden="true">
                {ambientShapes.map((shapeClass) => (
                    <span key={shapeClass} className={shapeClass} />
                ))}
            </div>
            <div className="hero-n8n-inner">
                <div className="hero-n8n-content-card" data-aos="fade-up">
                    <span className="hero-pill">
                        <i className="bx bxs-bar-chart-alt-2" aria-hidden="true" /> Data Analytics Specialist
                    </span>
                    <h1 className="hero-heading">
                        Hi, I&apos;m <span className="gradient-text">Bhart Chauhan</span>
                    </h1>
                    <p className="hero-lead">
                        I design modern analytics experiences using <span className="highlight">Python</span>,{' '}
                        <span className="highlight">SQL</span> and <span className="highlight">Power BI</span> to convert raw datasets into confident, data-driven decisions for leaders.
                    </p>

                    <div className="hero-metrics" role="list">
                        {metrics.map((metric, index) => (
                            <div
                                className="hero-metric"
                                key={metric.label}
                                role="listitem"
                                data-aos="zoom-in"
                                data-aos-delay={String(120 + index * 120)}
                            >
                                <span className="metric-value">{metric.value}</span>
                                <span className="metric-label">{metric.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a
                            href="Bhart_Chauhan_Data_Analyst_Resume.pdf"
                            className="n8n-btn n8n-btn-primary"
                            download
                        >
                            Download Resume
                        </a>
                        <a href="#projects" className="n8n-btn n8n-btn-secondary">
                            View Projects
                        </a>
                    </div>

                    <div className="hero-background-toggle">
                        <button
                            type="button"
                            className="hero-background-toggle-btn"
                            onClick={toggleBackground}
                            aria-pressed={backgroundVariant === backgroundVariants[1].key}
                        >
                            <i className="bx bx-grid-alt" aria-hidden="true" />
                            Switch to {nextBackground.label}
                        </button>
                        <span className="hero-background-label">{activeBackground}</span>
                    </div>

                    <div className="hero-social">
                        <span className="hero-social-label">Let&apos;s connect</span>
                        <div className="hero-social-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`bx ${link.icon}`} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hero-n8n-visual" data-aos="fade-left" data-aos-delay="150">
                    <div className="hero-avatar-card">
                        <div className="hero-avatar-glow" aria-hidden="true" />
                        <img src={profileImage} alt="Bhart Chauhan" className="hero-avatar" />
                        <div className="hero-avatar-badge">
                            <i className="bx bx-time-five" aria-hidden="true" />
                            <div>
                                <span>Available for new projects</span>
                                <strong>Let&apos;s collaborate</strong>
                            </div>
                        </div>
                    </div>

                    <div className="hero-highlight-grid">
                        {highlightCards.map((card, index) => (
                            <article
                                className="hero-highlight-card"
                                key={card.title}
                                data-aos="fade-up"
                                data-aos-delay={String(220 + index * 150)}
                            >
                                <span className="hero-highlight-icon">
                                    <i className={`bx ${card.icon}`} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;