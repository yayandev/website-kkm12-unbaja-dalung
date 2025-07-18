"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faSeedling,
  faStore,
  faUsers,
  faCalendarAlt,
  faMapMarkerAlt,
  faChevronRight,
  faHandHoldingHeart,
  faLeaf,
  faChartLine,
  faBullseye,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Program = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("program");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const programs = [
    {
      icon: faHeartbeat,
      title: "Penyuluhan Kesehatan",
      subtitle: "Peningkatan Kesadaran Masyarakat",
      description:
        "Program edukasi kesehatan yang komprehensif untuk meningkatkan kualitas hidup masyarakat Kelurahan Dalung",
      details: [
        "Penyuluhan tentang pola hidup sehat",
        "Pemeriksaan kesehatan gratis",
        "Edukasi pencegahan penyakit",
        "Pembagian vitamin dan suplemen",
      ],
      stats: {
        target: "200+ Warga",
        duration: "5 Hari",
        location: "Balai Kelurahan",
      },
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
    },
    {
      icon: faSeedling,
      title: "Pemanfaatan Lahan Kosong",
      subtitle: "Pemberdayaan Lingkungan",
      description:
        "Mengoptimalkan lahan kosong untuk kegiatan produktif dan ramah lingkungan bersama masyarakat",
      details: [
        "Penanaman tanaman produktif",
        "Pembuatan taman komunitas",
        "Edukasi urban farming",
        "Pengelolaan sampah organik",
      ],
      stats: {
        target: "3 Lokasi",
        duration: "10 Hari",
        location: "Lahan Kosong",
      },
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      icon: faStore,
      title: "Pelatihan UMKM",
      subtitle: "Pemberdayaan Ekonomi",
      description:
        "Memberikan pelatihan dan pendampingan untuk mengembangkan usaha mikro kecil menengah",
      details: [
        "Pelatihan manajemen usaha",
        "Digital marketing untuk UMKM",
        "Pembukuan sederhana",
        "Strategi pemasaran produk",
      ],
      stats: {
        target: "50+ Pelaku Usaha",
        duration: "7 Hari",
        location: "Pusat Pelatihan",
      },
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
  ];

  const additionalPrograms = [
    {
      icon: faHandHoldingHeart,
      title: "Bakti Sosial",
      description: "Kegiatan gotong royong dan bantuan sosial",
    },
    {
      icon: faLeaf,
      title: "Penghijauan",
      description: "Program penanaman pohon dan pelestarian lingkungan",
    },
    {
      icon: faChartLine,
      title: "Monitoring",
      description: "Evaluasi dan monitoring program berkelanjutan",
    },
  ];

  return (
    <section
      id="program"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 relative">
            Program Unggulan
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program inovatif yang dirancang untuk memberdayakan
            masyarakat dan menciptakan dampak positif berkelanjutan
          </p>
        </div>

        {/* Main Programs */}
        <div
          className={`grid gap-8 grid-cols-1 lg:grid-cols-3 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 cursor-pointer ${
                activeProgram === index ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
              onMouseEnter={() => setActiveProgram(index)}
              onMouseLeave={() => setActiveProgram(null)}
            >
              {/* Program Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${program.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <FontAwesomeIcon
                    icon={program.icon}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {program.subtitle}
                </p>
              </div>

              {/* Program Description */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Program Details */}
              <div className="space-y-3 mb-6">
                {program.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Program Stats */}
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>Target</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {program.stats.target}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>Durasi</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {program.stats.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    <span>Lokasi</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {program.stats.location}
                  </span>
                </div>
              </div>

              {/* Learn More Button */}
              <button
                className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100`}
              >
                Pelajari Lebih Lanjut
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Programs */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center mb-8">
            Program Pendukung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mb-4">
                  <FontAwesomeIcon
                    icon={program.icon}
                    className="text-xl text-white"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {program.title}
                </h4>
                <p className="text-sm text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <FontAwesomeIcon icon={faBullseye} className="text-4xl mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mari Bergabung Bersama Kami
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Dukung program-program kami untuk menciptakan perubahan positif
                di Kelurahan Dalung
              </p>
              <a
                href="#kontak"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hubungi Kami
                <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
              </a>
            </div>

            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
