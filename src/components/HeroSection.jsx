// src/components/Hero.jsx

import React, { useState, useEffect } from "react";

const HeroSection = ({ fonts, bgColor }) => {
  // ... (all state and useEffect hooks are correct and remain here)
  const [typedText, setTypedText] = useState("");
  const targetWord = "Dream";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= targetWord.length) {
        setTypedText(targetWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setTypedText("");
        }, 2000);
      }
    }, 200);
    return () => clearInterval(typingInterval);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const targetDate = new Date("2025-12-01T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(particleArray);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");
  const titleParts = [
    { text: "INNOVERSE", letters: ["I", "N", "N", "O", "V", "E", "R", "S", "E"] },
    { text: "2.0", letters: ["2", ".", "0"] }
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* === ANIMATED BACKGROUND CODE RESTORED === */}

      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-delayed" style={{ transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)` }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float-slow" style={{ transform: `translate(${mousePosition.y}px, ${-mousePosition.x}px)` }}></div>
        
        {particles.map((p) => (
          <div key={p.id} className="absolute rounded-full bg-white opacity-20" style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px`, animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite` }}></div>
        ))}
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`, backgroundSize: '50px 50px', animation: 'gridMove 20s linear infinite' }}></div>
        </div>
      </div> */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <video
          autoPlay
          loop
          muted
          // playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img 
  src="./8bit.gif" 
  alt="" 
  className='absolute inset-1 w-full h-full object-cover opacity-30' 
/>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 lg:p-20 lg:mt-1">
        {/* ... (the rest of the hero content is unchanged) ... */}
        <div
          className={`text-center mb-4 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        > 
        <div className="flex flex-wrap items-center justify-center lg:gap-3 gap-2 max-w-4xl mx-auto">
            <img src="./logo.png" alt="" className="lg:w-16 w-8 flex-shrink-0"/>
            
          <p
            className="text-white text-[.8rem] md:text-xl lg:text-4xl font-semibold text-center"
            style={{ fontFamily: fonts.body }}
          >
           KLS Gogte Institute of Technology
          </p>
          
         
          <img src="./3.png" alt="" className="lg:w-16 w-8 flex-shrink-0" />
          </div>
          <p
            className="text-white text-[.8rem] md:text-xl lg:text-4xl font-semibold tracking-wide mb-2"
            style={{ fontFamily: fonts.body }}
          >
           Belagavi
          </p>
          <p
            className="text-white text-[.8rem] md:text-xl lg:text-2xl font-semibold tracking-wide mb-2"
            style={{ fontFamily: fonts.body }}
          >
            Master Of Computer Applications presents
          </p>
        </div>
        <div
          className={`text-center mb-8 transform transition-all duration-1200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <h1 className="text-[3.2rem] sm:text-[2rem] md:text-[4rem] lg:text-[8rem] font-black text-white leading-none tracking-tight select-none flex flex-wrap justify-center gap-x-4">
            {titleParts.map((part, partIndex) => (
              <span key={partIndex} className="inline-flex sm:gap-3 gap-1 whitespace-nowrap">
                {part.letters.map((letter, letterIndex) => {
                  const globalIndex = partIndex === 0 ? letterIndex : 9 + letterIndex;
                  return (
                    <span
                      key={letterIndex}
                      className="inline-block hover:scale-110 transition-all duration-300 cursor-default"
                      style={{
                        animation: `bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${
                          globalIndex * 0.1
                        }s both`,
                        fontFamily: "Crackman",
                        textShadow:
                          "0 0 40px rgba(139, 92, 246,0.1), 0 0 80px rgba(139, 92, 246, 0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#60a5fa";
                        e.target.style.textShadow =
                          "0 0 40px rgba(96, 165, 250, 0.4), 0 0 80px rgba(96, 165, 250, 0.1)";
                        e.target.style.transform = "scale(1.1) translateY(-10px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "white";
                        e.target.style.textShadow =
                          "0 0 40px rgba(139, 92, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.1)";
                        e.target.style.transform = "scale(1) translateY(0)";
                      }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>
        </div>
        
        <div
          className={`text-center mb-4  transform transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="text-white text-xl lg:text-3xl md:text-4xl font-bold tracking-wide mb-3"
            style={{ fontFamily: fonts.body }}
          >
            on 1st And 2nd December, 2025
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
            <p
              className="text-white text-xl lg:text-3xl md:text-4xl font-bold tracking-wide"
              style={{ fontFamily: fonts.body }}
            >
              Industry Partner
            </p>
            <div className="flex items-center gap-2 lg:gap-3">
              <img src="./2.png" alt="ProDhee Technologies Logo" className="lg:w-10 w-5 lg:h-10 h-5 object-contain" />
              <p
                className="text-white text-xl lg:text-3xl md:text-4xl font-bold tracking-wide whitespace-nowrap"
                style={{ fontFamily: fonts.body }}
              >
                ProDhee Technologies
              </p>
            </div>
          </div>
        </div>

         <div
  className={`grid grid-cols-2 md:grid-cols-4 lg:mt-10 mt-5 gap-4 md:gap-6 w-[300px] md:w-[600px] lg:w-2xl mx-auto transition-all duration-700  ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {[
    {
      value: timeLeft.days,
      label: "Days",
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
      color: "#f97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
  ].map((item) => (
    <div
      key={item.label}
      className="relative bg-slate-900/25 rounded-xl p-3 text-center border"
      style={{
        borderColor: `${item.color}40`,
        boxShadow: `0 0 10px ${item.color}20`,
      }}
    >
      <div
        className="text-3xl md:text-4xl font-extrabold mb-1 tabular-nums"
        style={{
          fontFamily: fonts.numbers,
          color: item.color,
          textShadow: `0 0 10px ${item.color}40`,
        }}
      >
        {formatTime(item.value)}
      </div>
      <div
        className="text-sm md:text-base font-semibold tracking-wider uppercase"
        style={{ fontFamily: fonts.body, color: item.color }}
      >
        {item.label}
      </div>
    </div>
  ))}
</div>
      </div>
      <style jsx>{`
        /* ... (styles are unchanged and include floatParticle animation) ... */
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-100px);
          }
          50% {
            transform: scale(1.05) translateY(10px);
          }
          70% {
            transform: scale(0.95) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5) rotateY(180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -60px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }
        @keyframes floatParticle {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.2;
          }
          50% {
            transform: translate(50px, -50px);
            opacity: 0.5;
          }
        }
        @keyframes gridMove {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(50px, 50px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out 2s infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out 4s infinite;
        }
        . {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;