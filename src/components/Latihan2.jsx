// src/assets/components/Latihan2.jsx
import React from 'react';

/**
 * Galeri: ambil gambar dari /public/images/1.jpg ... /public/images/6.jpg
 * Jika belum ada gambar, gunakan placeholder seperti https://via.placeholder.com/400
 */
export default function Latihan2() {
  const items = Array.from({ length: 6 });

  return (
    <section className="border-2 border-gray-200 rounded-lg p-4 mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-700">LATIHAN 2: Galeri</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((_, i) => {
          const idx = i + 1;
          return (
            <div key={i} className="rounded-md overflow-hidden bg-gray-100">
              <img
                src={`/images/${idx}.jpg`}
                alt={`Gambar contoh ${idx}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
