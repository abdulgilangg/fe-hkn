import React, { useEffect, useState } from 'react';

interface Address {
  address: string;
  city: string;
  country: string;
}

const AlamatKirim: React.FC = () => {
  // State untuk menyimpan data alamat kirim yang di-fetch dari backend
  const [alamatKirim, setAlamatKirim] = useState<Address | null>(null);
  const [selectedKurir, setSelectedKurir] = useState<string>('Pilih Kurir');

  // Daftar kurir (bisa diubah sesuai data yang dibutuhkan)
  const kurirOptions = ['JNE', 'Tiki', 'Pos Indonesia', 'Sicepat'];

  // Fetch data alamat kirim dari backend saat komponen pertama kali di-mount
  useEffect(() => {
    const fetchAlamatKirim = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/alamat'); // URL backend Golang Anda
        const data = await response.json();
        setAlamatKirim(data);
      } catch (error) {
        console.error('Gagal fetch data alamat:', error);
      }
    };

    fetchAlamatKirim();
  }, []);

  return (
    <div className="p-6 border-2 border-red-500 rounded-lg w-full flex justify-between items-start">
      {/* Alamat Kirim */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-700">Alamat Kirim</h2>
        {alamatKirim ? (
          <p className="mt-2 text-gray-500">
            {alamatKirim.address}, {alamatKirim.city}, {alamatKirim.country}
          </p>
        ) : (
          <p className="mt-2 text-gray-500">Loading alamat...</p>
        )}
      </div>

      {/* Pilihan Kurir */}
      <div className="ml-4">
        <label className="block text-gray-700 mb-2" htmlFor="kurir">
          Pilihan Kurir
        </label>
        <select
          id="kurir"
          value={selectedKurir}
          onChange={(e) => setSelectedKurir(e.target.value)}
          className="w-full px-3 py-2 border border-blue-400 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option disabled>Pilih Kurir</option>
          {kurirOptions.map((kurir, index) => (
            <option key={index} value={kurir}>
              {kurir}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AlamatKirim;
