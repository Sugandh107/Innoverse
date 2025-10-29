// src/components/AboutCollege.jsx
import React from "react";

const AboutCollege = ({ fonts }) => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-slate-950">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 inline-block"
            style={{
              fontFamily: fonts.title,
              textShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
            }}
          >
            MCA DEPARTMENT
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-slate-900/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-xl hover:border-slate-600/50 transition-all duration-500">
          <div
            className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6"
            style={{ fontFamily: fonts.body }}
          >
            {/* Paragraph 1 */}
            <p className="text-center">
              <span className="text-purple-300 font-bold text-2xl">MCA@GIT</span> was
              founded in the year{" "}
              <span className="text-cyan-300 font-semibold">1999</span>. From the last two
              decades this department has been nurturing graduates from the streams like
              BCA, BSc and BCom with excellent technical skills, managerial skills, soft
              skills and ethical values; as a result of which today our alumni are either
              successful IT professionals in top notch IT companies, entrepreneurs or
              academicians.
            </p>

            {/* Paragraph 2 */}
            <div className="overflow-hidden transition-all duration-700 ease-in-out">
              <p className="text-justify">
                The speciality of{" "}
                <span className="text-purple-300 font-semibold">MCA@GIT</span> is its
                ability to provide state-of-the-art facilities and infrastructure with the
                backup of highly qualified and dedicated staff. Other than adopting
                conventional learning process, this department imparts knowledge through
                workshops, expert talks, certification programmes, cultural/technical
                programmes, internships etc. and has thus created its unique brand
                identity in the entire{" "}
                <span className="text-cyan-300 font-semibold">North Karnataka</span>.
              </p>
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-8">
            <button
              className="group relative px-8 py-4 bg-slate-800/60 border border-slate-600/50 rounded-xl font-bold text-gray-200 text-lg overflow-hidden transition-all duration-300 hover:bg-slate-700/60 hover:border-slate-500/50"
              style={{ fontFamily: fonts.body }}
            >
              More
            </button>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-2 h-2 rounded-full bg-purple-400/30 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-blue-400/30 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400/30 animate-pulse delay-200"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default AboutCollege;