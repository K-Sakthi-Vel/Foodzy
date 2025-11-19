// file: src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

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
      <h1 className="text-2xl font-semibold mb-6">Featured dishes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
}
