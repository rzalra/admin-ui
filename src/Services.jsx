// Lokasi: src/Services.jsx

// Data statis untuk digabungkan dengan data API [cite: 1985-1987]
const city = "Jakarta";
const street = "Jl Kebon Jeruk";

/**
 * Mengambil data user dari API,
 * memfilter hanya name dan email,
 * lalu menggabungkannya dengan data city dan street statis.
 */
export const getUsers = async () => {
  try {
    // 1. Ambil data dari API [cite: 1734]
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // 2. Ubah respons menjadi JSON [cite: 1733]
    const users = await response.json();

    // 3. Transformasi data menggunakan .map() [cite: 1738]
    return users.map((user) => ({
      name: user.name, // Ambil 'name' dari data API
      email: user.email, // Ambil 'email' dari data API
      
      // Gunakan Object Property Shorthand untuk data statis [cite: 2000-2001]
      city,
      street,
    }));
  } catch (error) {
    // 4. Tangani jika terjadi error [cite: 1747-1748]
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error; // Lempar error agar bisa ditangkap oleh komponen
  }
};