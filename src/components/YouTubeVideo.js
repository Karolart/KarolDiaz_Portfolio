import React from 'react';
import '../styles/YouTubeVideo.css';

const YouTubeVideo = () => (
  <section className="section">
    <h3>Cuéntale a tu país, historias urbanas y rurales (concurso de ilustración)</h3>
    <div className="video-wrapper">
      <video controls>
        <source src="assets/videos/cuentaleatupais.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default YouTubeVideo;
