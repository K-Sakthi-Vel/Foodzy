import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '@heroicons/react/24/outline';
import Dropdown from './Dropdown';
import Menu from '../../assets/menu.png'
export default function Navbar() {
  return (
    <header
      className="bg-white h-[55px] w-full flex items-center justify-center
             shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-0 z-899"
    >
      <div className="container w-full md:w-[1296px] mx-auto flex items-center justify-between h-full px-4 md:px-0">
        {/* Hamburger Menu Icon */}
        <div className="p-2 cursor-pointer border-2 border-gray-300 rounded md:ml-5">
          <img className='h-[15px] w-[16px]' src={Menu} alt='logo' />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-10 text-sm font-medium">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Dropdown
            title="Category"
            items={[
              { name: 'Fruits & Vegetables', path: '' },
              { name: 'Breakfast & Dairy', path: '' },
              { name: 'Meat & Seafood', path: '' },
              { name: 'Breads & Bakery', path: '' },
            ]}
          />
          <Dropdown
            title="Products"
            items={[
              { name: 'Product Grid', path: '' },
              { name: 'Product List', path: '' },
              { name: 'Product Detail', path: '' },
            ]}
          />
          <Dropdown
            title="Pages"
            items={[
              { name: 'About Us', path: '' },
              { name: 'Contact Us', path: '' },
              { name: 'FAQs', path: '' },
              { name: 'Privacy Policy', path: '' },
            ]}
          />
          <Dropdown
            title="Blog"
            items={[
              { name: 'Blog Grid', path: '' },
              { name: 'Blog List', path: '' },
              { name: 'Blog Detail', path: '' },
            ]}
          />
          <Dropdown
            title="Elements"
            items={[
              { name: 'Typography', path: '' },
              { name: 'Buttons', path: '' },
              { name: 'Forms', path: '' },
            ]}
          />
        </nav>

        {/* Search Icon and Phone Number */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700 font-medium">
            <PhoneIcon className="inline w-5 h-5 mr-1" /> +123 (456) (7890)</span>
        </div>

        <div className="md:hidden">
        </div>
      </div>
    </header>
  );
}
