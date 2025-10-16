import React from "react";

function SkillBar({ label, value }) {
  const v = Math.max(0, Math.min(100, Math.round(value / 5) * 5));
  return (
    <div className="n8n-skillbar">
      <div className="n8n-skillbar-labels">
        <span className="n8n-skillbar-label">{label}</span>
        <span className="n8n-skillbar-value">{v}%</span>
      </div>
      <div className="n8n-skillbar-bar-bg">
        <div className="n8n-skillbar-bar" style={{ width: `${v}%` }} />
      </div>
    </div>
  );
}

function Skills() {
  const technical = [
    { label: "Python", value: 90 },
    { label: "SQL", value: 85 },
    { label: "Power BI", value: 80 },
    { label: "Excel", value: 95 },
    { label: "Tableau", value: 75 }
  ];

  const professional = [
    { label: "Statistical Analysis", value: 90 },
    { label: "Data Visualization", value: 85 },
    { label: "Problem Solving", value: 88 },
    { label: "Team Collaboration", value: 92 },
    { label: "Communication", value: 86 }
  ];

  return (
    <section className="skills-n8n">
      <div className="skills-n8n-content">
        <h2 className="skills-n8n-title gradient-text">My Skills</h2>
        <div className="skills-n8n-columns">
          <div className="skills-n8n-col">
            <h3 className="skills-n8n-subtitle">Technical Skills</h3>
            {technical.map(s => <SkillBar key={s.label} {...s} />)}
          </div>
          <div className="skills-n8n-col">
            <h3 className="skills-n8n-subtitle">Professional Skills</h3>
            {professional.map(s => <SkillBar key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
