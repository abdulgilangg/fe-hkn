import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full p-3 bg-white drop-shadow-lg dark:bg-boxdark">
      <strong className="text-gray-500 dark:text-white">
        Copyright © 2024{' '}
        <a
          href="https://www.sumapala.co.id"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          PT. Sumapala Integrasi Solusi.
        </a>{' '}
        All rights reserved.
      </strong>
    </footer>
  );
};

export default Footer;
