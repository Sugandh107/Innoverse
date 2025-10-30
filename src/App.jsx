// src/App.jsx

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pacmananimation from "./components/Pacmananimation";
import Timeline from "./components/Timeline/Timeline";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import CountdownTimer from "./components/CountdownTimer";
import HeroSection from "./components/HeroSection";
import AboutCollege from "./components/AboutCollege";
import Domains from "./components/Domains/Domains.jsx";
import GallerySection from "./components/GallerySection.jsx";
import Rules from "./components/Rules/Rules.jsx";
import PrizesSection from "./components/PrizeSection.jsx";
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Eager load components that appear above the fold
import HeroSection from './components/HeroSection';
import ScrollToTop from './components/ScrollToTop.jsx';

// Lazy load components below the fold
const AboutSection = lazy(() => import('./components/AboutSection'));
const AboutCollege = lazy(() => import('./components/AboutCollege'));
const Domains = lazy(() => import('./components/Domains/Domains.jsx'));
const Timeline = lazy(() => import('./components/Timeline/Timeline'));
const GallerySection = lazy(() => import('./components/GallerySection.jsx'));
const Rules = lazy(() => import('./components/Rules/Rules.jsx'));
const TeamSection = lazy(() => import('./components/Team.jsx'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const PrizesSection = lazy(() => import('./components/PrizeSection.jsx'));


const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-950">
    <div className="text-white text-2xl">Loading...</div>
  </div>
);


const FONTS = {
	title: '"Gliker-Regular", "Arial Black", sans-serif',
	body: '"Gliker-Regular", "Segoe UI", sans-serif',
	numbers: '"Gliker-Regular", Impact, sans-serif',
};

const NAV_ITEMS = [
	"ABOUT",
	"THEMES",
	"TIMELINE",
	"SPONSORS",
	"PRIZES",
	"TEAM",
	"FAQ",
	"SOCIALS",
];

const BG_COLOR = "#0a0e27";

// ===============================================

function App() {
	// Import Google Fonts once in the main App component
	useEffect(() => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Poppins:wght@400;600;700&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	}, []);

	return (
		// <Router>
		//   <Routes>
		//       <Route path="/" element={<Hero fonts={FONTS} bgColor={BG_COLOR} />} />
		//     <Route path="/about" element={<AboutSection />} />
		//   </Routes>
		// </Router>
		<div className=''>
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

				<Domains />

				{/* <Testimonial/> */}
				<section id='about'>
					<AboutSection fonts={FONTS} />
				</section>
				<AboutCollege fonts={FONTS} />
				<Timeline fonts={FONTS} />
				<GallerySection />
				<Rules />
				<PrizesSection fonts={FONTS} />
				<FAQSection fonts={FONTS} />
				{/* <CountdownTimer/> */}
			</main>
		</div>
	);
}

export default App;
