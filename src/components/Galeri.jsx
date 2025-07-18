"use client";
import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  Grid,
  List,
  Calendar,
  MapPin,
  Users,
  University,
  Clock,
} from "lucide-react";

const Galeri = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Kegiatan", count: 12 },
    { id: "sosialisasi", name: "Sosialisasi", count: 3 },
    { id: "pemberdayaan", name: "Pemberdayaan", count: 4 },
    { id: "edukasi", name: "Edukasi", count: 2 },
    { id: "kesehatan", name: "Kesehatan", count: 3 },
  ];

  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Kegiatan KKM ${i + 1}`,
      category:
        categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
      date: "Coming Soon",
      location: "Kelurahan Dalung",
      status: "upcoming",
    }));
    setGalleryItems(generated);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <University className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  Galeri Kegiatan KKM
                </h1>
                <p className="text-xl text-blue-600 font-semibold">
                  Kelompok 12 - Kelurahan Dalung
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mt-6">
              <div className="flex items-center gap-2">
                <University className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Universitas Banten Jaya</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <span className="font-medium">31 Juli - 08 September 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="font-medium">Kelurahan Dalung</span>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari kegiatan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>

              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Status Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-2xl mb-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <Clock className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-bold">
              Kegiatan Akan Segera Dimulai!
            </h2>
          </div>
          <p className="text-lg opacity-90">
            Dokumentasi kegiatan KKM akan segera tersedia setelah pelaksanaan
            dimulai
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`relative ${
                  viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-video"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-10 w-10 text-gray-500" />
                    </div>
                    <div className="text-gray-500 font-medium text-sm">
                      COMING SOON
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {categories.find((c) => c.id === item.category)?.name ||
                      "Kegiatan"}
                  </span>
                </div>
              </div>

              <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Kelompok 12</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Dokumentasi segera tersedia
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-yellow-600 font-medium">
                        Upcoming
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada kegiatan yang ditemukan
            </h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p className="text-lg font-medium mb-2">
              Kuliah Kerja Mahasiswa (KKM) Kelompok 12
            </p>
            <p className="text-sm">
              Universitas Banten Jaya • Kelurahan Dalung • 31 Juli - 08
              September 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
