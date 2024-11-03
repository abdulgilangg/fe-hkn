import React, { useEffect, useState } from 'react';
import { Announcement } from '../../types/package';

const AnnouncementSlider: React.FC = () => {
  const [announcement, setAnnouncement] = useState<Announcement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnnouncement = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_PUBLIC_API_URL}/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) throw new Error('Gagal mengambil data pengumuman');

      const data = await response.json();
      setAnnouncement(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []);

  // Fungsi untuk mengubah indeks pengumuman secara otomatis
  const nextAnnouncement = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === announcement.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevAnnouncement = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? announcement.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextAnnouncement, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, announcement.length]);

  if (isLoading) {
    return (
      <div className="text-center text-white bg-primary bg-opacity-90 rounded-sm border shadow-default border-stroke mb-5 p-5 flex justify-center dark:border-strokedark dark:bg-boxdark">
        Loading...
      </div>
    );
  }

  if (announcement.length === 0) {
    return (
      <div className="text-center text-white bg-primary bg-opacity-90 rounded-sm border shadow-default border-stroke mb-5 p-5 flex justify-center dark:border-strokedark dark:bg-boxdark">
        There are no announcements at this time.
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full py-2 md:px-6 overflow-hidden text-white bg-primary bg-opacity-90 rounded-sm border shadow-default border-stroke mb-5 p-5 flex justify-center dark:border-strokedark dark:bg-boxdark dark:text-white">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            !isTransitioning && 'transition-none'
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          {announcement.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center min-h-50"
            >
              <p className="text-center px-4">{item.message}</p>
            </div>
          ))}
        </div>

        {/* Tombol panah kiri */}
        <button
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevAnnouncement}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>

        {/* Tombol panah kanan */}
        <button
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextAnnouncement}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default AnnouncementSlider;
