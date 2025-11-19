import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import type { CartItem } from '../store/slices/cartSlice';

type Props = { item: CartItem };

export default function AddToCartButton({ item }: Props) {
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addItem(item));
    alert('Added to cart'); // replace with toast later
  };
  return (
    <button
      onClick={onAdd}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      Add to cart
    </button>
  );
}
