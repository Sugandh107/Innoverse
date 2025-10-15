import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'], fonts = { title: 'Arial Black', body: 'Arial' } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-32 pt-3">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              {/* <div className="flex items-center cursor-pointer group flex-shrink-0">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                  <div className="absolute inset-0 bg-cyan-500 rounded-xl transform rotate-12 opacity-90 group-hover:rotate-[24deg] transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-purple-600 rounded-xl transform -rotate-12 opacity-90 group-hover:-rotate-[24deg] transition-all duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <span className="text-white font-black text-base sm:text-lg lg:text-xl" style={{ fontFamily: fonts.title }}>Ino</span>
                    <div className="absolute -bottom-0.5 sm:-bottom-1 bg-purple-600 text-white text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md shadow-lg">
                      Verse
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white font-bold text-sm xl:text-base tracking-wide hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
                    style={{
                      animation: `fadeInDown 0.6s ease-out ${index * 0.08}s both`,
                      fontFamily: fonts.body
                    }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                  </a>
                ))}
              </div>

              {/* Desktop Swag Button */}
              <button className="hidden lg:block relative group flex-shrink-0">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-md group-hover:blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
                <div className="relative bg-slate-800 text-white px-6  py-2.5 xl:py-2 rounded-full font-bold text-sm xl:text-base border-2 border-purple-500 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105" style={{ fontFamily: fonts.body }}>
                  Register
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-5 border border-purple-500/30 shadow-2xl animate-slideDown">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white font-bold text-lg sm:text-xl hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: `fadeInLeft 0.4s ease-out ${index * 0.06}s both`,
                    fontFamily: fonts.body
                  }}
                >
                  {item}
                </a>
              ))}
              <button 
                className="w-full bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-purple-500 transition-all duration-300 hover:scale-105" 
                style={{ fontFamily: fonts.body }}
              >
                SWAG
              </button>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;