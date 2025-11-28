import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Added XMarkIcon for close button
import Dropdown from './Dropdown';
import Menu from '../../assets/menu.png'
export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header
      className="bg-white h-[55px] w-full flex items-center justify-center
             shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-0 z-[899]" // Increased z-index to ensure menu is on top
    >
      <div className="container w-full md:max-w-7xl mx-auto flex items-center justify-between h-full px-4 md:px-0">
        {/* Hamburger Menu Icon */}
        <div className="p-2 cursor-pointer border-2 border-gray-300 rounded md:ml-5 lg:hidden" onClick={toggleMobileMenu}>
          {showMobileMenu ? (
            <XMarkIcon className="h-4 w-4 text-gray-700" />
          ) : (
            <img className='h-[15px] w-[16px]' src={Menu} alt='menu' />
          )}
        </div>

        {/* Mobile Sliding Menu (visible on small/medium screens) */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999] lg:hidden ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <XMarkIcon className="h-6 w-6 cursor-pointer text-gray-700" onClick={toggleMobileMenu} />
          </div>
          <nav className="flex flex-col gap-5 p-4 text-sm font-medium">
            <Link to="/" className="text-gray-700 hover:text-gray-900 py-2" onClick={toggleMobileMenu}>
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
        </div>

        {/* Desktop Navigation Links (visible on large screens) */}
        <nav className="hidden lg:flex space-x-6 ml-5 text-sm font-medium">
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

        {/* Phone Number */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700 font-medium">
            <PhoneIcon className="inline w-5 h-5 mr-1" /> +123 (456) (7890)</span>
        </div>

        <div className="lg:hidden md:block">
        </div>
      </div>
    </header>
  );
}
