import React, { useState, useEffect, useRef } from 'react';

const GallerySection = () => {
    const originalImages = [
        { id: 1, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D', alt: 'Man smiling in blue shirt' },
        { id: 2, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', alt: 'Woman smiling with long hair' },
        { id: 3, url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', alt: 'Woman in white cardigan' },
        { id: 4, url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D', alt: 'Man smiling in blue shirt' },
        { id: 5, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', alt: 'Woman smiling with long hair' },
        { id: 6, url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', alt: 'Woman in white cardigan' },
    ];
    
    // Triple the images for seamless looping
    const tripleGallery = [...originalImages, ...originalImages, ...originalImages];
    const totalOriginalItems = originalImages.length;

    const [activeIndex, setActiveIndex] = useState(totalOriginalItems);
    const containerRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex(prev => prev + 1);
        }, 1800);
        
        return () => clearInterval(intervalId);
    }, []);

    // Handle seamless loop
    useEffect(() => {
        // When we reach the end of the second set, jump back to the start of the second set
        if (activeIndex >= totalOriginalItems * 2) {
            const timeout = setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.transition = 'none';
                    setActiveIndex(totalOriginalItems);
                    
                    // Force reflow
                    containerRef.current.offsetHeight;
                    
                    setTimeout(() => {
                        if (containerRef.current) {
                            containerRef.current.style.transition = 'transform 500ms ease-in-out';
                        }
                    }, 20);
                }
            }, 500);
            
            return () => clearTimeout(timeout);
        }
    }, [activeIndex, totalOriginalItems]);

    const translateValueLg = `translateX(-${(activeIndex * 20) - 40}%)`;
    const translateValueSm = `translateX(-${activeIndex * 100}%)`;

    const getOriginalIndex = (index) => {
        return index % totalOriginalItems;
    };

    return (
        <section className="w-full mx-auto py-20 px-5 relative overflow-hidden bg-slate-950 min-h-screen">
            <div className="container mx-auto px-4">
                
                <h2 className="text-4xl font-extrabold text-center text-white mb-2 uppercase tracking-wider">
                    gallery
                </h2>
                <p className="text-center text-indigo-300 mb-12 font-medium">
                    Check Our Highlights
                </p>

                <div className="slider relative overflow-hidden w-full lg:w-4/5 mx-auto rounded-xl">
                    <div 
                        ref={containerRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: translateValueSm,
                        }}
                    >
                        {tripleGallery.map((image, index) => {
                            const isHighlighted = index === activeIndex;

                            return (
                                <div 
                                    key={index}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2" 
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div 
                                        className={`
                                            relative h-full transition-all duration-300 transform 
                                            ${isHighlighted 
                                                ? 'scale-110 shadow-lg shadow-indigo-600/50 ring-4 ring-indigo-600 rounded-lg z-10' 
                                                : 'scale-90 opacity-70 hover:scale-100 hover:opacity-100 shadow-md'
                                            }
                                        `}
                                    >
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-80 object-cover rounded-lg cursor-pointer border border-indigo-800"
                                        />
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
                            className={`
                                w-3 h-3 rounded-full cursor-pointer transition-colors duration-300
                                ${getOriginalIndex(activeIndex) === index
                                    ? 'bg-indigo-600 shadow-md shadow-indigo-600/50' 
                                    : 'bg-indigo-800 hover:bg-indigo-700'
                                }
                            `}
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