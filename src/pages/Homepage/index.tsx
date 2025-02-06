import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="mb-8 text-4xl font-bold">Selamat Datang 👋</h1>
      <div className="flex space-x-4">
        <Link
          to="/auth/signin"
          aria-label="Masuk ke akun Anda"
          className="rounded-lg bg-blue-500 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Masuk
        </Link>
        <Link
          to="/auth/signup"
          aria-label="Mendaftar akun baru"
          className="rounded-lg bg-green-500 px-6 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
};

export default Main;
