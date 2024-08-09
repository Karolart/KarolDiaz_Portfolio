// src/components/Illustration.js
import React from 'react';
import '../styles/Illustration.css';
import semifinal1 from '../components/assets/images/semifinalista (2).png';
import semifinal2 from '../components/assets/images/semifinalista (1).png';



function Illustration() {
  return (
    <section className="illustration-section">
    <div className="illustration-panel">
      <h3>Cuéntale a tu país, historias urbanas y rurales</h3>
      <div className="illustration-content">
        <div className="image-wrapper">
        <img src={semifinal1} alt="Karol Díaz" />
        <img src={semifinal2} alt="Karol Díaz" />
        </div>
        <p>
          I was a semifinalist in the "Cuéntale a tu país" illustration contest with my drawing titled "Shame".
        </p>
        <a href="https://unilibros.co/gpd-cuentale-a-tu-pais.html" target="_blank" rel="noopener noreferrer">
          View the contest
        </a>
        </div>
      </div>
    </section>
  );
}

export default Illustration;
