import { useState, useEffect } from 'react';
import About from './About';
import React from 'react';

const HomePages = () => {
  return (
    <div className="bg-gray-200 text-center">
      {/* Hero Section dengan Gradient Background */}
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{
          height: '50vh', // Atur tinggi gambar latar belakang agar memenuhi layar
        }}
      >
        <div className="mt-100 mb-80">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-700">
            WELCOME TO
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-700">
            MY PROFILE
          </h1>
          <p className="text-lg font-serif">Where Kalcer Is No. 1.</p>

        </div>
      </div>

      {/* Menambahkan komponen About */}
      <About />
      

    </div>
  );
};

export default HomePages;