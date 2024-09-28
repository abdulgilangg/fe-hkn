'use client';

import React, { useState } from 'react';
import { menuBarang } from '../../types/package';

const DataBarang: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortItems, setSortItems] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const Data: menuBarang[] = [
    {
      id: 1,
      image: '/../images/tes.jpg',
      name: 'TES1',
      kategori: 'TES1',
      kode: 'sdsd',
      qty: 1,
    },
    {
      id: 2,
      image: '/../images/tes.jpg',
      name: 'TES2',
      kategori: 'TES2',
      kode: 'dsdsd',
      qty: 1,
    },
    {
      id: 3,
      image: '/../images/tes.jpg',
      name: 'TES3',
      kategori: 'TES3',
      kode: 'sdsd1w2',
      qty: 1,
    },
    {
      id: 4,
      image: '/../images/tes.jpg',
      name: 'TES4',
      kategori: 'TES4',
      kode: '12345f',
      qty: 1,
    },
    {
      id: 5,
      image: '/../images/tes.jpg',
      name: 'TES5',
      kategori: 'TES5',
      kode: '1234567',
      qty: 1,
    },
    {
      id: 6,
      image: '/../images/tes.jpg',
      name: 'TES6',
      kategori: 'TES6',
      kode: '12dfdf67',
      qty: 1,
    },
    {
      id: 7,
      image: '/../images/tes.jpg',
      name: 'TES7',
      kategori: 'TES7',
      kode: '12dfdf67',
      qty: 1,
    },
    {
      id: 8,
      image: '/../images/tes.jpg',
      name: 'TES8',
      kategori: 'TES8',
      kode: '12dfdf67',
      qty: 1,
    },
    {
      id: 9,
      image: '/../images/tes.jpg',
      name: 'TES9',
      kategori: 'TES9',
      kode: '12dfdf67',
      qty: 1,
    },
    {
      id: 10,
      image: '/../images/tes.jpg',
      name: 'TES10',
      kategori: 'TES10',
      kode: '12dfdf67',
      qty: 1,
    },
  ];

  // Fungsi untuk toggle sortBy column
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortItems(sortItems === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortItems('asc');
    }
  };

  // Mengurutkan data berdasarkan kolom yang dipilih sortBy dan urutan sortItems
  const sortedData = [...Data].sort((a, b) => {
    if (sortItems === 'asc') {
      return a[sortBy as keyof menuBarang] > b[sortBy as keyof menuBarang]
        ? 1
        : -1;
    } else {
      return a[sortBy as keyof menuBarang] < b[sortBy as keyof menuBarang]
        ? 1
        : -1;
    }
  });

  // Fungsi untuk memfilter items berdasarkan name yang sesuai dengan kata kunci pencarian
  const filteredItems = sortedData.filter((Data) =>
    Data.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Menghitung data untuk pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredItems.slice(
    indexOfFirstEntry,
    indexOfLastEntry,
  );
  const totalPages = Math.ceil(filteredItems.length / entriesPerPage);

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value)); // Update jumlah entries per page
    setCurrentPage(1); // Reset ke halaman pertama
  };

  // Fungsi untuk menangani perubahan input pencarian search bar
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setIsDropdownOpen(value.length > 0);
  };

  // Fungsi untuk menangani klik pada item dalam dropdown pencarian
  const handleItemClick = (itemName: string) => {
    setSearch(itemName);
    setIsDropdownOpen(false);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Menu Barang
        </h4>
      </div>
      <div className="flex justify-between border-stroke px-8 pb-4 dark:border-strokedark">
        <div className="relative flex w-100 items-center">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
            <svg
              className="fill-body dark:fill-bodydark"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
          </div>
          <input
            className="w-full rounded-md border border-stroke px-5 py-2.5 pl-10 pr-4 outline-none focus:border-primary focus:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-y-auto rounded-md border bg-white shadow-lg">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div
                    key={item.kode}
                    onClick={() => handleItemClick(item.name)}
                    className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 flex rounded px-2 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-triangle-alert mr-2 text-yellow-400"
                  >
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                  <span>Maaf data barang yang anda cari tidak tersedia</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center font-medium">
          <select
            className="bg-transparent pl-2"
            value={entriesPerPage}
            onChange={handleEntriesChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>
      </div>

      {Data.length > 0 ? (
        <table className="w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8">
          <thead>
            <tr role="row">
              <th
                onClick={() => handleSort('name')}
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="cursor-pointer"
              >
                <div className="grid grid-cols-5 border-t border-stroke bg-gray-2 px-4 py-4.5 dark:border-strokedark dark:bg-meta-4 sm:grid-cols-5 md:px-5 2xl:px-7.5">
                  <div className="col-span-1 flex items-center justify-center">
                    <p className="font-medium">Gambar Product</p>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 hidden items-center justify-center sm:flex">
                    <p className="font-medium">Nama Barang</p>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 hidden items-center justify-center sm:flex">
                    <p className="font-medium">Kategori Barang</p>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <p className="font-medium">Kode Barang</p>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center justify-center">
                    <p className="font-medium">QTY</p>
                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill=""></path>
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      ) : (
        <div className="py-4 text-center">No data available in table.</div>
      )}

      {currentEntries.map((product, key) => (
        <div
          className="grid grid-cols-5 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-5 md:px-5 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 hidden items-center justify-center sm:flex">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <img
                src={product.image}
                width={60}
                height={50}
                alt="Photo"
                className="h-12.5 w-15 rounded-md"
              />
            </div>
          </div>
          <div className="col-span-1 hidden items-center justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">{product.name}</p>
          </div>
          <div className="col-span-1 hidden items-center justify-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.kategori}
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">{product.kode}</p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <p className="text-sm text-black dark:text-white">{product.qty}</p>
          </div>
        </div>
      ))}

      <div className="flex justify-between border-t border-stroke px-8 py-4 pt-5 dark:border-strokedark">
        <p className="font-medium">
          Showing {currentPage} of {totalPages} pages
        </p>
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-whiter"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              ></path>
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 ${
                currentPage === index + 1
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary hover:text-white'
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DataBarang;
