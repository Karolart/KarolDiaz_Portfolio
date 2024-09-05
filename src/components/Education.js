import React from 'react';
import '../styles/Education.css'; // Make sure to import the CSS file
import holbie from '../components/assets/images/HolbertonLogo.png';
import frontendImage from '../components/assets/images/frontEnd.png';
import backendImage from '../components/assets/images/backEnd.png';
import databaseImage from '../components/assets/images/db.png';
import qaImage from '../components/assets/images/qa.png';
import toolsImage from '../components/assets/images/tools.png';
import unityImage from '../components/assets/images/unityblender.png';

function Education() {
  return (
    <><section id="education" className="section">
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
    </section><section id="technologies" className="section">
        <div className="panel">
          <h2>Technologies I Use</h2>
          <div className="tech-grid">
            {/* game */}
              <div className="tech-item">
              <img src={unityImage} alt="videogames" />
              <h4>VideoGames Development</h4>
              <p>Unity, Scratch, Blender</p>
            </div>
            {/* Frontend */}
            <div className="tech-item">
              <img src={frontendImage} alt="Frontend" />
              <h4>Frontend</h4>
              <p>React, Angular, HTML, CSS, JavaScript</p>
            </div>
            {/* Backend */}
            <div className="tech-item">
              <img src={backendImage} alt="Backend" />
              <h4>Backend</h4>
              <p>Java, C#, Node.js, Express,REST APIs.</p>
            </div>
            {/* Database */}
            <div className="tech-item">
              <img src={databaseImage} alt="Database" />
              <h4>Database</h4>
              <p> PostgreSQL,MySQL, MongoDB,</p>
            </div>
            {/* QA */}
            <div className="tech-item">
              <img src={qaImage} alt="QA" />
              <h4>Quality Assurance (QA)</h4>
              <p>Cypress,Postman, Selenium.</p>
            </div>
            {/* Tools */}
            <div className="tech-item">
              <img src={toolsImage} alt="Tools" />
              <h4>Tools</h4>
              <p>AWS, Redash, Grafana</p>
            </div>
          </div>
        </div>
      </section></>

    
  );
}

export default Education;
