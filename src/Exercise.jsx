// Lokasi: src/Exercise.jsx

import React, { useEffect, useState } from "react"; // [cite: 2342]
import UserCard from "./UserCard"; // Path sudah benar (di folder yg sama)
import { getUsers } from "./Services"; // Path sudah benar (di folder yg sama)

function Exercise() {
  // 1. Siapkan state untuk menyimpan array users, awalnya kosong [cite: 2326, 2352]
  const [users, setUsers] = useState([]);

  // 2. useEffect untuk mengambil data HANYA SATU KALI saat komponen dimuat
  useEffect(() => {
    // 3. Buat fungsi async di dalam effect [cite: 2438, 2475]
    const fetchData = async () => {
      try {
        // 4. Panggil fungsi 'getUsers' dari Services.jsx [cite: 2440, 2479]
        const data = await getUsers();
        // 5. Simpan data yang didapat ke dalam state [cite: 2441, 2481]
        setUsers(data);
      } catch (error) {
        // 6. Tangani error jika gagal mengambil data [cite: 2443, 2485]
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };

    fetchData(); // 7. Panggil fungsi async tersebut [cite: 2449]
  }, []); // 8. Dependency array kosong, agar effect hanya jalan 1x [cite: 2336, 2504]

  // 9. Render UI
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 10. Render list user dari state menggunakan .map() */}
          {users.map((user) => (
            <UserCard 
              key={user.email} // Gunakan email sebagai key unik
              {...user}         // Gunakan spread operator
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;