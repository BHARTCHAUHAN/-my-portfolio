import React from "react";

function SkillBar({ label, value, delay = 0 }) {
  const percentage = Math.max(0, Math.min(100, value));
  return (
    <div className="skill-bar-wrapper" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-bar-header">
        <span className="skill-bar-label">{label}</span>
        <span className="skill-bar-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'bx bx-code-block',
    skills: [
      { label: 'Python', value: 92 },
      { label: 'SQL', value: 88 },
      { label: 'JavaScript', value: 75 },
      { label: 'R', value: 80 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: 'bx bx-line-chart',
    skills: [
      { label: 'Power BI', value: 90 },
      { label: 'Tableau', value: 85 },
      { label: 'Excel Advanced', value: 95 },
      { label: 'Data Visualization', value: 88 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: 'bx bx-git-branch',
    skills: [
      { label: 'ETL Workflows', value: 87 },
      { label: 'Git & GitHub', value: 83 },
      { label: 'Apache Spark', value: 78 },
      { label: 'Docker', value: 75 },
    ],
  },
  {
    title: 'Data Science',
    icon: 'bx bx-brain',
    skills: [
      { label: 'Machine Learning', value: 82 },
      { label: 'Statistical Analysis', value: 88 },
      { label: 'Predictive Modeling', value: 85 },
      { label: 'NLP', value: 80 },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-n8n" id="skills">
      <div className="skills-n8n-container">
        <div className="skills-n8n-header" data-aos="fade-up">
          <h2 className="skills-n8n-title">Skills & Expertise</h2>
          <p className="skills-n8n-subtitle">
            A comprehensive toolkit of technical and analytical capabilities, continuously evolved through real-world projects.
          </p>
        </div>

        <div className="skills-n8n-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category-card"
              data-aos="fade-up"
              data-aos-delay={String(100 + categoryIndex * 120)}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <i className={`bx ${category.icon}`} aria-hidden="true" />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-category-items">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.label}
                    {...skill}
                    delay={50 + skillIndex * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-n8n-footer" data-aos="fade-up" data-aos-delay="600">
          <p>
            Continuously learning and upgrading skills to stay ahead of industry trends and deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
