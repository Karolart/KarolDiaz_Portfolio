import React from 'react';
import '../styles/Education.css'; // Make sure to import the CSS file
import holbie from '../components/assets/images/HolbertonLogo.png';

function Education() {
  return (
    <section id="education" className="section">
      <div id="education-panel" className="education-panel">
        <div className="education-content">
          <div className="education-text">
            <p>Hello there!</p>
            <p>
              I’m a programmer passionate about blending coding with drawing. I
              graduated from Holberton School's Front-End program and Generation
              Bootcamp's Unity Developer course.
            </p>
          </div>
          <div className="education-image">
          <img src={holbie} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
