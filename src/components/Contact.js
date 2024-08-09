import React, { useRef } from 'react';
import '../styles/Contact.css'; // Make sure to import the CSS file

import itchioIcon from './assets/images/itchio.png';
import discordIcon from './assets/images/discord.png';
import githubIcon from './assets/images/github.png';
import linkedinIcon from './assets/images/linkedin.png';
import telIcon from './assets/images/tel.png';
import emailIcon from './assets/images/email.png';
import clickSound from './assets/sounds/tap.mp3'; // Import your click sound

function Contact() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="https://karolart90.itch.io/" target="_blank" rel="noopener noreferrer" onClick={playSound}>
          <img src={itchioIcon} alt="itchio" />
        </a>
        <a href="https://discord.com/login" target="_blank" rel="noopener noreferrer" onClick={playSound}>
          <img src={discordIcon} alt="Discord" />
        </a>
        <a href="https://github.com/Karolart" target="_blank" rel="noopener noreferrer" onClick={playSound}>
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/karolart/" target="_blank" rel="noopener noreferrer" onClick={playSound}>
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://wa.me/573014516422" target="_blank" rel="noopener noreferrer" onClick={playSound}>
          <img src={telIcon} alt="Phone" />
        </a>
        <a href="mailto:diazariaskarolvanessa@gmail.com" onClick={playSound}>
          <img src={emailIcon} alt="Email" />
        </a>
      </div>
      <audio ref={audioRef} src={clickSound} preload="auto"></audio>
    </section>
  );
}

export default Contact;
