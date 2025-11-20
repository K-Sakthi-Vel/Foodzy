import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Link } from 'react-router-dom';
import { UserIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // New imports
import Logo from '../../assets/logo.png'
export default function TopHeader() {
  const count = useSelector((s: RootState) => s.cart.items.length);

  return (
    <div className="bg-white h-[86px] w-full flex items-center justify-center header-bottom-border">
      <div className="container w-[1296px] mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Placeholder for Logo Image */}
            <img className='h-[82px] w-[82px]' src={Logo} alt='logo'/>
            <div>
              <h2 className='text-2xl font-extrabold text-black'>Foodzy</h2>
<span className="text-gray-500 font-normal">A Treasure of Tastes</span>
            </div>
            
          </div>

        {/* Search Bar Section */}
        <div className="flex items-stretch w-[600px] border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search For Items..."
            className="px-4 py-[10px] text-gray-800 placeholder-gray-400 bg-white focus:outline-none flex-grow border-y-0 border-l-0"
          />
          <select className="px-4 py-[10px] bg-white text-gray-800 border-x border-gray-300 focus:outline-none text-sm">
            <option>All Categories</option>
            {/* Add more categories here */}
          </select>
          <button className="bg-red-500 text-white px-4 py-[10px] flex items-center justify-center">
            <MagnifyingGlassIcon className="w-5 h-5 mr-1" />
            
          </button>
        </div>

        {/* Account, Wishlist, Cart Icons/Links */}
        <div className="flex items-center space-x-6 text-[#000000]">
          <Link to="/account" className="flex flex items-center hover:text-gray-900">
            <UserIcon className="w-5 h-5 mr-1" /> {/* Heroicon */}
            <span className="text-[15px]"  style={{fontFamily:'Poppins'}}>Account</span>
          </Link>
          <Link to="/wishlist" className="flex flex items-center hover:text-gray-900">
            <HeartIcon className="w-5 h-5 mr-1" /> {/* Heroicon */}
            <span className="text-[15px]"  style={{fontFamily:'Poppins'}}>Wishlist</span>
          </Link>
          <Link to="/cart" className="flex flex items-center relative hover:text-gray-900">
            <ShoppingCartIcon className="w-5 h-5 mr-1" /> {/* Heroicon */}
            <span className="text-[15px]" style={{fontFamily:'Poppins'}}>Cart</span>
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
