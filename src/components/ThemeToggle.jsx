import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // 'dark' ko default theme set karte hain
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Jab bhi theme badle, yeh body tag par data-theme attribute set kar dega
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === 'dark' ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>}
    </button>
  );
};

export default ThemeToggle;