import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Menu from '../../assets/menu.png'
export default function Navbar() {
  return (
    <header className="bg-white navbar-shadow h-[55px] w-full flex items-center justify-center">
      <div className="container w-[1296px] mx-auto flex items-center justify-between h-full">
        {/* Hamburger Menu Icon */}
        <div className="p-2 cursor-pointer border-2 border-gray-500 ">
          <img className='h-[15px] w-[16px]' src={Menu} alt='logo'/>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-black-700 hover:text-gray-900 text-decoration-none">
            Home
          </Link>
          <Link to="/category" className="text-gray-700 hover:text-gray-900 flex items-center">
            Category <span className="ml-1 text-md"><ChevronDownIcon  className="w-3 h-3 mr-1"/></span>
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-gray-900 flex items-center">
            Products <span className="ml-1 text-xs"><ChevronDownIcon  className="w-3 h-3 mr-1"/></span>
          </Link>
          <Link to="/pages" className="text-gray-700 hover:text-gray-900 flex items-center">
            Pages <span className="ml-1 text-xs"><ChevronDownIcon  className="w-3 h-3 mr-1"/></span>
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-gray-900 flex items-center">
            Blog <span className="ml-1 text-xs"><ChevronDownIcon  className="w-3 h-3 mr-1"/></span>
          </Link>
          <Link to="/elements" className="text-gray-700 hover:text-gray-900 flex items-center">
            Elements <span className="ml-1 text-xs"><ChevronDownIcon  className="w-3 h-3 mr-1"/></span>
          </Link>
        </nav>

        {/* Search Icon and Phone Number */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">
            <PhoneIcon  className="inline w-5 h-5 mr-1"/> +123 (456) (7890)</span> {/* Placeholder for phone icon */}
        </div>
      </div>
    </header>
  );
}
