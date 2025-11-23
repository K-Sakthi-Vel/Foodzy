import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import orderPlaceBg from '../assets/order-place-bg.jpg';

interface OrderPlacedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderPlacedModal({ isOpen, onClose }: OrderPlacedModalProps) {
  const userName = useSelector((s: RootState) => s.auth.user?.name); // Assuming user has a 'name' field

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center p-4 z-1000"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center justify-end bg-white rounded-lg p-8 shadow-lg text-center h-[500px] w-[700px] mx-auto"
        style={{
          backgroundImage: `url(${orderPlaceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white', // Ensure text is visible on image
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl">
          &times;
        </button>
        <h2 className="text-4xl font-bold text-black mb-4">Order Placed!</h2>
        {userName && <p className="text-2xl text-red-300 mb-2">Thank you for shopping, {userName}!</p>}
        {!userName && <p className="text-2xl text-gray-500 mb-2">Thank you for shopping!</p>}
        <p className="text-lg text-gray-500">Please check your email for order details.</p>
        <button
          onClick={onClose}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
