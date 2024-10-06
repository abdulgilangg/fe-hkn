import { useState, useEffect } from 'react';

const OrderDetails = () => {
  const [date, setDate] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [noOrder, setNoOrder] = useState('');

  useEffect(() => {
    // Fetch Tanggal dari BE
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => setDate(data.date));

    // Fetch Status Order dari BE
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => setOrderStatus(data.OrderStatus));

    // Fetch No Order dari BE
    fetch('/api/')
      .then((response) => response.json())
      .then((data) => setNoOrder(data.noOrder));
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default mb-5 p-5 flex justify-between dark:border-strokedark dark:bg-boxdark dark:text-white">
      <div className="flex flex-row items-center justify-between w-full space-x-2 sm:space-x-4">
        <span className="rounded-md border border-stroke bg-white px-4 py-2 text-sm sm:text-base dark:border-strokedark dark:bg-meta-4">
          {date || 'Loading...'}
        </span>
        <span className="rounded-md border border-stroke bg-white px-4 py-2 text-sm sm:text-base dark:border-strokedark dark:bg-meta-4">
          {orderStatus || 'Loading...'}
        </span>
        <span className="rounded-md border border-stroke bg-white px-4 py-2 text-sm sm:text-base dark:border-strokedark dark:bg-meta-4">
          {noOrder || 'Loading...'}
        </span>
      </div>
    </div>
  );
};

export default OrderDetails;
