import React from 'react';
import Layout from '../components/Layout';

const Account: React.FC = () => {
  return (
      <div className="w-full bg-white min-h-screen">
                <div className="flex items-center justify-center bg-[#F53E32] h-[70px] w-full">
                  <div className="flex justify-between items-center w-full max-w-[1310px] px-4" style={{ fontFamily: 'Poppins' }}>
                    <p className="text-[19px] text-[#FFFFFF]">Wishlist</p>
                    <p className="text-[14px] text-[#FFFFFF]">Home - Wishlist</p>
                  </div>
                </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-20">
          {/* Left Column: User Profile and Account Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-6 text-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 mx-auto mb-3 flex items-center justify-center overflow-hidden">
                {/* Placeholder for user profile picture */}
                <span className="text-gray-500 text-4xl font-semibold">KS</span> 
              </div>
              <h2 className="text-xl font-bold mb-1 text-gray-800">Sakthi Vel</h2>
              <p className="text-gray-600 text-sm mb-3">klsakthi333@gmail.com</p>
              <button className="bg-orange-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-orange-600 transition duration-300">Edit Profile</button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">Contact Details</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700 text-sm">Phone:</p>
                  <p className="text-gray-900 text-base">+91 6382860436</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 text-sm">Address:</p>
                  <p className="text-gray-900 text-base">11, Odaimedu, Anthiyur, Erode-638501</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order History, Payment Methods, Shipping Addresses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Order History</h2>
              <div className="space-y-4">
                <div className="border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <p className="font-semibold text-gray-800">Order #12345 - <span className="text-green-600">Delivered</span></p>
                  <p className="text-gray-600 text-sm">Date: 2024-10-20 | Total: $45.99</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                    <li>2x Organic Apples</li>
                    <li>1x Fresh Strawberries</li>
                  </ul>
                </div>
                <div className="border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <p className="font-semibold text-gray-800">Order #12344 - <span className="text-yellow-600">Processing</span></p>
                  <p className="text-gray-600 text-sm">Date: 2024-10-15 | Total: $22.50</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                    <li>1x Loaf of Artisan Bread</li>
                  </ul>
                </div>
                <button className="text-orange-500 hover:underline text-sm mt-2">View all orders</button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Payment Methods</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <div>
                    <p className="font-semibold text-gray-800">Visa ending in **** 1234</p>
                    <p className="text-gray-600 text-sm">Expires 12/26</p>
                  </div>
                  <button className="text-orange-500 hover:underline text-sm">Edit</button>
                </div>
                <div className="flex justify-between items-center border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <div>
                    <p className="font-semibold text-gray-800">Mastercard ending in **** 5678</p>
                    <p className="text-gray-600 text-sm">Expires 08/25</p>
                  </div>
                  <button className="text-orange-500 hover:underline text-sm">Edit</button>
                </div>
                <button className="bg-green-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-600 transition duration-300">Add New Payment Method</button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Shipping Addresses</h2>
              <div className="space-y-4">
                <div className="border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <p className="font-semibold text-gray-800">Home Address</p>
                  <p className="text-gray-700 text-sm">John Doe</p>
                  <p className="text-gray-700 text-sm">123 Foodzy Lane, Tasteville, CA 90210</p>
                  <p className="text-gray-700 text-sm">Phone: +1 123 456 7890</p>
                  <button className="text-orange-500 hover:underline text-sm mt-1">Edit</button>
                </div>
                <div className="border-b pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                  <p className="font-semibold text-gray-800">Work Address</p>
                  <p className="text-gray-700 text-sm">John Doe</p>
                  <p className="text-gray-700 text-sm">456 Business Blvd, Work City, NY 10001</p>
                  <p className="text-gray-700 text-sm">Phone: +1 098 765 4321</p>
                  <button className="text-orange-500 hover:underline text-sm mt-1">Edit</button>
                </div>
                <button className="bg-green-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-600 transition duration-300">Add New Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Account;
