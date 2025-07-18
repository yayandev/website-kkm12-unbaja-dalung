"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Users,
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  Star,
  Heart,
} from "lucide-react";

const Tim = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAllMembers, setShowAllMembers] = useState(false);

  const teamMembers = [
    // DPL
    {
      id: 0,
      name: "Ramdani Budiman, S.Kom., M.TI",
      role: "Dosen Pembimbing Lapangan",
      division: "Pembimbing",
      university: "Universitas Banten Jaya",
      nim: "DPL",
      phone: "+62 812-0000-0000",
      email: "ramdani@unbaja.ac.id",
      expertise: ["Pembimbingan", "Teknologi Informasi", "Manajemen"],
      description:
        "Dosen Pembimbing Lapangan yang membimbing dan mengawasi jalannya kegiatan KKM Kelompok 12.",
      achievements: "Dosen Berprestasi, Peneliti Teknologi",
      img: 9,
    },
    // Ketua
    {
      id: 1,
      name: "M. Syahdan Rifaldi",
      role: "Ketua",
      division: "Koordinator",
      university: "Universitas Banten Jaya",
      nim: "202X1234567",
      phone: "+62 812-3456-7890",
      email: "syahdan@example.com",
      expertise: ["Leadership", "Koordinasi", "Manajemen"],
      description:
        "Bertanggung jawab mengkoordinasikan seluruh kegiatan KKM dan memastikan program berjalan sesuai rencana.",
      achievements: "Ketua BEM, Juara Lomba Karya Tulis",
      img: 1,
    },
    // Wakil Ketua
    {
      id: 2,
      name: "Rizki Alfaizan",
      role: "Wakil Ketua",
      division: "Koordinator",
      university: "Universitas Banten Jaya",
      nim: "202X1234568",
      phone: "+62 812-3456-7891",
      email: "rizki@example.com",
      expertise: ["Organisasi", "Komunikasi", "Problem Solving"],
      description:
        "Membantu ketua dalam koordinasi dan menangani program pemberdayaan masyarakat.",
      achievements: "Aktivis Mahasiswa, Volunteer Terbaik",
      img: 2,
    },
    // Bendahara 1
    {
      id: 3,
      name: "Hilma Tiara",
      role: "Bendahara",
      division: "Keuangan",
      university: "Universitas Banten Jaya",
      nim: "202X1234569",
      phone: "+62 812-3456-7892",
      email: "hilma@example.com",
      expertise: ["Manajemen Keuangan", "Akuntansi", "Perencanaan"],
      description:
        "Mengelola keuangan kelompok dan memastikan transparansi penggunaan dana.",
      achievements: "Bendahara Organisasi, Mahasiswa Berprestasi",
      img: 3,
    },
    // Bendahara 2
    {
      id: 4,
      name: "Atika Razma",
      role: "Bendahara",
      division: "Keuangan",
      university: "Universitas Banten Jaya",
      nim: "202X1234570",
      phone: "+62 812-3456-7893",
      email: "atika@example.com",
      expertise: ["Manajemen Keuangan", "Administrasi", "Audit"],
      description:
        "Membantu pengelolaan keuangan kelompok dan melakukan audit internal.",
      achievements: "Treasurer Award, Mahasiswa Teladan",
      img: 4,
    },
    // Sekretaris 1
    {
      id: 5,
      name: "Ihlal Septian",
      role: "Sekretaris",
      division: "Administrasi",
      university: "Universitas Banten Jaya",
      nim: "202X1234571",
      phone: "+62 812-3456-7894",
      email: "ihlal@example.com",
      expertise: ["Administrasi", "Dokumentasi", "Komunikasi"],
      description:
        "Mengelola administrasi kelompok dan mendokumentasikan seluruh kegiatan KKM.",
      achievements: "Sekretaris Himpunan, Juara Debat",
      img: 5,
    },
    // Sekretaris 2
    {
      id: 6,
      name: "Hulelah",
      role: "Sekretaris",
      division: "Administrasi",
      university: "Universitas Banten Jaya",
      nim: "202X1234572",
      phone: "+62 812-3456-7895",
      email: "hulelah@example.com",
      expertise: ["Dokumentasi", "Arsip", "Komunikasi"],
      description:
        "Membantu pengelolaan administrasi dan dokumentasi kegiatan KKM.",
      achievements: "Dokumenter Terbaik, Penulis Aktif",
      img: 6,
    },
    // Divisi Acara 1
    {
      id: 7,
      name: "Fauliatunajah",
      role: "Koordinator Acara",
      division: "Acara",
      university: "Universitas Banten Jaya",
      nim: "202X1234573",
      phone: "+62 812-3456-7896",
      email: "faulia@example.com",
      expertise: ["Event Management", "Organisasi", "Kreativitas"],
      description:
        "Merencanakan dan mengorganisir seluruh acara dan kegiatan KKM.",
      achievements: "Event Organizer Terbaik, Kreator Konten",
      img: 7,
    },
    // Divisi Acara 2
    {
      id: 8,
      name: "Siti Rahmatu Saniah",
      role: "Anggota Acara",
      division: "Acara",
      university: "Universitas Banten Jaya",
      nim: "202X1234574",
      phone: "+62 812-3456-7897",
      email: "siti@example.com",
      expertise: ["Koordinasi", "Publikasi", "Manajemen"],
      description:
        "Membantu koordinasi acara dan mengelola publikasi kegiatan.",
      achievements: "Publikasi Terbaik, Social Media Manager",
      img: 8,
    },
    // Divisi Acara 3
    {
      id: 9,
      name: "Moh Rifan Sofhian",
      role: "Anggota Acara",
      division: "Acara",
      university: "Universitas Banten Jaya",
      nim: "202X1234575",
      phone: "+62 812-3456-7898",
      email: "rifan@example.com",
      expertise: ["Sound System", "Teknis", "Koordinasi"],
      description: "Menangani aspek teknis acara dan koordinasi lapangan.",
      achievements: "Teknisi Handal, Coordinator Award",
      img: 10,
    },
    // Divisi Acara 4
    {
      id: 10,
      name: "Aldi Ardiansyah",
      role: "Anggota Acara",
      division: "Acara",
      university: "Universitas Banten Jaya",
      nim: "202X1234576",
      phone: "+62 812-3456-7899",
      email: "aldi@example.com",
      expertise: ["Dekorasi", "Kreatif", "Koordinasi"],
      description:
        "Mengurus dekorasi dan tata letak acara serta koordinasi tim.",
      achievements: "Desainer Kreatif, Art Director",
      img: 11,
    },
    // PDD 1
    {
      id: 11,
      name: "Yayan Faturohman",
      role: "Koordinator PDD",
      division: "PDD",
      university: "Universitas Banten Jaya",
      nim: "202X1234577",
      phone: "+62 812-3456-7900",
      email: "yayan@example.com",
      expertise: ["Pengembangan Desa", "Pemberdayaan", "Analisis"],
      description: "Mengkoordinasi program pengembangan dan pemberdayaan desa.",
      achievements: "Community Developer, Rural Development Award",
      img: 12,
    },
    // PDD 2
    {
      id: 12,
      name: "Muhamad Fikri Haikal",
      role: "Anggota PDD",
      division: "PDD",
      university: "Universitas Banten Jaya",
      nim: "202X1234578",
      phone: "+62 812-3456-7901",
      email: "fikri@example.com",
      expertise: ["Riset", "Pemberdayaan", "Edukasi"],
      description:
        "Melakukan riset dan implementasi program pemberdayaan masyarakat.",
      achievements: "Peneliti Muda, Community Empowerment",
      img: 13,
    },
    // Humas 1
    {
      id: 13,
      name: "Edi Budi Utomo",
      role: "Koordinator Humas",
      division: "Humas",
      university: "Universitas Banten Jaya",
      nim: "202X1234579",
      phone: "+62 812-3456-7902",
      email: "edi@example.com",
      expertise: ["Public Relations", "Komunikasi", "Negosiasi"],
      description:
        "Mengelola hubungan dengan masyarakat dan stakeholder eksternal.",
      achievements: "PR Specialist, Communication Award",
      img: 14,
    },
    // Humas 2
    {
      id: 14,
      name: "Muhamad Hisam Firmansyah",
      role: "Anggota Humas",
      division: "Humas",
      university: "Universitas Banten Jaya",
      nim: "202X1234580",
      phone: "+62 812-3456-7903",
      email: "hisam@example.com",
      expertise: ["Media Relations", "Dokumentasi", "Publikasi"],
      description:
        "Mengurus media relations dan dokumentasi kegiatan untuk publikasi.",
      achievements: "Media Specialist, Content Creator",
      img: 15,
    },
    // Konsumsi 1
    {
      id: 15,
      name: "Yusnalia",
      role: "Koordinator Konsumsi",
      division: "Konsumsi",
      university: "Universitas Banten Jaya",
      nim: "202X1234581",
      phone: "+62 812-3456-7904",
      email: "yusnalia@example.com",
      expertise: ["Manajemen Konsumsi", "Logistik", "Perencanaan"],
      description:
        "Mengkoordinasi kebutuhan konsumsi dan logistik seluruh kegiatan.",
      achievements: "Logistics Manager, Catering Specialist",
      img: 16,
    },
    // Konsumsi 2
    {
      id: 16,
      name: "Hanafi",
      role: "Anggota Konsumsi",
      division: "Konsumsi",
      university: "Universitas Banten Jaya",
      nim: "202X1234582",
      phone: "+62 812-3456-7905",
      email: "hanafi@example.com",
      expertise: ["Procurement", "Inventory", "Koordinasi"],
      description: "Mengelola pengadaan dan inventory kebutuhan konsumsi.",
      achievements: "Procurement Specialist, Inventory Manager",
      img: 17,
    },
    // Konsumsi 3
    {
      id: 17,
      name: "Irsyan Riski Aprilian",
      role: "Anggota Konsumsi",
      division: "Konsumsi",
      university: "Universitas Banten Jaya",
      nim: "202X1234583",
      phone: "+62 812-3456-7906",
      email: "irsyan@example.com",
      expertise: ["Distribusi", "Pelayanan", "Koordinasi"],
      description:
        "Menangani distribusi konsumsi dan pelayanan kepada peserta.",
      achievements: "Service Excellence, Distribution Expert",
      img: 18,
    },
  ];

  const displayedMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 6);

  const getRoleColor = (role) => {
    switch (role) {
      case "Dosen Pembimbing Lapangan":
        return "bg-gradient-to-r from-indigo-600 to-indigo-700";
      case "Ketua":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Wakil Ketua":
        return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Sekretaris":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "Bendahara":
        return "bg-gradient-to-r from-orange-500 to-orange-600";
      case "Koordinator Acara":
        return "bg-gradient-to-r from-pink-500 to-pink-600";
      case "Anggota Acara":
        return "bg-gradient-to-r from-pink-400 to-pink-500";
      case "Koordinator PDD":
        return "bg-gradient-to-r from-teal-500 to-teal-600";
      case "Anggota PDD":
        return "bg-gradient-to-r from-teal-400 to-teal-500";
      case "Koordinator Humas":
        return "bg-gradient-to-r from-cyan-500 to-cyan-600";
      case "Anggota Humas":
        return "bg-gradient-to-r from-cyan-400 to-cyan-500";
      case "Koordinator Konsumsi":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      case "Anggota Konsumsi":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section
      id="tim"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 text-blue-600 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Tim <span className="text-blue-600">KKM</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berkenalan dengan tim mahasiswa KKM Kelompok 12 yang siap memberikan
            kontribusi terbaik untuk kemajuan Kelurahan Dalung
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>31 Juli - 08 September 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Kelurahan Dalung</span>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-gray-600">Total Anggota</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">6</div>
            <div className="text-gray-600">Divisi Kerja</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">40</div>
            <div className="text-gray-600">Hari Kerja</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
            <div className="text-gray-600">Kelurahan Binaan</div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {displayedMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedMember(member)}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-blue-200 transition-all">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfYb4CWzn9zbn-jLTwei46uk0dMEgMsh3gQ&s`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-medium ${getRoleColor(
                    member.role
                  )}`}
                >
                  {member.role}
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.division}
                </p>
                <p className="text-gray-500 text-sm mb-4">{member.nim}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all group-hover:shadow-lg">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllMembers(!showAllMembers)}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all shadow-lg border border-blue-200"
          >
            {showAllMembers ? (
              <>
                <ChevronUp className="h-5 w-5" />
                Tampilkan Lebih Sedikit
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5" />
                Tampilkan Semua Anggota
              </>
            )}
          </button>
        </div>
      </div>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfYb4CWzn9zbn-jLTwei46uk0dMEgMsh3gQ&s`}
                  alt={selectedMember.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-500">{selectedMember.division}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Deskripsi</h4>
                <p className="text-gray-600">{selectedMember.description}</p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Informasi Kontak
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-600">
                      {selectedMember.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">
                      {selectedMember.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Keahlian</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Prestasi</h4>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">
                    {selectedMember.achievements}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tim;
