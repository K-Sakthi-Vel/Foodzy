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
    <section className="w-full container mx-auto pt-12 pb-12 px-4">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-[32px] font-bold text-black text-center md:text-left" style={{ fontFamily: 'Quicksand' }}>
            Popular Products
          </h2>
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-0 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md font-semibold text-sm md:text-[16px] cursor-pointer ${
                  activeCategory === category
                    ? 'text-green-700'
                    : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Quicksand' }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
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
