import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { updateQty, removeItem, clearCart } from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const items = useSelector((s: RootState) => s.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty. <Link to="/">Browse items</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-4 border rounded p-3">
              <div className="w-20 h-20 bg-gray-100" />
              <div className="flex-1">
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-gray-600">₹{it.price}</div>
              </div>
              <div>
                <input
                  type="number"
                  min={1}
                  value={it.qty}
                  onChange={(e) => dispatch(updateQty({ id: it.id, qty: Number(e.target.value) }))}
                  className="w-16 border rounded px-2 py-1"
                />
              </div>
              <button onClick={() => dispatch(removeItem(it.id))} className="text-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <div className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</div>
            <div className="mt-3">
              <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded">
                Proceed to Checkout
              </Link>
              <button onClick={() => dispatch(clearCart())} className="ml-3 text-sm text-gray-600">
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
