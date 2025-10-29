import React, { useState, useEffect, useCallback } from 'react';

const FONTS = {
  title: '"Fredoka", "Arial Black", sans-serif',
  body: '"Fredoka", "Segoe UI", sans-serif',
  numbers: '"Fredoka", Impact, sans-serif'
};

const Message = () => {
    const testimonials = [
        { id: 1, text: "Great service! Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.", author: "M S Patil", designation: "Director of KLS" },
        { id: 2, text: "Highly recommend this company Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper..", author: "Prof. Jayashri Madalgi", designation: "Head Of Depatment" },
        { id: 3, text: "Top quality work and support Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper..", author: "Prof. Abhishek Nazare", designation: "Assistent Professor" },
        { id: 4, text: "Exceeded all expectations. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.", author: "Prof. Swarooparani", designation: "Assistent Professor" },
        { id: 5, text: "Exceeded all expectations. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.", author: "Prof. Nilesh Anvekar", designation: "Assistent Professor" },
        { id: 6, text: "Exceeded all expectations. Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.", author: "Mr. Vishnu Sangammanavar", designation: "Head Of Event" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => clearInterval(intervalId);
    }, [nextSlide]);

    const transformValue = `translateX(-${activeIndex * 100}%)`;

    return (
      <section className="w-full mx-auto py-20 px-5 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide" style={{ fontFamily: FONTS.title }}>
            Message From Depatment
          </h2>
          <div className="relative overflow-hidden max-w-full mx-auto py-10 px-4">
            <div 
              className="flex transition-transform duration-600 ease-in-out"
              style={{ 
                  transform: transformValue,
                  transitionProperty: 'transform'
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} class="swiper-slide flex-none w-full lg:px-40 md:px-20">
                  <div class="testimonial-item">
                    <div class="flex sm:flex-col md:flex-col lg:flex-row flex-col gap-4 items-center justify-center">
                      <div className='sm:order-2 md:order-2 lg:order-1 order-2'>
                        <div class="border-l-2 border-solid border-red-400 pl-8">
                          <p className='text-xl italic text-white mb-4'>
                            <i className="text-blue-400 text-2xl inline-block">"</i>
                            {testimonial.text}
                            <i className="text-blue-400 text-2xl inline-block">"</i>
                          </p>
                          <h3 className='font-bold text-white text-xl mt-2.5 mb-1'>{testimonial.author}</h3>
                          <h4 className='text-sm text-gray-200 mb-2.5'>{testimonial.designation}</h4>
                        </div>
                      </div>
                      <div class="text-center flex-1/2 sm:order-1 md:order-1 lg:order-2 order-1">
                        <img src="/gaming-01.png" class="rounded-full border-2 border-gray-400 m-auto w-40 h-40" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`
                    w-2 h-2 rounded-full cursor-pointer transition-colors duration-300
                    ${index === activeIndex ? 'bg-indigo-600 shadow-md shadow-indigo-600/50' : 'bg-indigo-800 hover:bg-indigo-700'}
                `}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      </section>
    );
};

export default Message;