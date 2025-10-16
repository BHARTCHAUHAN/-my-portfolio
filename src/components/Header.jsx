import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-violet-900 via-neutral-900 to-violet-900 border-b border-violet-700 shadow-lg">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-violet-400 tracking-wide logo">Data Analyst</a>
        <nav aria-label="Primary" className="flex gap-8 text-base font-medium">
          {[ 
            {href:"#home",label:"Home"},
            {href:"#about",label:"About"},
            {href:"#skills",label:"Skills"},
            {href:"#projects",label:"Projects"},
            {href:"#contact",label:"Contact"},
          ].map(i=>(
            <a
              key={i.href}
              href={i.href}
              className="text-neutral-200 hover:text-violet-400 transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
