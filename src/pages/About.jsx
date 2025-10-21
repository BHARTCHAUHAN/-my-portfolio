import React from 'react';
import { personalInfo, skillCategories } from '../data/config';

const About = () => {
    return (
        <section className="about-canva" id="about">
            <div className="about-canva-container">
                <h2 className="about-canva-title" data-aos="fade-up">
                    Hello, I&apos;m {personalInfo.firstName}!
                </h2>
                
                <div className="about-canva-intro" data-aos="fade-up" data-aos-delay="100">
                    <p>{personalInfo.subtitle}</p>
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
