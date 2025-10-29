import React, { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState('Organizer');

  // Team data included in component
  const teamData = [
    {
      name: 'Prof. Dipak Rabari Sir',
      role: 'Faculty coordinator',
      category: 'Organizer',
      image: '/assets/team/deepeksir.png',
      color: '#507a87'
    },
    {
      name: 'Kris Patel',
      role: 'Lead Organizer',
      category: 'Organizer',
      image: '/assets/team/kris2.png',
      color: '#8b4a4c',
      linkedin: 'https://www.linkedin.com/in/kris-patel-985158250',
      github: 'https://github.com/Kris0011'
    },
    {
      name: 'Shaily Fadadu',
      role: 'Organizer',
      category: 'Organizer',
      image: '/assets/team/shaily1.png',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/shailyfadadu',
      github: 'https://github.com/shailifadadu'
    },
    {
      name: 'Kavya Shah',
      role: 'Organizer',
      category: 'Organizer',
      image: '/assets/team/kavya2.png',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/kavya-shah-/',
      github: 'https://github.com/Kavyashah26'
    },
    {
      name: 'Krish Desai',
      role: 'Organizer',
      category: 'Organizer',
      image: '/assets/team/krish1.png',
      color: '#507a87',
      linkedin: 'https://www.linkedin.com/in/krish-desai-9b6a56259',
      github: 'https://github.com/DesaiKrish'
    },
    {
      name: 'John Doe',
      role: 'Tech Lead',
      category: 'Tech',
      image: '/assets/team/placeholder.png',
      color: '#2d5a7b',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    },
    {
      name: 'Jane Smith',
      role: 'Sponsorship Head',
      category: 'Sponsorship',
      image: '/assets/team/placeholder.png',
      color: '#5a4d7b',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Mike Wilson',
      role: 'Design Lead',
      category: 'Design',
      image: '/assets/team/placeholder.png',
      color: '#7b5a4d',
      github: 'https://github.com/mikewilson'
    },
    {
      name: 'Sarah Johnson',
      role: 'Management Lead',
      category: 'Management',
      image: '/assets/team/placeholder.png',
      color: '#4d7b5a',
      linkedin: 'https://linkedin.com/in/sarahjohnson'
    },
    {
      name: 'David Brown',
      role: 'Outreach Head',
      category: 'Outreach',
      image: '/assets/team/placeholder.png',
      color: '#7b4d5a',
      linkedin: 'https://linkedin.com/in/davidbrown',
      github: 'https://github.com/davidbrown'
    }
  ];

  const categories = [...new Set(teamData.map(member => member.category))];
  
  const filteredMembers = teamData.filter(
    member => member.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16">
          Meet the Team
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

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Name above image */}
              <div className="mb-4 sm:mb-6 text-center">
                <h2 className="text-base sm:text-lg font-semibold text-white">
                  {member.name}
                </h2>
              </div>

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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default TeamSection;