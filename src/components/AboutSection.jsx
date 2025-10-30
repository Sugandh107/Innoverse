import React, { useState, useEffect, useRef } from 'react';

const AboutSection = ({
  images = [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80'
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ themes: 0, hours: 0, participants: 0 });
  const [showImage, setShowImage] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  // Scroll animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = { themes: 4, hours: 24, participants: 2000 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        themes: Math.floor(targets.themes * easeOutQuart),
        hours: Math.floor(targets.hours * easeOutQuart),
        participants: Math.floor(targets.participants * easeOutQuart),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
        setTimeout(() => setShowImage(true), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Faster slideshow (every 2 seconds)
  useEffect(() => {
    if (!showImage || images.length <= 1) return;
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Faster speed
    return () => clearInterval(imageTimer);
  }, [showImage, images.length]);

  const stats = [
    { value: counts.themes, label: 'Themes', color: 'text-cyan-400', delay: '0ms' },
    { value: counts.hours, label: 'Hours of Hacking', color: 'text-pink-500', delay: '200ms' },
    { value: counts.participants, label: 'Participants', color: 'text-orange-400', delay: '400ms' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-slate-950 overflow-hidden py-14 sm:py-16 md:py-20"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            What is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Inoverse 2.0
            </span>
            ?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: stat.delay }}
            >
              <div className="relative inline-block group">
                <div
                  className={`absolute inset-0 ${stat.color.replace(
                    'text-',
                    'bg-'
                  )} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-full scale-150`}
                />
                <h3
                  className={`relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black ${stat.color} mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.label === 'Participants'
                    ? `${stat.value.toLocaleString()}+`
                    : `${stat.value}+`}
                </h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Image and Text Section */}
        <div
          className={`relative transition-all duration-1000 max-w-6xl mx-auto ${
            showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Slideshow */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Inoverse Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/40" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-3 sm:px-6 md:px-10">
              <div className="max-w-4xl w-full space-y-3 sm:space-y-4 text-center text-white text-[0.8rem] sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                <p>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    INNOVERSE 2.0
                  </span>{' '}
                  is a national-level hackathon designed to ignite innovation and challenge brilliant minds in the domains of{' '}
                  <span className="text-cyan-400 font-semibold">Artificial Intelligence</span>,{' '}
                  <span className="text-pink-400 font-semibold">Machine Learning</span>,{' '}
                  <span className="text-purple-400 font-semibold">Cybersecurity</span>, and{' '}
                  <span className="text-orange-400 font-semibold">Blockchain</span>.
                </p>

                <p>
                  Organized by the{' '}
                  <span className="font-bold text-cyan-300">Department of MCA, KLS Gogte Institute of Technology</span>, 
                  this event unites creative thinkers and tech enthusiasts to craft impactful solutions within an intense{' '}
                  <span className="font-semibold text-pink-400">24-hour coding marathon</span>.
                </p>

                <p>
                  With separate competitive tracks for MCA and BCA students,{' '}
                  <span className="font-semibold text-purple-400">INNOVERSE 2.0</span> aims to inspire new ideas, build futuristic prototypes, and celebrate the spirit of technology and teamwork.
                </p>

                <p className="font-bold text-white/90">See you at the hackathon! 🚀💻</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute top-20 left-10 w-64 sm:w-72 h-64 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default AboutSection;