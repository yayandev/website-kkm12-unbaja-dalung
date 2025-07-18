import Tentang from "@/components/Tentang";
import Program from "@/components/Program";
import Galeri from "@/components/Galeri";
import Tim from "@/components/Tim";
import Kontak from "@/components/Kontak";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <Tentang />
      <Program />
      <Galeri />
      <Tim />
      <Kontak />
      <Footer />
    </div>
  );
};

export default App;
