import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../Utilities/ClickOutside';

const DropdownCart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

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
                notifying === false ? 'hidden' : 'inline'
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

          {/* <!-- Dropdown Start --> */}
          {dropdownOpen && (
            <div
              className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
            >
              <div className="px-4.5 py-3">
                <h5 className="text-sm font-medium text-bodydark2">Cart</h5>
              </div>

              <ul className="flex h-auto flex-col overflow-y-auto">
                <li>
                  <Link
                    className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                    to="/cart"
                  ></Link>
                </li>
              </ul>
            </div>
          )}
          {/* <!-- Dropdown End --> */}
        </li>
      </ClickOutside>
    </>
  );
};

export default DropdownCart;
