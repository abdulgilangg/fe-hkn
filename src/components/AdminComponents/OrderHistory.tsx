import { useState } from 'react';
import { orderHistory } from '../../types/package';

const OrderHistory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortItems, setSortItems] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const Data: orderHistory[] = [
    {
      id: 1,
      tanggal: '13 Sep 24',
      noOrder: 'SO.2023.09',
      jumlah: 23000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Menunggu',
      statusKirim: 'On Process',
    },
    {
      id: 2,
      tanggal: '13 Sep 24',
      noOrder: 'SO.2023.09',
      jumlah: 23000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Menunggu',
      statusKirim: 'On Process',
    },
    {
      id: 3,
      tanggal: '13 Jun 24',
      noOrder: 'SO.2023.06',
      jumlah: 3500000,
      jenisPayment: 'COD',
      statusPayment: 'DP Lunas',
      statusKirim: 'Delivered',
    },
    {
      id: 4,
      tanggal: '23 Apr 23',
      noOrder: 'SO.2023.04',
      jumlah: 19000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'DP Lunas',
      statusKirim: 'Delivered',
    },
    {
      id: 5,
      tanggal: '23 Apr 23',
      noOrder: 'SO.2023.04',
      jumlah: 19000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Lunas',
      statusKirim: 'Delivered',
    },
    {
      id: 6,
      tanggal: '23 Apr 23',
      noOrder: 'SO.2023.04',
      jumlah: 19000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Lunas',
      statusKirim: 'Delivered',
    },
    {
      id: 7,
      tanggal: '23 Apr 23',
      noOrder: 'SO.2023.04',
      jumlah: 19000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Dibatalkan',
      statusKirim: 'Cancel',
    },
    {
      id: 8,
      tanggal: '23 Apr 23',
      noOrder: 'SO.2023.04',
      jumlah: 19000000,
      jenisPayment: 'DP 30%',
      statusPayment: 'Dibatalkan',
      statusKirim: 'Cancel',
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

  // Fungsi untuk mengurutkan data berdasarkan column yang dipilih sortBy dan urutan sortItems
  const sortedData = [...Data].sort((a, b) => {
    if (sortItems === 'asc') {
      return a[sortBy as keyof orderHistory] > b[sortBy as keyof orderHistory]
        ? 1
        : -1;
    } else {
      return a[sortBy as keyof orderHistory] < b[sortBy as keyof orderHistory]
        ? 1
        : -1;
    }
  });

  // Fungsi untuk memfilter items berdasarkan name yang sesuai dengan kata kunci pencarian
  const filteredItems = sortedData.filter((Data) =>
    Data.tanggal.toLowerCase().includes(search.toLowerCase()),
  );

  // FUngsi untuk menghitung data untuk pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredItems.slice(
    indexOfFirstEntry,
    indexOfLastEntry,
  );
  const totalPages = Math.ceil(filteredItems.length / entriesPerPage);

  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
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
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 py-6 md:px-6 xl:px-7.5">
          <h1 className="text-4xl text-center font-sm text-black dark:text-white">
            ORDER HISTORY
          </h1>
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
                      key={item.tanggal}
                      onClick={() => handleItemClick(item.tanggal)}
                      className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                    >
                      {item.tanggal}
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
                    <span>
                      Tidak ada data yang ditemukan. Silakan coba kata kunci
                      lain.
                    </span>
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
                  onClick={() => handleSort('tanggal')}
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="cursor-pointer"
                >
                  <div className="grid grid-cols-6 border-stroke bg-gray-2 px-4 py-4.5 dark:border-strokedark dark:bg-meta-4 sm:grid-cols-6 md:px-6 2xl:px-7.5">
                    <div className="col-span-1 flex items-center justify-center">
                      <p className="font-medium">Tanggal</p>
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
                      <p className="font-medium">No. Order</p>
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
                      <p className="font-medium">Jumlah</p>
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
                      <p className="font-medium">Jenis Payment</p>
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
                      <p className="font-medium">Status Payment</p>
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
                      <p className="font-medium">Status Kirim</p>
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

        {currentEntries.map((OrderHistory, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1 flex items-center justify-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {OrderHistory.tanggal}
                </p>
              </div>
            </div>
            <div className="col-span-1 hidden items-center justify-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {OrderHistory.noOrder}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-sm text-black dark:text-white">
                {OrderHistory.jumlah.toLocaleString('id-ID')}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-sm text-black dark:text-white">
                {OrderHistory.jenisPayment}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-sm text-black dark:text-white">
                {OrderHistory.statusPayment}
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p
                className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                  OrderHistory.statusKirim === 'Delivered'
                    ? 'bg-success text-success'
                    : OrderHistory.statusKirim === 'Cancel'
                    ? 'bg-danger text-danger'
                    : 'bg-warning text-warning'
                }`}
              >
                {OrderHistory.statusKirim}
              </p>
            </div>
          </div>
        ))}

        <div className="flex justify-between border-t border-stroke px-8 py-4 pt-5 dark:border-strokedark">
          <p className="font-medium">
            Showing {currentPage} 0f {totalPages} pages
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
    </>
  );
};

export default OrderHistory;
