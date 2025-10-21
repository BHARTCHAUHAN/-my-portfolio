import React from 'react';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: ['SQL', 'Python', 'Microsoft Excel', 'Google Sheet'],
    },
    {
        title: 'Data Analytic Tools',
        skills: ['Google BigQuery', 'Visual Code Studio'],
    },
    {
        title: 'Data Visualization Tools',
        skills: ['Tableau', 'Looker Studio'],
    },
    {
        title: 'Data Analytic Methods',
        skills: ['EDA', 'Segmentation/Clustering', 'Cohort', 'Linear Regression', 'Logistic Regression', 'Statistic', 'A/B Testing', 'ANOVA', 'T-Test'],
    },
];

const About = () => {
    return (
        <section className="about-canva" id="about">
            <div className="about-canva-container">
                <h2 className="about-canva-title" data-aos="fade-up">Hello, I&apos;m Gardi!</h2>
                
                <div className="about-canva-intro" data-aos="fade-up" data-aos-delay="100">
                    <p>Data Reporting / Analyst and Certified Banking Generalist with a proven track record in various analytical roles, showcasing expertise in end-to-end business processes within the Banking / Financial Industry.</p>
                </div>

                <div className="about-canva-skills-grid">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={category.title}
                            className="skill-category"
                            data-aos="fade-up"
                            data-aos-delay={String(100 + index * 100)}
                        >
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
