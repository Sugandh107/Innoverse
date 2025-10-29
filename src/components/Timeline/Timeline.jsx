import React, { useEffect, useRef, useState } from "react";

const FONTS = {
  title: '"Fredoka", "Arial Black", sans-serif',
  body: '"Fredoka", "Segoe UI", sans-serif',
  numbers: '"Fredoka", Impact, sans-serif'
};

export default function Timeline() {
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isNearItem, setIsNearItem] = useState(false);
  const [passedDots, setPassedDots] = useState(new Set());
  const timelineRef = useRef(null);
  const cursorRef = useRef(null);
  const dotsContainerRef = useRef(null);

  const timelineEvents = [
    {
     
      title: "Start Registrations",
      date: "1st June 2022",
      description: "",
      side: "left",
    },
    {
     
      title: "End Registrations",
      date: "14th Jul 2022",
      description: "",
      side: "right",
    },
    {
     
      title: "Opening Ceremony",
      date: "16th July 2022",
      description: "Hackathon opening ceremony will start 9:15 AM onwards.",
      side: "left",
    },
    {
     
      title: "Hackathon Starts",
      date: "16th July 2022",
      description: "Hackathon coding period will start from 10:30 AM onwards.",
      side: "right",
    },
    {
      
      title: "Session from GeeksforGeeks",
      date: "16th July 2022",
      description:
        "Session on Complete Interview Preparation by GeeksForGeeks on 11:30 AM Onwards.",
      side: "left",
    },
    {
      
      title: "Session from Postman",
      date: "16th July 2022",
      description: "Session on APIs 101 using Postman on 4:00 PM Onwards.",
      side: "right",
    },
    {
      
      title: "Session from Alan AI",
      date: "16th July 2022",
      description:
        "Session on Building Voice AI Powered App in React JS with Alan AI on 06:30 PM Onwards.",
      side: "left",
    },
    {
     
      title: "Hackathon Ends",
      date: "17th July 2022",
      description: "Hackathon coding period will end on 10:30 PM.",
      side: "right",
    },
  ];

  const dots = Array.from({ length: 50 }, (_, i) => i);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && cursorRef.current && dotsContainerRef.current) {
        const timeline = timelineRef.current;
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - timelineRect.top) /
              (timelineRect.height + windowHeight)
          )
        );

        const cursorTop = scrollProgress * timelineRect.height;
        setCursorPosition(cursorTop);

        const dotsArray =
          dotsContainerRef.current.querySelectorAll(".timeline-dot");
        const newPassedDots = new Set();

        dotsArray.forEach((dot, index) => {
          const dotRect = dot.getBoundingClientRect();
          const dotTop = dotRect.top - timelineRect.top;

          if (dotTop < cursorTop) newPassedDots.add(index);
        });

        setPassedDots(newPassedDots);

        const items = timeline.querySelectorAll(".timeline-item");
        let nearItem = false;

        items.forEach((item) => {
          const itemRect = item.getBoundingClientRect();
          const distance = Math.abs(itemRect.top - windowHeight / 2);
          if (distance < 150) {
            nearItem = true;
            item.classList.add("visible");
          }
        });

        setIsNearItem(nearItem);
      }
    };

    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full˳ mx-auto py-20 px-5 relative overflow-hidden bg-slate-950 min-h-screen" ref={timelineRef} style={{ fontFamily: FONTS.body }}>
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide" style={{ fontFamily: FONTS.title }}>
          Event Timeline
        </h2>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></div>
      </div>

      <div 
        ref={dotsContainerRef}
        className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 z-0 flex flex-col justify-evenly items-center max-md:left-8"
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`timeline-dot w-1.5 h-1.5 bg-purple-500 rounded-full transition-all duration-300 max-md:w-1 max-md:h-1 ${
              passedDots.has(index) ? "opacity-0 scale-0" : ""
            }`}
          />
        ))}
      </div>

      <div
        className={`scrolling-cursor absolute left-1/2 transform -translate-x-1/2 w-10 h-10 z-10 pointer-events-none transition-all duration-150 max-md:left-8 max-md:w-6 max-md:h-6`}
        ref={cursorRef}
        style={{ top: `${cursorPosition}px` }}
      >
        <svg className="w-full h-full" viewBox="0 0 24 24" style={{ 
          transform: 'rotate(90deg)',
          animation: 'float 2.5s ease-in-out infinite'
        }}>
          <circle cx="12" cy="12" r="10" fill={isNearItem ? "#FFA500" : "#FFD700"}></circle>
          <polygon points="12,12 24,6 24,18" fill="#111"></polygon>
        </svg>
      </div>

      <div className="relative py-10 min-h-screen sm:p-40">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-item flex items-center mb-16 w-full relative opacity-0 transition-all duration-700 ${
              event.side === "left" ? "justify-end" : "justify-start"
            } max-md:justify-start max-md:items-start`}
            style={{ transform: 'translateY(40px)' }}
          >
            <div className={`flex items-center w-5/12 relative ${
              event.side === "left" ? "justify-start" : "justify-end"
            } max-md:w-full max-md:ml-16 max-md:items-start`}>
              {/* <div className={`absolute w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-2xl shadow-lg border-4 border-white z-10 top-1/2 transform -translate-y-1/2 ${
                event.side === "left" ? "-right-7" : "-left-7"
              } max-md:left-0 max-md:-translate-x-16 max-md:w-11 max-md:h-11 max-md:text-lg max-md:border-2`}>
                {event.icon}
              </div> */}
              <div className={`bg-gray-900/25 p-7 rounded-2xl shadow-lg border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                event.side === "left" ? "mr-7" : "ml-7"
              } max-md:ml-5 max-md:w-full max-md:p-5`}>
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2 max-md:flex-col max-md:items-start">
                  <h3 className="text-xl font-semibold text-white md:text-2xl" style={{ fontFamily: FONTS.title }}>
                    {event.title}
                  </h3>
                  <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap" style={{ fontFamily: FONTS.numbers }}>
                    {event.date}
                  </span>
                </div>
                {event.description && (
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base" style={{ fontFamily: FONTS.body }}>
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: rotate(90deg) translateY(0);
          }
          50% {
            transform: rotate(90deg) translateY(-5px);
          }
        }
        .timeline-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </div>
  );
}