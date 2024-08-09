import React from 'react';
import '../styles/Header.css'; // Make sure to create this CSS file and adjust the path accordingly

function Header() {
  return (
    <header className="header">
      <nav className="main-navbar">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
