import React from 'react';

import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between border-black bg-orange-100 p-3 uppercase">
      <div className="flex items-center">
        <ul className="flex flex-wrap text-sm">
          <li className="mr-6">
            <button type="button">Menu</button>
          </li>
          <li className="mr-6">
            <Link href="/">
              <a>logo</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <ul className="flex flex-wrap text-sm">
          <li className="mr-6">
            <Link href="/products/">
              <a className="border-none text-gray-700 hover:text-gray-900">
                Galeria
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/sesionInit/">
              <a className="border-none text-gray-700 hover:text-gray-900">
                iniciar sesión
              </a>
            </Link>
          </li>

          <li className="mr-6">cesta</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
