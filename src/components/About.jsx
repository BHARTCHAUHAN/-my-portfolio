import React from 'react';

const aboutFeatures = [
    {
        icon: 'bx bx-bar-chart',
        title: 'Data Analysis',
        description: 'Transform raw data into actionable insights with advanced analytics and visualization techniques.',
    },
    {
        icon: 'bx bx-code-block',
        title: 'Python & SQL',
        description: 'Write efficient, scalable code for data pipelines, automation, and complex business logic.',
    },
    {
        icon: 'bx bx-git-branch',
        title: 'ETL Workflows',
        description: 'Design robust data extraction, transformation, and loading processes for enterprise systems.',
    },
    {
        icon: 'bx bx-line-chart',
        title: 'Power BI Dashboards',
        description: 'Create interactive, real-time dashboards that drive data-driven decision making.',
    },
    {
        icon: 'bx bx-brain',
        title: 'Predictive Models',
        description: 'Build machine learning models for forecasting, churn prediction, and anomaly detection.',
    },
    {
        icon: 'bx bx-zap',
        title: 'Performance Optimization',
        description: 'Optimize queries, reduce processing time, and scale analytics infrastructure.',
    },
];

const About = () => {
    return (
        <section className="about-n8n" id="about">
            <div className="about-n8n-container">
                <div className="about-n8n-header" data-aos="fade-up">
                    <h2 className="about-n8n-title">What I Do</h2>
                    <p className="about-n8n-subtitle">
                        I specialize in building end-to-end data solutions that empower organizations to make faster, smarter decisions.
                    </p>
                </div>

                <div className="about-n8n-grid">
                    {aboutFeatures.map((feature, index) => (
                        <article
                            className="about-feature-card"
                            key={feature.title}
                            data-aos="fade-up"
                            data-aos-delay={String(100 + index * 80)}
                        >
                            <div className="about-feature-icon">
                                <i className={`bx ${feature.icon}`} aria-hidden="true" />
                            </div>
                            <div className="about-feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="about-n8n-cta" data-aos="fade-up" data-aos-delay="600">
                    <p className="about-n8n-closing">
                        Every dataset tells a story. My job is to help you discover it, and turn insights into impact.
                    </p>
                    <a href="#projects" className="n8n-btn n8n-btn-primary">
                        See My Work
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
