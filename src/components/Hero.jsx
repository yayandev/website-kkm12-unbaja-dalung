"use client";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles on client side only
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden py-20 sm:py-0"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #1e3a8a 50%, #3730a3 75%, #fbbf24 100%)
        `,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main Title */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="inline-block animate-slide-up">KKM</span>{" "}
            <span className="inline-block animate-slide-up delay-200">
              UNBAJA
            </span>
            <br />
            <span className="text-yellow-300 inline-block animate-slide-up delay-400 relative">
              Kelompok 12
              <div className="absolute -inset-1 bg-yellow-300/20 blur-lg rounded-lg animate-pulse"></div>
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 animate-fade-in-up delay-600 max-w-4xl mx-auto font-light">
            Kuliah Kerja Mahasiswa di Kelurahan Dalung
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up delay-800">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-2xl mb-3 text-yellow-300"
            />
            <p className="font-semibold text-sm sm:text-base">
              31 Juli - 08 September
            </p>
            <p className="text-xs sm:text-sm opacity-80">2025</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-2xl mb-3 text-yellow-300"
            />
            <p className="font-semibold text-sm sm:text-base">
              Kelurahan Dalung
            </p>
            <p className="text-xs sm:text-sm opacity-80">Kota Serang</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-2xl mb-3 text-yellow-300"
            />
            <p className="font-semibold text-sm sm:text-base">Tim Mahasiswa</p>
            <p className="text-xs sm:text-sm opacity-80">Kelompok 12</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-1000">
          <a
            href="#program"
            className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto text-center relative overflow-hidden"
          >
            <span className="relative z-10">Lihat Program</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>

          <a
            href="#tentang"
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 w-full sm:w-auto text-center relative overflow-hidden"
          >
            <span className="relative z-10">Tentang Kami</span>
            <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
