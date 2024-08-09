import React, { useRef, useState } from 'react';
import '../styles/Drawings.css';

// Importing images
import instinct from '../components/assets/images/instinct.jpg';
import otono from '../components/assets/images/otoño.jpg';
import cardenal from '../components/assets/images/cardenal.jpg';
import magic from '../components/assets/images/magic.jpg';
import sunny from '../components/assets/images/sunny.jpg';
import recursion from '../components/assets/images/recursion.jpg';
import drawing7 from '../components/assets/images/1025ad1a167591d3.jpg';
import mistyc from '../components/assets/images/mistyc.jpg';
import poisonkisses from '../components/assets/images/poisonkisses.jpg';
import hoverSound from '../components/assets/sounds/flowers.mp3'; // Update with the correct path

const drawings = [
  { src: instinct, name: 'Instinct', description: 'A vibrant depiction of primal emotions. Made with pen and ink, and colored pens.' },
  { src: otono, name: 'Otoño', description: 'German shepherd Autumn View, created with colored pens and Chinese ink using a nib.' },
  { src: cardenal, name: 'Cardenal', description: 'Cardinal Bird with Monterrey Cityscape, Handmade using ballpoint pens.' },
  { src: drawing7, name: 'Beautiful Holland', description: 'Made with colored pens.' },
  { src: mistyc, name: 'Mistyc', description: 'An ethereal landscape shrouded in mystery, created with colored pens and Chinese ink using a nib.' },
  { src: poisonkisses, name: 'Poison Kisses', description: 'Made with colored pens.' },
  { src: magic, name: 'Magic', description: 'Created with colored pens and Chinese ink using a nib.' },
  { src: sunny, name: 'Sunny', description: 'Created with colored pens and Chinese ink using a nib.' },
  { src: recursion, name: 'Recursion', description: 'Created with colored pens and Chinese ink using a nib.' },
];

const Drawings = () => {
  const audioRef = useRef(null);
  const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);

  const enableInteraction = () => {
    setIsInteractionEnabled(true);
  };

  const playSound = () => {
    if (audioRef.current && isInteractionEnabled) {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
    }
  };

  const stopSound = () => {
    if (audioRef.current && isInteractionEnabled) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="section" onClick={enableInteraction}>
      <h3>My Drawings</h3>
      <div className="drawing-wrapper">
        {drawings.map((drawing, index) => (
          <div
            key={index}
            className="drawing-item"
            onMouseEnter={playSound}
            onMouseLeave={stopSound}
          >
            <img src={drawing.src} alt={drawing.name} />
            <div className="drawing-overlay">
              <h4>{drawing.name}</h4>
              <p>{drawing.description}</p>
            </div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} src={hoverSound} preload="auto"></audio>
    </section>
  );
};

export default Drawings;
