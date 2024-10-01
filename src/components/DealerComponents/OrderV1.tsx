import React, { useState } from 'react';
import { dataBarang } from '../../types/package';
import { TriangleAlert } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

const DataBarang: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const Data: dataBarang[] = [
    {
      id: 1,
      kode: '1574577',
      name: 'ILFORD HP5 PLUS 135 36',
      qty: 100,
      harga: 140000,
      diskon: 2100000,
    },
    {
      id: 2,
      kode: '6014826',
      name: 'KENTMERE 400 120',
      qty: 50,
      harga: 100000,
      diskon: 450000,
    },
    {
      id: 3,
      kode: '1155055',
      name: 'ILFOTEC DD-X DEV 1LT',
      qty: 5,
      harga: 700000,
      diskon: 525000,
    },
    {
      id: 4,
      kode: 'PTP115',
      name: 'Universal Two Tank Reels',
      qty: 3,
      harga: 575000,
      diskon: 258750,
    },
  ];

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Status Order
  const orderStatus = 'Delivered';
  // Nomor No. Order acak
  // const orderNumber = `#${Math.floor(Math.random() * 1000000)}`;

  // Fungsi untuk memfilter item berdasarkan nama yang sesuai dengan kata kunci pencarian
  const filteredItems = Data.filter((Data) =>
    Data.name.toLowerCase().includes(search.toLowerCase()),
  );

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

  // Fungsi untuk menghitung total harga dari semua item di dalam array Data
  const calculateTotalHarga = () => {
    return filteredItems.reduce(
      (total, item) => total + item.qty * item.harga,
      0,
    );
  };

  // Fungsi untuk menghitung total diskon dari semua item di dalam array Data
  const calculateTotalDiskon = () => {
    return filteredItems.reduce((total, item) => total + item.diskon, 0);
  };

  // Fungsi untuk menghitung Pajak Pertambahan Nilai (PPN) berdasarkan total harga dan total diskon
  const calculatePPN = (hargaTotal: number, totalDiskon: number) => {
    if (hargaTotal < 0 || totalDiskon < 0) {
      throw new Error(
        'hargaTotal dan totalDiskon harus lebih besar atau sama dengan nol',
      );
    }
    if (totalDiskon > hargaTotal) {
      throw new Error('totalDiskon tidak boleh lebih besar dari hargaTotal');
    }
    const ppnPercentage = 0;
    return (hargaTotal - totalDiskon) * ppnPercentage;
  };

  // Fungsi untuk menghitung total pembayaran setelah dikurangi diskon dan ditambah PPN
  const calculateTotalBayar = () => {
    return calculateTotalHarga() - calculateTotalDiskon() + ppn;
  };

  // Memanggil fungsi untuk menghitung hargaTotal, totalDiskon, ppn, dan totalBayar
  const hargaTotal = calculateTotalHarga();
  const totalDiskon = calculateTotalDiskon();
  const ppn = calculatePPN(hargaTotal, totalDiskon);
  const totalBayar = calculateTotalBayar();

  return (
    <div>
      <div className="bg-gray-200 flex justify-between rounded-lg p-4 text-white">
        <div className="bg-gray-800 text-gray-300 relative inline-flex items-center rounded-lg px-4 py-2">
          {/* Icon */}
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
            className="lucide lucide-calendar"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>

          {/* Date Range Picker */}
          <DatePicker
            selected={startDate}
            onChange={(dates: [Date | null, Date | null]) => {
              const [start, end] = dates;
              setStartDate(start || undefined); // Ubah null menjadi undefined
              setEndDate(end || undefined); // Ubah null menjadi undefined
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            locale={enUS} // Gunakan locale enUS
            dateFormat="MMM d, yyyy"
            className="text-gray-300 bg-transparent outline-none"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-400 text-gray-500 mt-2 rounded-lg bg-slate-400 px-6 py-2">
            {orderStatus}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-400 text-gray-500 mt-2 rounded-lg bg-slate-400 px-6 py-2">
            KKKK&&&
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark">
        <div className="mb-5 flex items-center justify-between">
          <div className="relative flex w-1/4 items-center">
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
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              className="w-full rounded-md border border-stroke px-5 py-2.5 pl-10 pr-4 outline-none focus:border-primary focus:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
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
                    <TriangleAlert className="mr-2 text-yellow-400" />
                    <span>Maaf data barang tidak ditemukan</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left text-black dark:bg-meta-4 dark:text-white">
                <th className="px-4 py-4 font-medium">Kode</th>
                <th className="px-4 py-4 font-medium">Nama</th>
                <th className="px-4 py-4 font-medium">Qty</th>
                <th className="px-4 py-4 font-medium">Harga</th>
                <th className="px-4 py-4 font-medium">Diskon</th>
                <th className="px-4 py-4 font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.kode}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {item.kode}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {item.name}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {item.qty}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {item.harga.toLocaleString()}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {item.diskon.toLocaleString()}
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    {(item.harga * item.qty).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col items-end">
          <div className="flex w-1/4 justify-between">
            <span className="font-medium">Harga Total:</span>
            <span>{hargaTotal.toLocaleString()}</span>
          </div>
          <div className="flex w-1/4 justify-between">
            <span className="font-medium">Diskon:</span>
            <span>{totalDiskon.toLocaleString()}</span>
          </div>
          <div className="flex w-1/4 justify-between">
            <span className="font-medium">PPN:</span>
            <span>{ppn.toLocaleString()}</span>
          </div>
          <div className="flex w-1/4 justify-between">
            <span className="font-medium">Total Bayar:</span>
            <span>{totalBayar.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBarang;
