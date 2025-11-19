import { useState } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(products.map((p) => p.type))];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.type === activeCategory);

  return (
    <section className="flex justify-center w-screen mx-auto pt-12 pb-12">
      <div className='w-[1610px]'>


      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[32px] font-bold text-black" style={{fontFamily:'Quicksand'}}>Popular Products</h2>
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-semibold text-[16px] ${
                activeCategory === category
                  ? 'text-green-700'
                  : 'text-gray-600'
              }`}
              style={{fontFamily:'Quicksand'}}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={String(product.id)}
            title={product.name}
            price={product.discountedPrice}
            image={`/src/assets/products/${product.image}`}
            type={product.type}
            rating={product.rating}
            seller={product.seller}
            originalPrice={product.originalPrice}
            tag={product.tag}
          />
        ))}
      </div>
            </div>
    </section>
  );
};

export default PopularProducts;
