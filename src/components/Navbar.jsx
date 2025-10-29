import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'], fonts = { title: 'Arial Black', body: 'Arial' } }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-32 pt-3">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 lg:px-8 py-3">
            <div className="flex items-center justify-between">
               
              {/* Logo - Always links to home */}
              <HashLink 
                smooth 
                to="/#" 
                className="flex items-center cursor-pointer group flex-shrink-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 transform transition-all duration-500">
                  <img className="" src="./logo.png" alt="Logo" />
                </div>
              </HashLink>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
                {navItems.map((item, index) => {
                  const href = `#${item.toLowerCase()}`;
                  
                  return (
                    <HashLink
                      key={item}
                      smooth
                      to={isHomePage ? href : `/${href}`}
                      className="text-white font-bold text-sm xl:text-base tracking-wide hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
                      style={{
                        animation: `fadeInDown 0.6s ease-out ${index * 0.08}s both`,
                        fontFamily: fonts.body
                      }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                    </HashLink>
                  );
                })}
                
                {/* Rules Link - Separate Route */}
                <Link
                  to="/rules"
                  className="text-white font-bold text-sm xl:text-base tracking-wide hover:text-cyan-400 transition-all duration-300 relative group whitespace-nowrap"
                  style={{
                    animation: `fadeInDown 0.6s ease-out ${navItems.length * 0.08}s both`,
                    fontFamily: fonts.body
                  }}
                >
                  RULES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500"></span>
                </Link>
              </div>

              {/* Desktop Register Button */}
              <button className="hidden lg:block relative group flex-shrink-0">
                <div className="absolute inset-0 bg-purple-600 rounded-full blur-md group-hover:blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
                <div className="relative bg-slate-800 text-white px-6 py-2.5 xl:py-2 rounded-full font-bold text-sm xl:text-base border-2 border-purple-500 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105" style={{ fontFamily: fonts.body }}>
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
              {navItems.map((item, index) => {
                const href = `#${item.toLowerCase()}`;
                
                return (
                  <HashLink
                    key={item}
                    smooth
                    to={isHomePage ? href : `/${href}`}
                    className="block text-white font-bold text-lg sm:text-xl hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animation: `fadeInLeft 0.4s ease-out ${index * 0.06}s both`,
                      fontFamily: fonts.body
                    }}
                  >
                    {item}
                  </HashLink>
                );
              })}
              
              {/* Rules Link in Mobile Menu */}
              <Link
                to="/rules"
                className="block text-white font-bold text-lg sm:text-xl hover:text-cyan-400 transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: `fadeInLeft 0.4s ease-out ${navItems.length * 0.06}s both`,
                  fontFamily: fonts.body
                }}
              >
                RULES
              </Link>
              
              <button 
                className="w-full bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-purple-500 transition-all duration-300 hover:scale-105" 
                style={{ fontFamily: fonts.body }}
              >
                Register
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