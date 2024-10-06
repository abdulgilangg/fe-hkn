import React, { useEffect, useState } from 'react';
import { Announcement } from '../../types/package';

const announcements: Announcement[] = [
  { id: 1, message: 'Diskon 20% untuk semua produk hingga akhir bulan!' },
  { id: 2, message: 'Pengiriman gratis untuk pemesanan di atas Rp5.000.000!' },
];

const AnnouncementSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Fungsi untuk mengubah indeks pengumuman secara otomatis
  const nextAnnouncement = () => {
    if (currentIndex === announcements.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextAnnouncement, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full py-2 md:px-6 overflow-hidden text-white bg-primary bg-opacity-90 rounded-sm border shadow-default border-stroke mb-5 p-5 flex justify-between dark:border-strokedark dark:bg-boxdark dark:text-white">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          !isTransitioning && 'transition-none'
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={() => {
          if (currentIndex === announcements.length) {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }
        }}
      >
        {announcements.concat(announcements[0]).map((announcement, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center min-h-50"
          >
            <p className="text-center px-4">{announcement.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSlider;
