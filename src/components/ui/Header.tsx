import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export default function Header() {
  const count = useSelector((s: RootState) => s.cart.items.length);
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          EcomDemo
        </Link>
        <nav className="space-x-4">
          <Link to="/orders" className="text-sm">
            Orders
          </Link>
          <Link to="/account" className="text-sm">
            Account
          </Link>
          <Link to="/cart" className="text-sm font-medium">
            Cart ({count})
          </Link>
        </nav>
      </div>
    </header>
  );
}
