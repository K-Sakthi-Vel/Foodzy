import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon, HeartIcon, ShoppingCartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/logo.png';
import productsData from '../../data/products.json'; // Import product data
export default function TopHeader() {
  const navigate = useNavigate();
  const cartCount = useSelector((s: RootState) => s.cart.items.length);
  const wishlistCount = useSelector((s: RootState) => s.wishlist.items.length);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    // Extract unique categories from productsData
    const uniqueCategories = Array.from(new Set(productsData.map(product => product.type)));
    setCategories(uniqueCategories);

    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredResults = productsData.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    setSearchResults([]);
    setSearchTerm('');
  };

  return (
    <div className="bg-white h-auto py-4 w-full flex items-center justify-center header-bottom-border px-4">
      <div className="container w-full md:max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Top row for Logo and Icons on mobile, full flex-row on md+ */}
        <div className="flex items-center justify-between w-full md:w-auto md:flex-grow-0">
          {/* Logo Section */}
          <Link to="/">
            <div className="flex items-center">
              <img className='h-[60px] w-[60px] md:h-[82px] md:w-[82px]' src={Logo} alt='logo' />
              <div>
                <h2 className='text-xl md:text-2xl font-extrabold text-black'>Foodzy</h2>
                <span className="text-gray-500 font-normal text-sm md:text-base">A Treasure of Tastes</span>
              </div>
            </div>
          </Link>
          {/* Account, Wishlist, Cart Icons/Links for mobile (visible on small/medium, hidden on large) */}
          <div className="flex items-center space-x-4 text-[#000000] md:hidden">
            <Link to="/account" className="flex items-center">
              <UserIcon className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="flex items-center relative">
              <HeartIcon className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="flex items-center relative">
              <ShoppingCartIcon className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="flex flex-col w-full md:w-auto md:flex-grow mt-4 md:mt-0 md:mx-4 relative" ref={searchResultsRef}>
          <div className="flex items-stretch w-full border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search For Items..."
              className="px-4 py-[10px] text-gray-800 placeholder-gray-400 bg-white focus:outline-none flex-grow"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="relative border-l border-gray-300 hidden md:block"> {/* Hide on small, show on medium+ */}
            <select
              className="
                px-4 py-[12px] bg-white text-gray-800
                focus:outline-none text-[13px] w-full
                pr-8
                appearance-none"
              >
                <option>All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
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
            <button className="bg-red-500 cursor-pointer text-white px-4 py-[10px] flex items-center justify-center border-l border-gray-300">
              <MagnifyingGlassIcon className="w-5 h-5 mr-1" />
            </button>
          </div>
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto mt-1 hide-scrollbar">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img src={`/src/assets/products/${product.image}`} alt={product.name} className="w-8 h-8 object-cover mr-2" />
                  <span className='text-black text-sm'>{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Account, Wishlist, Cart Icons/Links for desktop (hidden on small/medium, visible on large) */}
        <div className="hidden md:flex items-center space-x-4 md:space-x-6 text-[#000000] md:flex-grow-0">
          <Link to="/account" className="flex items-center hover:text-gray-900">
            <UserIcon className="w-5 h-5 mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Account</span>
          </Link>
          <Link to="/wishlist" className="flex items-center relative hover:text-gray-900">
            <HeartIcon className="w-5 h-5 mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="flex items-center relative hover:text-gray-900">
            <ShoppingCartIcon className="w-5 h-5 mr-1" />
            <span className="hidden md:inline text-[15px]" style={{ fontFamily: 'Poppins' }}>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
