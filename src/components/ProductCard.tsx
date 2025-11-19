// file: src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem } from './..//store/slices/cartSlice';
import AddToCartButton from './AddToCartButton';

type Props = {
  id: string;
  title: string;
  price: number;
  image?: string;
};

export default function ProductCard({ id, title, price, image }: Props) {
  return (
    <div className="border rounded-md p-3 flex flex-col">
      <Link to={`/product/${id}`} className="block mb-3">
        <div className="h-40 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="object-cover h-full w-full" />
          ) : (
            <div className="text-gray-400">No image</div>
          )}
        </div>
      </Link>
      <div className="flex-1">
        <h3 className="text-sm font-medium mb-2">{title}</h3>
        <div className="text-lg font-semibold">₹{price.toFixed(2)}</div>
      </div>
      <div className="mt-3">
        <AddToCartButton item={{ id, name: title, price, qty: 1, image }} />
      </div>
    </div>
  );
}
