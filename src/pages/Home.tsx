// file: src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import PromotionalBanners from '../components/PromotionalBanners';

type Product = { id: string; title: string; price: number; image?: string };

export default function Home() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    // dev: replace with real API call to backend /products
    const seed: Product[] = [
      { id: '1', title: 'Paneer Butter Masala', price: 249, image: '' },
      { id: '2', title: 'Veg Biryani', price: 199, image: '' },
      { id: '3', title: 'Chicken Curry', price: 299, image: '' },
      { id: '4', title: 'Masala Dosa', price: 99, image: '' }
    ];
    setItems(seed);
  }, []);

  return (
    <div>
      <Hero />
      <PromotionalBanners/>
    </div>
  );
}
