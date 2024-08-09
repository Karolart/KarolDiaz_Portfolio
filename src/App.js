import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Drawings from './components/Drawings';
import Illustration from './components/Illustration';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <About />
        <Education />
        <Illustration/>
        <Work />
        <Drawings/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
