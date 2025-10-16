import React, { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data/projects.json"; // path adjust if needed

const FILTERS = ["All","Power BI","SQL","Python","Excel"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const list = useMemo(()=>{
    if (active==="All") return data;
    return data.filter(p => (p.stack||[]).includes(active));
  }, [active]);

  return (
    <section className="projects-n8n">
      <div className="projects-n8n-content">
        <h2 className="projects-n8n-title gradient-text">My Projects</h2>
        <div className="projects-n8n-filters">
          {FILTERS.map(f=>(
            <button
              key={f}
              onClick={()=>setActive(f)}
              aria-pressed={active===f}
              className={`projects-n8n-filter ${active===f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="projects-n8n-grid">
          {list.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  );
}
