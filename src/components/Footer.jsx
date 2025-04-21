import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Info Kiri */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">© {new Date().getFullYear()} Muhammad Roji Taufik - 152023103</h2>
          <p className="text-sm text-gray-400">Wiht Junkis</p>
        </div>

        {/* Sosial Media */}
        <div className="flex space-x-5 text-xl">
          <a href="https://www.instagram.com/roji_tfk/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
