import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState('Dev');

  const teamData = [
    {
      name: 'Sugandh Revankar',
      role: 'Developer',
      category: 'Dev',
      image: './sugandh.jpg',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/sugandh-revankar-698968225/',
      github: 'https://github.com/Sugandh107'
    },
    {
      name: 'Ningaraj Gani',
      role: 'Developer',
      category: 'Dev',
      image: '/ningaraj.jpg',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/ningaraj-gani-58432722a/',
      github: 'https://github.com/ningarajgani'
    },
    {
      name: 'Vishnu Sangammanavar',
      role: 'Developer',
      category: 'Dev',
      image: '/vishnu.jpg',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/vishnu-sangammanavar-11230021b',
      github: 'https://github.com/VishnuSangammanavar'
    },
    {
      name: 'Sriraj Yadav',
      role: 'Lead Organizer',
      category: 'Organizer',
      image: 'sriraj.jpg',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/sriraj-yadav12/',
    },
    {
      name: 'Praveen',
      role: 'Lead Organizer',
      category: 'Organizer',
      image: 'praveen.jpg',
      color: '#8b4a4c',
      linkedin: 'https://www.linkedin.com/in/praveen-bhusaraddi-426466296/'
    },
  ];

  const categories = [...new Set(teamData.map(member => member.category))];
  
  const filteredMembers = teamData.filter(
    member => member.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16">
          Meet the <span
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >Team</span>
        </h1>

        {/* Category Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-16 md:mb-20 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-white text-slate-900'
                  : 'bg-transparent text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Team Grid with smooth transitions */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 transition-all duration-300">
          {filteredMembers.map((member, index) => (
            <div
              key={`${member.name}-${activeCategory}`}
              className="flex flex-col items-center group animate-fadeIn"
            >
              {/* Circular Image with color background */}
              <div className="relative mb-6 sm:mb-8">
                <div 
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: member.color || '#3e6e7c'
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Horizontal line */}
              <div 
                className="w-24 sm:w-32 h-0.5 mb-3 sm:mb-4"
                style={{
                  backgroundColor: member.color || '#3e6e7c'
                }}
              />

              {/* Info below */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                  {member.role}
                </p>

                {/* Social Links */}
                {(member.linkedin || member.github) && (
                  <div className="flex justify-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} className="text-white" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                        aria-label="GitHub"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default TeamSection;