import React, { useRef } from 'react';
import '../styles/About.css';
import profileImage from './assets/images/KarolDiaz_Cartoon.jpg'; // Adjust the import path
import clickSound from './assets/sounds/tap.mp3'; // Import your click sound for the link
import profileClickSound from './assets/sounds/welcome.m4a'; // Import your click sound for the profile picture
import soundIcon from './assets/images/resume.png'; // Import your sound icon image

function About() {
  const linkAudioRef = useRef(null);
  const profileAudioRef = useRef(null);

  const playLinkSound = () => {
    if (linkAudioRef.current) {
      linkAudioRef.current.play();
    }
  };

  const playProfileSound = () => {
    if (profileAudioRef.current) {
      profileAudioRef.current.play();
    }
  };

  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="profile-container">
          <img 
            src={profileImage} 
            alt="Karol Díaz" 
            onClick={playProfileSound} 
          />
          <div className="sound-icon-container">
            <img 
              src={soundIcon} 
              alt="Sound Icon" 
              className="sound-icon" 
              onClick={playProfileSound} 
            />
          </div>
        </div>

        <div className="about-text">
          <h3>
            <a
              href="https://docs.google.com/document/d/1f5G3LnFXO541yxtvLQJnLb2bxzaeCwVx/edit?usp=sharing&ouid=108486094976956110451&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playLinkSound}
            >
              Karol Díaz CV
            </a>
          </h3>
          <h4>Full Stack Developer</h4>
          <h4>Unity Developer</h4>
          <h4>Enthusiastic Illustrator</h4>
        </div>
      </div>
      <audio ref={linkAudioRef} src={clickSound} />
      <audio ref={profileAudioRef} src={profileClickSound} />
    </section>
  );
}

export default About;
