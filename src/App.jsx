// src/App.jsx

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pacmananimation from './components/Pacmananimation';
import Timeline from './components/Timeline/Timeline';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import CountdownTimer from './components/CountdownTimer';
import HeroSection from './components/HeroSection';
import AboutCollege from './components/AboutCollege';
import Domains from "./components/Domains/Domains.jsx";
import GallerySection from './components/GallerySection.jsx';
import Footer from './components/Footer.jsx';
import Message from './components/Message.jsx';

// import Testimonial from './components/Testimonials';

// ============ GLOBAL CONFIGURATION ============
// Define shared constants here to pass as props.
// This creates a single source of truth for your app.

const FONTS = {
  title: '"Fredoka", "Arial Black", sans-serif',
  body: '"Fredoka", "Segoe UI", sans-serif',
  numbers: '"Fredoka", Impact, sans-serif'
};

const NAV_ITEMS = ['ABOUT', 'THEMES', 'TIMELINE', 'SPONSORS', 'PRIZES', 'TEAM', 'FAQ', 'SOCIALS'];

const BG_COLOR = '#0a0e27';

// ===============================================

function App() {
  // Import Google Fonts once in the main App component
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Poppins:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    // <Router>  
    //   <Routes>
    //       <Route path="/" element={<Hero fonts={FONTS} bgColor={BG_COLOR} />} />
    //     <Route path="/about" element={<AboutSection />} />
    //   </Routes>
    // </Router>
    <div className="">
      <Navbar navItems={NAV_ITEMS} fonts={FONTS} />
      <main>
        <Hero fonts={FONTS} bgColor={BG_COLOR} />
          {/* <video src="./pacmangif.mp4" 
          autoPlay
          loop
          muted
           alt="" className='w-full ' /> */}


        {/* === Placeholder content to demonstrate sticky navbar on scroll === */}
        {/* <div className="h-screen bg-slate-800 flex items-center justify-center">
          <h2 className="text-5xl text-white font-bold" style={{ fontFamily: FONTS.title }}>
            Scroll down to see more...
          </h2>
        </div> */}
        {/* <Pacmananimation/>
        <div className="h-screen bg-slate-900 flex items-center justify-center">
          <h2 className="text-5xl text-white font-bold" style={{ fontFamily: FONTS.title }}>
            The navbar remains at the top.
          </h2>
        </div> */}
        {/* =============================================================== */}
         
        <Domains/>
        
          {/* <Testimonial/> */}
          <section id='about'>
          <AboutSection fonts={FONTS} /></section>
          <AboutCollege fonts={FONTS}  />
           <Timeline />
          <FAQSection fonts={FONTS} />
          {/* <CountdownTimer/> */}
           <Message />
           <GallerySection />
           <Footer />
      </main>
    </div>
  );
}

export default App;