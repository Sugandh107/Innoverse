import React, { useState, useEffect, useRef } from "react";

const GallerySection = () => {
  const originalImages = [
    { id: 1, url: "/gallery1.jpg", alt: "Man smiling in blue shirt" },
    { id: 2, url: "/gallery2.jpg", alt: "Woman smiling with long hair" },
    { id: 3, url: "/gallery3.jpg", alt: "Woman in white cardigan" },
    { id: 4, url: "/gallery4.jpg", alt: "Man smiling in blue shirt" },
    { id: 5, url: "/gallery5.jpg", alt: "Woman smiling with long hair" },
    { id: 6, url: "/gallery6.jpg", alt: "Woman in white cardigan" },
    { id: 7, url: "/gallery7.jpg", alt: "Woman in white cardigan" },
  ];

  const tripleGallery = [...originalImages, ...originalImages, ...originalImages];
  const totalOriginalItems = originalImages.length;

  const [activeIndex, setActiveIndex] = useState(totalOriginalItems);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1800);

    return () => clearInterval(intervalId);
  }, []);

  // Reset transition for infinite loop
  useEffect(() => {
    if (activeIndex >= totalOriginalItems * 2) {
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          setActiveIndex(totalOriginalItems);

          // Force reflow
          containerRef.current.offsetHeight;

          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transition =
                "transform 500ms ease-in-out";
            }
          }, 20);
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, totalOriginalItems]);

  const translateValueLg = `translateX(-${activeIndex * 50 - 25}%)`;
  const translateValueSm = `translateX(-${activeIndex * 100}%)`;

  const getOriginalIndex = (index) => index % totalOriginalItems;

  return (
   <section className="w-full mx-auto px-2 relative overflow-hidden bg-slate-950 py-8 sm:py-12">
      <div className="container mx-auto overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-2 uppercase tracking-wider">
         The Journey <span
  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient bg-clip-text text-transparent"
  style={{
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>So Far</span>
        </h2>
        <p className="text-center text-indigo-300 mb-12 font-medium">
          Highlights{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            from the Last
          </span>{" "}
          Hackathon
        </p>

        <div className="slider overflow-hidden relative w-full lg:w-4/5 mx-auto rounded-xl py-3 sm:py-10">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out -mx-2"
            style={{
              transform: translateValueSm,
            }}
          >
            {tripleGallery.map((image, index) => {
              const isHighlighted = index === activeIndex;

              return (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/2 px-2 sm:px-3 md:px-4"
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`relative w-full transition-all duration-300 transform cursor-pointer rounded-xl
                      ${
                        isHighlighted
                          ? "scale-110 shadow-md shadow-slate-900/50 z-10 bg-gray-900"
                          : "scale-90 opacity-70 shadow-md bg-gray-800"
                      }`}
                    style={{ padding: isMobile ? '16px' : '20px' }}
                  >
                    <div className="relative w-full aspect-video">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className={`w-full h-full object-cover rounded-lg ${
                          isHighlighted ? "border-2 border-gray-50" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {originalImages.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index + totalOriginalItems)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                getOriginalIndex(activeIndex) === index
                  ? "bg-indigo-600 shadow-md shadow-indigo-600/50"
                  : "bg-indigo-800 hover:bg-indigo-700"
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></span>
          ))}
        </div>

        <style jsx="true">{`
          @media (min-width: 1024px) {
            .slider > div:first-child {
              transform: ${translateValueLg} !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default GallerySection;