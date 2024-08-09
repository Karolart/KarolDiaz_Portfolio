// src/components/Footer.js
import React, { useState } from 'react';
import '../styles/Footer.css'; // Ensure the path is correct
import co from '../components/assets/images/co.png';
import sampleVideo from '../components/assets/videos/MartinaCamargo.mp4'; // Make sure to provide the correct path to your video

function Footer() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <footer className="footer">
      <div>
        <p>Karol Díaz - Portfolio</p>
      </div>
      <div>
        <img src={co} alt="co" onClick={toggleVideo} />
        {showVideo && (
          <div className="video-container">
            <p><p>Thank you so much for visiting my portfolio. I’m sharing a beautiful Colombian song with you as a small gift to show my appreciation.</p>
            .</p>
            <video width="320" height="240" controls>
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
