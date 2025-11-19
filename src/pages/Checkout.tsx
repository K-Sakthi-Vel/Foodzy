import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function CheckoutPage() {
  const items = useSelector((s: RootState) => s.cart.items);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const placeOrder = async () => {
    // placeholder: call backend POST /orders
    alert('Order placed (demo). Total ₹' + total.toFixed(2));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Delivery address"
          className="w-full border px-3 py-2 rounded"
        />
        <div className="text-right font-semibold">Total: ₹{total.toFixed(2)}</div>
        <button onClick={placeOrder} className="w-full bg-blue-600 text-white py-2 rounded">
          Place Order
        </button>
      </div>
    </div>
  );
}
