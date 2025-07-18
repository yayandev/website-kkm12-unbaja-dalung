"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUsers,
  faHeart,
  faLightbulb,
  faBullseye,
  faHandshake,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Tentang = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("tentang");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const values = [
    {
      icon: faGraduationCap,
      title: "Pembelajaran",
      description:
        "Mengaplikasikan ilmu yang didapat di kampus untuk memberikan solusi nyata",
    },
    {
      icon: faUsers,
      title: "Kerjasama",
      description:
        "Berkolaborasi dengan masyarakat untuk menciptakan perubahan positif",
    },
    {
      icon: faHeart,
      title: "Pengabdian",
      description:
        "Memberikan kontribusi terbaik dengan penuh dedikasi dan ketulusan",
    },
    {
      icon: faLightbulb,
      title: "Inovasi",
      description:
        "Menghadirkan ide-ide kreatif untuk menyelesaikan tantangan masyarakat",
    },
  ];

  const statistics = [
    { number: "40+", label: "Hari Pengabdian", icon: faRocket },
    { number: "500+", label: "Masyarakat Terlayani", icon: faUsers },
    { number: "15+", label: "Program Kegiatan", icon: faBullseye },
    { number: "100%", label: "Dedikasi Tim", icon: faHandshake },
  ];

  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 relative">
            Tentang Kami
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700 font-light">
            Kami adalah mahasiswa UNBAJA yang melaksanakan Kuliah Kerja
            Mahasiswa (KKM) di Kelurahan Dalung. Kegiatan ini bertujuan untuk
            memberikan kontribusi nyata kepada masyarakat melalui berbagai
            program pemberdayaan dan edukasi.
          </p>
        </div>

        {/* Statistics Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50"
            >
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-3xl md:text-4xl text-blue-600 mb-3"
              />
              <div className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center mb-12">
            Nilai-Nilai Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50 cursor-pointer ${
                  activeCard === index ? "ring-2 ring-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={value.icon}
                      className="text-2xl text-white"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-700/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Misi Kami</h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                Menjadi jembatan antara dunia akademik dan masyarakat,
                menciptakan dampak positif yang berkelanjutan melalui
                program-program inovatif yang memberdayakan masyarakat Kelurahan
                Dalung menuju kehidupan yang lebih baik dan sejahtera.
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#program"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
          >
            Lihat Program Kami
            <FontAwesomeIcon icon={faRocket} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
