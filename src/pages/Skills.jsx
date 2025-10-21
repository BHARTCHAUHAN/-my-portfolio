import React from "react";

function Skills() {
  const skillGrouping = [
    {
      mainCategory: 'Programming Languages',
      icon: 'bx bx-code-block',
      skills: ['SQL', 'Python', 'Microsoft Excel', 'Google Sheet']
    },
    {
      mainCategory: 'Data Analytic Tools',
      icon: 'bx bx-line-chart',
      skills: ['Google BigQuery', 'Visual Code Studio']
    },
    {
      mainCategory: 'Data Visualization Tools',
      icon: 'bx bx-bar-chart',
      skills: ['Tableau', 'Looker Studio']
    },
    {
      mainCategory: 'Data Analytic Methods',
      icon: 'bx bx-brain',
      skills: ['EDA', 'Segmentation/Clustering', 'Cohort', 'Linear Regression', 'Logistic Regression', 'Statistic', 'A/B Testing', 'ANOVA', 'T-Test']
    }
  ];

  return (
    <section className="skills-n8n" id="skills">
      <div className="skills-n8n-container">
        <div className="skills-n8n-header" data-aos="fade-up">
          <h2 className="skills-n8n-title">Technical Skills</h2>
        </div>

        <div className="skills-display-grid">
          {skillGrouping.map((group, groupIndex) => (
            <div
              key={group.mainCategory}
              className="skill-display-card"
              data-aos="fade-up"
              data-aos-delay={String(100 + groupIndex * 120)}
            >
              <div className="skill-display-header">
                <i className={`bx ${group.icon}`} aria-hidden="true" />
                <h3>{group.mainCategory}</h3>
              </div>

              <div className="skill-display-list">
                {group.skills.map((skill, skillIndex) => (
                  <div key={skill} className="skill-display-item">
                    <i className="bx bx-check-circle" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
