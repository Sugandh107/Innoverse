// src/App.jsx

import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Eager load components that appear above the fold
import HeroSection from "./components/HeroSection";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

// Lazy load components below the fold
const AboutSection = lazy(() => import("./components/AboutSection"));
const AboutCollege = lazy(() => import("./components/AboutCollege"));
const Domains = lazy(() => import("./components/Domains/Domains.jsx"));
const Timeline = lazy(() => import("./components/Timeline/Timeline"));
const GallerySection = lazy(() => import("./components/GallerySection.jsx"));
const Rules = lazy(() => import("./components/Rules/Rules.jsx"));
const TeamSection = lazy(() => import("./components/Team.jsx"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const PrizesSection = lazy(() => import("./components/PrizeSection.jsx"));
const Contact = lazy(() => import("./components/contact/contact.jsx"));
const RegistrationClosed = lazy(() => import("./components/RegistrationClosed.jsx"));

const LoadingSpinner = () => (
	<div className='flex items-center justify-center min-h-screen bg-slate-950'>
		<div className='text-white text-2xl'>Loading...</div>
	</div>
);

const FONTS = {
	title: '"Gliker-Regular", "Arial Black", sans-serif',
	body: '"Gliker-Regular", "Segoe UI", sans-serif',
	numbers: '"Gliker-Regular", Impact, sans-serif',
};

const NAV_ITEMS = [
	"ABOUT",
	"DOMAINS",
	"TIMELINE",
	"PRIZES",
	"TEAM",
	"FAQ",
	"CONTACT",
];
const BG_COLOR = "#0a0e27";

// ===============================================

// Main Home Page Component
const HomePage = ({ fonts, bgColor }) => (
	<>
		<HeroSection fonts={fonts} bgColor={bgColor} />
		<Suspense fallback={<LoadingSpinner />}>
			<section id='prizes'>
				<PrizesSection fonts={fonts} />
			</section>
			<section id='about'>
				<AboutSection fonts={fonts} />
			</section>
			<AboutCollege fonts={fonts} />
			<Domains />
			<section id='timeline'>
				<Timeline fonts={fonts} />
			</section>
			<section id='gallery'>
				<GallerySection />
			</section>
			<section id='team'>
				<TeamSection />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<section id='faq'>
				<FAQSection fonts={fonts} />
			</section>
			{/* <section id='contact'>
        <Contact />
      </section> */}
		</Suspense>
	</>
);

// Separate Rules Page
const RulesPage = () => (
	<Suspense fallback={<LoadingSpinner />}>
		<Rules />
	</Suspense>
);

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className=''>
				<Navbar navItems={NAV_ITEMS} fonts={FONTS} />
				<main>
					<Routes>
						<Route
							path='/'
							element={<HomePage fonts={FONTS} bgColor={BG_COLOR} />}
						/>

						<Route path='/rules' element={<RulesPage fonts={FONTS} />} />
						<Route path='/regclosed' element={<RegistrationClosed fonts={FONTS} />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
