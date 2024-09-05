import React from 'react';
import '../styles/Work.css';

// Import images and sounds
import ashasascent from '../components/assets/images/ashasascent.gif';
import gamejam from '../components/assets/images/gamejam.gif';
import cortana from '../components/assets/images/cortana.png';
import corazonllanero from '../components/assets/images/corazonllanero.png';
import asha2 from '../components/assets/images/ashas2.gif';
import clickSound from './assets/sounds/tap.mp3'; // Import your click sound
import Amazonas from './assets/images/amazonas Odyssey.png'

function playClickSound() {
  const audio = new Audio(clickSound);
  audio.play();
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="panel">
      <h2>My Work</h2>
      <div className="work-content">
        <div className="videogames">
          <h3>My Videogames</h3>
          <p>UI Designer & UI Development,programmer</p>
          <div className="videogame-item">
            <a href="https://acchan23.itch.io/amazonas-odyssey-surviving-the-jungle" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
              <img src={Amazonas} alt="AmazonasOddyssey"/>
            </a>
          <div className="videogame-description">
              <h3>Amazonas Oddyssey</h3>
              <p>I created the visual concept and design for the main image and the
                 start screen of the game, in addition to designing and programming
                 the user interface (UI), ensuring a smooth and intuitive experience 
                 for the players. I also designed the inventory system and contributed
                 to its programming."</p>
            </div>
            </div>
          <div className="videogame-item">
            <a href="https://nosmow.itch.io/ashasascent" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
              <img src={asha2} alt="Game 1" />
            </a>
            <div className="videogame-description">
              <h3>Asha's Ascent (GameJamVersion)</h3>
              <p>For this project, I worked as an FX Artist, designing special effects and animations to enhance the combat sequences. Additionally, I supported programming tasks, focusing primarily on UI development.</p>
            </div>
          </div>
            <div className="videogame-item">
              <a href="https://germanmunoz.itch.io/ashasascent" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
                <img src={ashasascent} alt="Game 1" />
              </a>
              <div className="videogame-description">
                <h4>Asha's Ascent</h4>
                <p>In this game, I was responsible for UI design and development, as well as sound design. My role involved creating the game's visual interface and integrating sound effects to enhance the gameplay experience.</p>
              </div>
            </div>
            <div className="videogame-item">
              <a href="https://germanmunoz.itch.io/knights-redemption" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
                <img src={gamejam} alt="Game 2" />
              </a>
              <div className="videogame-description">
                <h4>Knights Redemption</h4>
                <p>I designed and built the user interface (UI) for this project, focusing on creating a smooth, engaging experience. I also contributed to sound effects to enhance the game.</p>
              </div>
            </div>
            <div className="videogame-item">
              <a href="https://karolart90.itch.io/stacortanasforestfeast" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
                <img src={cortana} alt="Game 3" />
              </a>
              <div className="videogame-description">
                <h4>Forest Feast</h4>
                <p>In "Forest Feast," I worked on UI development and gameplay mechanics, enhancing user interactions and integrating new features. As my first prototype, I focused on basic game development, including player positioning, game physics, and UI design.</p>
              </div>
            </div>
            <div className="videogame-item">
              <a href="https://karolart90.itch.io/corazn-llanero" target="_blank" rel="noopener noreferrer" onClick={playClickSound}>
                <img src={corazonllanero} alt="Game 4" />
              </a>
              <div className="videogame-description">
                <h4>Corazón Llanero</h4>
                <p>This project allowed me to learn and implement FX effects, as well as build character animations. Additionally, I worked on integrating sound effects and optimizing the game's performance.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Work;
