import React, { useState } from 'react';
import "../Style/navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="navigation">
        {/* Hamburger Button for Small Screens */}
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>
        {/* Navigation Menu */}
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills-container">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        {/* Overlay for the pop-up effect */}
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </div>
  );
}

export default Navigation;
