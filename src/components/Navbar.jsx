"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Program", href: "#program" },
    { name: "Galeri", href: "#galeri" },
    { name: "Tim", href: "#tim" },
    { name: "Kontak", href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    const handleSectionChange = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20"
            : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Logo KKM"
                  className="h-10 w-10 mr-3 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#1e3a8a] group-hover:text-blue-600 transition-colors">
                  KKM UNBAJA
                </span>
                <span className="text-xs text-gray-600 -mt-1">Kelompok 12</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                      activeSection === item.href.substring(1)
                        ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                        : "text-[#1e3a8a] hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-full text-[#1e3a8a] hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 focus:outline-none transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                    : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  className="text-xl transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg transform ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg scale-105"
                    : "text-[#1e3a8a] hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen
                    ? "slideInUp 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
