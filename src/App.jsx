// src/app.jsx
'use client';
import React from 'react';
import Latihan1 from './components/Latihan1';
import Latihan2 from './components/Latihan2.jsx';
import Latihan3 from './components/Latihan3';
import Latihan4 from './components/Latihan4';
import Latihan5 from './components/Latihan5';

export default function App() {
  return (
    <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Hasil Latihan Pemrograman Sisi Klien
        </h1>

        <Latihan1 />
        <Latihan2 />
        <Latihan3 />
        <Latihan4 />
        <Latihan5 />
      </div>
    </div>
  );
}
