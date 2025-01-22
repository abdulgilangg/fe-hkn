import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../Utilities/ClickOutside';
import { Cart } from '../../types/package';

const DropdownCart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(false);
  const [cart] = useState<Cart[]>([]);

  const [data] = useState<Cart[]>([
    {
      id: 1,
      name: 'ILFORD HP5 PLUS 135 36 | HP5',
      qty: 2,
      price: 50000,
      imgUrl: '/images/tes.jpg',
    },
  ]);

  const calculateTotal = () =>
    data.reduce((acc, item) => acc + item.price * item.qty, 0);

  useEffect(() => {
    setNotifying(data.length > 0);
  }, [data]);

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_APP_PUBLIC_API_URL}/`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );
  //     const data = await response.json();
  //     setCart(data);
  //   };

  //   const intervalId = setInterval(fetchNotifications, 3000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
        <li className="relative">
          <Link
            onClick={() => {
              setNotifying(false);
              setDropdownOpen(!dropdownOpen);
            }}
            className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
            to="#"
          >
            <span
              className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
                notifying ? 'inline' : 'hidden'
              }`}
            >
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>

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
              className="lucide lucide-shopping-basket"
            >
              <path d="m15 11-1 9" />
              <path d="m19 11-4-7" />
              <path d="M2 11h20" />
              <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
              <path d="M4.5 15.5h15" />
              <path d="m5 11 4-7" />
              <path d="m9 11 1 9" />
            </svg>
          </Link>

          {/* Dropdown Start */}
          {dropdownOpen && (
            <div className="absolute -right-28 mt-3 w-72 rounded-lg border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark sm:right-0">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-strokedark">
                <h5 className="text-sm font-medium text-bodydark2">Cart</h5>
              </div>
              <ul className="max-h-64 overflow-y-auto px-4 cursor-pointer">
                {data.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center py-3 border-b border-gray-200 dark:border-strokedark"
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-12 h-12 mr-3 rounded-md"
                    />
                    <div className="flex-1">
                      <h6 className="text-sm font-semibold text-black dark:text-white line-clamp-1">
                        {item.name}
                      </h6>
                      {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                        Qty: {item.qty}
                      </p> */}
                      <p className="text-sm text-black dark:text-white">
                        Rp {(item.price * item.qty).toLocaleString('id-ID')}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className="px-4 py-3 border-t border-gray-200 dark:border-strokedark">
                <div className="flex justify-between text-sm font-semibold text-gray-800 dark:text-white">
                  <span>Total:</span>
                  <span>Rp {calculateTotal().toLocaleString('id-ID')}</span>
                </div>
              </div> */}
              <div className="flex items-center rounded-lg m-2 justify-center bg-primary py-3 text-sm font-medium text-white hover:bg-primary-dark">
                <Link to="dealer/cart" className="">
                  Show Shopping Cart
                </Link>
                {/* <Link
                  to="/checkout"
                  className="flex-1 py-2 text-center text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
                >
                  Checkout
                </Link> */}
              </div>
            </div>
          )}
          {/* Dropdown End */}
        </li>
      </ClickOutside>
    </>
  );
};
export default DropdownCart;
