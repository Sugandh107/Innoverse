import React, { useState, useEffect, useRef } from 'react';

const AboutSection = ({ 
  fonts = { title: 'Arial Black', body: 'Arial' }, 
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

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { themes: 6, hours: 36, participants: 5000 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        themes: Math.floor(targets.themes * easeOutQuart),
        hours: Math.floor(targets.hours * easeOutQuart),
        participants: Math.floor(targets.participants * easeOutQuart)
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
        setTimeout(() => setShowImage(true), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  // Image slideshow
  useEffect(() => {
    if (!showImage || images.length <= 1) return;

    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(imageTimer);
  }, [showImage, images.length]);

  const stats = [
    { value: counts.themes, label: 'Themes', color: 'text-cyan-400', delay: '0ms' },
    { value: counts.hours, label: 'Hours of Hacking', color: 'text-pink-500', delay: '200ms' },
    { value: counts.participants, label: 'Participants', color: 'text-orange-400', delay: '400ms' }
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-slate-950 overflow-hidden py-16 sm:py-20">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4" style={{ fontFamily: fonts.title }}>
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">DUHacks</span>?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: stat.delay }}
            >
              <div className="relative inline-block group">
                <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-')} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500 rounded-full scale-150`} />
                
                <h3 className={`relative text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black ${stat.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`} style={{ fontFamily: fonts.title }}>
                  {stat.label === 'Participants' ? `${stat.value.toLocaleString()}+` : `${stat.value}+`}
                </h3>
              </div>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white/90" style={{ fontFamily: fonts.body }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Image Section with Text Overlay */}
        <div className={`relative transition-all duration-1000 max-w-5xl mx-auto ${
          showImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            {/* Image Slideshow */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={image} 
                  alt={`DUHacks Event ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40" />

            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-12 py-6">
              <div className="max-w-4xl w-full space-y-3 sm:space-y-4">
                {/* Main CTA */}
                <p className="text-xs sm:text-sm lg:text-base text-white/95 leading-relaxed text-center" style={{ fontFamily: fonts.body }}>
                  Getting into a loop of ideas, but finding out where to showcase them? It's time to think big and act fast! 💡 Start building projects and join us at{' '}
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" style={{ fontFamily: fonts.title }}>
                    DUHacks 4.0!
                  </span>{' '}
                  🛠️
                </p>

                {/* Event Info */}
                <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed text-center" style={{ fontFamily: fonts.body }}>
                  DUHacks 4.0 is a 36-hour national-level hackathon organized by the Google Developer Student Club, DDU 🧡
                </p>

                {/* Description */}
                <p className="text-[10px] sm:text-xs lg:text-sm text-white/80 leading-relaxed text-center" style={{ fontFamily: fonts.body }}>
                  This event provides a platform for passionate developers, designers, and enthusiasts to come together and transform their ideas into reality. It's not just an opportunity to showcase technical skills; it's a chance to network, learn, and have a memorable time with like-minded individuals. 😎
                </p>

                {/* Final Message */}
                <p className="text-xs sm:text-sm lg:text-base text-white/90 font-bold text-center" style={{ fontFamily: fonts.body }}>
                  See you all in the hackathon! 🚀💻
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default AboutSection;