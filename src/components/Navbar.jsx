import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Projects", href: "#project" },
    { title: "Skills", href: "#skill" },
    { title: "contact", href: "#contact" },
  ];

  return (
    <nav className="navbar text-black bg-white h-16 w-full md:px-10 sticky top-0  lg:mt-4">
      <div className="container mx-auto px-2 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-semibold text-black ml-5 md:ml-0">
              Jeswin <span className="text-red-600">A.H</span>
            </h1>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-black z-50 mx-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <span
                className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current absolute transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex md:gap-8 font-semibold text-lg items-center">
            {navLinks.map((link) => (
              <li key={link.title} className="relative group">
                <a
                  href={link.href}
                  className="block  transition-colors duration-300 mb-1 mx-2"
                >
                  {link.title}
                </a>
                <span className="absolute bottom-0  left-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed inset-0 bg-gray-50 z-40 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full "
            } md:hidden`}
          >
            <div className="flex flex-col items-center justify-center h-full ">
              <ul className="space-y-8 text-center">
                {navLinks.map((link) => (
                  <li key={link.title} className="relative group">
                    <a
                      href={link.href}
                      className="text-2xl font-semibold  transition-colors duration-300 block"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </a>
                    
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
