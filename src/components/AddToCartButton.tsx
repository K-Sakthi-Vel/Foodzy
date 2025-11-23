import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import type { CartItem } from '../store/slices/cartSlice';
import Cart from '../assets/add-cart.png'
type Props = { item: CartItem };

export default function AddToCartButton({ item }: Props) {
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addItem(item));
    alert('Added to cart');
  };
  return (
    <button
      onClick={onAdd}
      className="flex items-center justify-center gap-2 w-[84.91px] h-[36px] bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer  text-white rounded-[4px] text-sm"
    >
      <img src={Cart} alt='cart' className='h-[14px] w-[14px]'/> Add
    </button>
  );
}
