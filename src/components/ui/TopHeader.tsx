import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { UserIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // New imports
import Logo from '../../assets/logo.png'
export default function TopHeader() {
  const count = useSelector((s: RootState) => s.cart.items.length);

  return (
    <div className="bg-white h-auto md:h-[86px] w-full flex items-center justify-center header-bottom-border p-4 md:p-0">
      <div className="container w-full md:w-[1296px] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <div className="flex items-center">
              <img className='h-[60px] w-[60px] md:h-[82px] md:w-[82px]' src={Logo} alt='logo' />
              <div>
                <h2 className='text-xl md:text-2xl font-extrabold text-black'>Foodzy</h2>
                <span className="text-gray-500 font-normal text-sm md:text-base">A Treasure of Tastes</span>
              </div>
            </div>
          </Link>
          <div className="md:hidden">
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="hidden md:flex items-stretch w-full md:w-[600px] mt-4 md:mt-0 border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search For Items..."
            className="px-4 py-[10px] text-gray-800 placeholder-gray-400 bg-white focus:outline-none flex-grow border-y-0 border-l-0"
          />
          <div className="relative">
            <select
              className="
                px-4 py-[12px] bg-white text-gray-800 border-x border-gray-300 
                focus:outline-none text-[13px] w-full 
                pr-8
                appearance-none"
            >
              <option>All Categories</option>
              {/* Add more categories here */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                className="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-[10px] flex items-center justify-center">
            <MagnifyingGlassIcon className="w-5 h-5 mr-1" />
          </button>
        </div>

        {/* Account, Wishlist, Cart Icons/Links */}
        <div className="flex items-center space-x-4 md:space-x-6 text-[#000000] mt-4 md:mt-0">
          <Link to="/" className="flex items-center hover:text-gray-900">
            <UserIcon className="w-5 h-5 md:mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Account</span>
          </Link>
          <Link to="/" className="flex items-center hover:text-gray-900">
            <HeartIcon className="w-5 h-5 md:mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Wishlist</span>
          </Link>
          <Link to="/cart" className="flex items-center relative hover:text-gray-900">
            <ShoppingCartIcon className="w-5 h-5 md:mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Cart</span>
            {count > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

