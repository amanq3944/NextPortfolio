"use client"
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({
    skills: false,
    certificate: false,
    blogpost: false
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const navLinks = [
    { id: 'head', label: 'Home', dropdown: false },
    { id: 'about', label: 'About', dropdown: false },
    { 
      id: 'skills', 
      label: 'Skills', 
      dropdown: true,
      items: [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'devops', label: 'DevOps' }
      ]
    },
    { 
      id: 'certificate', 
      label: 'Certifications', 
      dropdown: true,
      items: [
        { id: 'aws', label: 'AWS Certified' },
        { id: 'google', label: 'Google Cloud' },
        { id: 'microsoft', label: 'Microsoft Certified' }
      ]
    },
    { 
      id: 'blogpost', 
      label: 'Portfolio', 
      dropdown: true,
      items: [
        { id: 'web', label: 'Web Projects' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'design', label: 'UI/UX Designs' }
      ]
    },
    { id: 'contact', label: 'Contact', dropdown: false }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-1' : 'bg-white/80 backdrop-blur-md shadow-sm py-3'}`}>
      <nav className="font-poppins w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group">
            <a href="#" className="flex items-center">
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOfIDmPDig14qxjt18ROW0HycoCgHuRLyVA&s"
                  alt="Logo"
                  className={`size-12 rounded-full cursor-pointer transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${scrolled ? 'scale-90' : 'scale-100'}`}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
              </div>
              <span className="text-2xl font-bold font-serif ml-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Aman<span className="text-purple-500">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className="relative group"
                  onMouseEnter={() => {
                    setActiveLink(link.id);
                    if (link.dropdown) {
                      setDropdownOpen(prev => ({...prev, [link.id]: true}));
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveLink(null);
                    if (link.dropdown) {
                      setDropdownOpen(prev => ({...prev, [link.id]: false}));
                    }
                  }}
                >
                  {link.dropdown ? (
                    <>
                      <button 
                        className="px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 flex items-center relative"
                        onClick={() => toggleDropdown(link.id)}
                      >
                        <span className="relative z-10">{link.label}</span>
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen[link.id] ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white/95 backdrop-blur-lg border border-gray-100 transition-all duration-300 origin-top ${dropdownOpen[link.id] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 pointer-events-none'}`}
                      >
                        <div className="py-2 px-1">
                          {link.items.map((item, index) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 rounded-lg transition-all duration-200 relative overflow-hidden"
                            >
                              <span className="relative z-10 flex items-center">
                                <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 transition-all duration-300 group-hover:w-3 group-hover:h-3"></span>
                                {item.label}
                              </span>
                              <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a 
                      href={`#${link.id}`}
                      className="px-3 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 relative block"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  )}
                  
                  {/* Floating dot effect */}
                  <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-0 transition-all duration-300 ${activeLink === link.id ? 'opacity-100 animate-ping' : ''}`}></div>
                </li>
              ))}
            </ul>
            
            <button className="relative overflow-hidden rounded-full px-6 py-2.5 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 group hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Hire Me!
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-12 h-12 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5 group-hover:bg-pink-500'}`}></div>
              <div className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-1.5 group-hover:bg-pink-500'}`}></div>
              <div className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:bg-pink-500'}`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className={`px-6 py-4 bg-white/95 backdrop-blur-lg rounded-xl mx-4 mt-3 shadow-2xl border border-gray-100 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id} className="relative">
                  {link.dropdown ? (
                    <div className="relative">
                      <button 
                        onClick={() => toggleDropdown(link.id)}
                        className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 font-medium transition-all duration-300"
                      >
                        <span>{link.label}</span>
                        <svg 
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${dropdownOpen[link.id] ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Mobile Dropdown Menu */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen[link.id] ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <ul className="pl-6 py-2 space-y-1">
                          {link.items.map((item) => (
                            <li key={item.id}>
                              <a
                                href={`#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 text-sm transition-all duration-200 flex items-center"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></span>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={`#${link.id}`} 
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 font-medium transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 rounded-full px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 flex items-center justify-center group">
              <svg className="w-4 h-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me!
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}