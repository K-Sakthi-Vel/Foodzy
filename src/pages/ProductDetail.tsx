import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';

type Product = { id: string; title: string; price: number; description?: string; image?: string };

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // dev: replace with API call GET /products/:id
    setProduct({
      id: id ?? '1',
      title: 'Sample Dish ' + id,
      price: 199,
      description: 'Tasty and fresh.'
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-100 rounded flex items-center justify-center">Image</div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <div className="text-xl font-bold mb-4">₹{product.price.toFixed(2)}</div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <AddToCartButton item={{ id: product.id, name: product.title, price: product.price, qty: 1 }} />
        </div>
      </div>
    </div>
  );
}
