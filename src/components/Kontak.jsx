import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Kontak = () => (
  <section id="kontak" className="py-20 bg-white text-gray-800">
    <div className="max-w-xl mx-auto px-4 text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6">Kontak Kami</h2>
      <p className="mb-4">
        Jika Anda memiliki pertanyaan atau ingin bekerja sama, silakan hubungi
        kami melalui informasi berikut:
      </p>
      <div className="space-y-4">
        <p>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-yellow-500 mr-2"
          />
          Kelurahan Dalung, Kota Serang
        </p>
        <p>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-yellow-500 mr-2"
          />
          <a href="https://instagram.com/kkm12dalung" target="_blank">
            @kkm12dalung
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faTiktok} className="text-yellow-500 mr-2" />
          <a href="https://www.tiktok.com/@kkm12dalung" target="_blank">
            @kkm12dalung
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="text-yellow-500 mr-2" />
          +62 838 7361 4764
        </p>
      </div>
    </div>
  </section>
);

export default Kontak;
