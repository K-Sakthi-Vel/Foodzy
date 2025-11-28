import React from 'react';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeItemFromWishlist } from '../store/slices/wishlistSlice';
import { addItem } from '../store/slices/cartSlice';
import { FaHeart } from 'react-icons/fa';

import apple from '../assets/products/apple.png';
import coconut from '../assets/products/coconutFlakes.jpg';
import coffee from '../assets/products/coffee.jpg';
import latte from '../assets/products/latte.jpg';
import lemon from '../assets/products/lemon.png';
import macadamia from '../assets/products/macadamia.png';
import moisturer from '../assets/products/moisturer.jpg';
import peanut from '../assets/products/peanutButter.jpg';
import pistachio from '../assets/products/pistachio.jpg';
import watermelon from '../assets/products/watermelon.png';
import dotd1 from '../assets/products/dotd1.png';
import dotd2 from '../assets/products/dotd2.png';
import dotd3 from '../assets/products/dotd3.png';
import dotd4 from '../assets/products/dotd4.png';

const imageMap: { [key: string]: string } = {
  'apple.png': apple,
  'coconutFlakes.jpg': coconut,
  'coffee.jpg': coffee,
  'latte.jpg': latte,
  'lemon.png': lemon,
  'macadamia.png': macadamia,
  'moisturer.jpg': moisturer,
  'peanutButter.jpg': peanut,
  'pistachio.jpg': pistachio,
  'watermelon.png': watermelon,
  'dotd1.png': dotd1,
  'dotd2.png': dotd2,
  'dotd3.png': dotd3,
  'dotd4.png': dotd4,
};

const Wishlist: React.FC = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeItemFromWishlist(id));
  };

  const handleAddToCart = (item: any) => {
    dispatch(addItem({ ...item, qty: 1 }));
    dispatch(removeItemFromWishlist(item.id));
  };

  return (
      <div className="flex flex-col items-center mx-auto w-full">

        <div className="w-full max-w-[1310px] mt-8 lg:mt-20 px-4">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FaHeart className="text-gray-400 text-6xl mb-4" />
              <p className="text-center text-gray-600 text-xl font-semibold">Your wishlist is empty.</p>
              <p className="text-center text-gray-500 mt-2">Add items you love to your wishlist to see them here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center">
                  <img
                    src={imageMap[item.image.split('/').pop().replace(/-\w+(\.\w+)$/i, '$1')]}
                    alt={item.name}
                    className="w-40 h-40 object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-700 text-xl font-bold mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  );
};

export default Wishlist;
