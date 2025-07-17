"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({
    skills: false,
    certificate: false,
    blogpost: false,
  });
  const [scrolled, setScrolled] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const handleHireMeClick = () => {
    setShowHireModal(true);
    setIsOpen(false);
  };

  const navLinks = [
    { id: "head", label: "Home", dropdown: false },
    { id: "about", label: "About", dropdown: false },
    {
      id: "skills",
      label: "Skills",
      dropdown: true,
      items: [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "database", label: "Database" },
        { id: "devops", label: "DevOps" },
      ],
    },
    {
      id: "certificate",
      label: "Certifications",
      dropdown: true,
      items: [
        { id: "aws", label: "AWS Certified" },
        { id: "google", label: "Google Cloud" },
        { id: "microsoft", label: "Microsoft Certified" },
      ],
    },
    {
      id: "blogpost",
      label: "Portfolio",
      dropdown: true,
      items: [
        { id: "web", label: "Web Projects" },
        { id: "mobile", label: "Mobile Apps" },
        { id: "design", label: "UI/UX Designs" },
      ],
    },
    { id: "contact", label: "Contact", dropdown: false },
  ];

  return (
    <>
      <header id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray/95 text-slate-200 backdrop-blur-lg shadow-lg py-1"
            : "bg-gray/80 text-slate-200 backdrop-blur-md shadow-sm py-3"
        }`}
      >
        <nav className="font-poppins w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <a href="#" className="flex items-center">
                <div className="relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOfIDmPDig14qxjt18ROW0HycoCgHuRLyVA&s"
                    alt="Logo"
                    className={`size-12 rounded-full cursor-pointer transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                      scrolled ? "scale-90" : "scale-100"
                    }`}
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
                        setDropdownOpen((prev) => ({
                          ...prev,
                          [link.id]: true,
                        }));
                      }
                    }}
                    onMouseLeave={() => {
                      setActiveLink(null);
                      if (link.dropdown) {
                        setDropdownOpen((prev) => ({
                          ...prev,
                          [link.id]: false,
                        }));
                      }
                    }}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          className="px-3 py-2 font-bold hover:text-purple-600 transition-all duration-300 flex items-center relative"
                          onClick={() => toggleDropdown(link.id)}
                        >
                          <span className="relative z-10">{link.label}</span>
                          <svg
                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen[link.id] ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </button>

                        {/* Dropdown Menu */}
                        <div
                          className={`absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white/95 backdrop-blur-lg border border-gray-100 transition-all duration-300 origin-top ${
                            dropdownOpen[link.id]
                              ? "opacity-100 scale-100 translate-y-0"
                              : "opacity-0 scale-95 translate-y-1 pointer-events-none"
                          }`}
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
                        className="px-3 py-2 font-bold hover:text-purple-600 transition-all duration-300 relative block"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </a>
                    )}

                    {/* Floating dot effect */}
                    <div
                      className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-0 transition-all duration-300 ${
                        activeLink === link.id ? "opacity-100 animate-ping" : ""
                      }`}
                    ></div>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleHireMeClick}
                className="relative overflow-hidden rounded px-6 py-2.5 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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
                <div
                  className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 translate-y-1.5"
                      : "mb-1.5 group-hover:bg-pink-500"
                  }`}
                ></div>
                <div
                  className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "mb-1.5 group-hover:bg-pink-500"
                  }`}
                ></div>
                <div
                  className={`w-7 h-0.5 bg-purple-600 transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "group-hover:bg-pink-500"
                  }`}
                ></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isOpen ? "block" : "hidden"
            } transition-all duration-300 ease-in-out`}
          >
            <div
              className={`px-6 py-4 bg-white/95 backdrop-blur-lg rounded-xl mx-4 mt-3 shadow-2xl border border-gray-100 transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
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
                            className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen[link.id] ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Mobile Dropdown Menu */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            dropdownOpen[link.id] ? "max-h-96" : "max-h-0"
                          }`}
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
              <button
                onClick={handleHireMeClick}
                className="w-full mt-4 rounded px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-md hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 flex items-center justify-center group"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Hire Me!
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hire Me Modal - Positioned below navbar */}
      {showHireModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowHireModal(false)}
        >
          {/* Backdrop with blur and fade effect */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"></div>

          {/* Modal container with glass morphism effect */}
          <div
            className="relative w-full max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content with glass effect */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300 animate-scaleIn">
              {/* Gradient header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
                <h2 className="text-2xl font-bold text-white">
                  Lets Work Together!
                </h2>
                <p className="text-white/90 mt-1">
                  I m excited to hear about your project
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowHireModal(false);
                }}
                className="absolute top-3 right-3 bg-white text-purple-600 rounded-full p-1 shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
                style={{ width: "32px", height: "32px" }}
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal body */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Email option */}
                  <a
                    href="mailto:amanq3944@gmail.com?subject=Job Opportunity"
                    className="group relative flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Send an Email
                        </h3>
                        <p className="text-sm text-gray-500">
                          amanq3944@gmail.com
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>

                  {/* LinkedIn option */}
                  <a
                    href="https://www.linkedin.com/in/aman-qureshi-86bb15197/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Connect on LinkedIn
                        </h3>
                        <p className="text-sm text-gray-500">
                          Lets network professionally
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>

                  {/* Call option */}
                  <a
                    href="tel:+1234567890"
                    className="group relative flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <div className="flex items-center">
                      <div className="bg-green-50 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Call Me</h3>
                        <p className="text-sm text-gray-500">
                          +91 9575932050
                        </p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </a>
                </div>

                {/* Additional info */}
                <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    Typically responds within{" "}
                    <span className="font-medium text-purple-500">
                      24 hours
                    </span>
                  </p>
                  <div className="mt-3 flex justify-center space-x-4">
                    <a
                      href="https://x.com/" target="_blank"
                      className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/" target="_blank"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/" target="_blank"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
