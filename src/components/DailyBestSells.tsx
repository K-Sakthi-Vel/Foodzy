import { useState, useRef } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';
import banner from '../assets/daily-best-sells-banner.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
const DailyBestSells = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');
const scrollContainer = useRef<HTMLDivElement | null>(null);

  const filterOptions = ['Featured', 'Popular', 'New added'];

  const filteredProducts = () => {
    switch (activeFilter) {
      case 'Popular':
        return products.filter((p) => p.rating >= 4.8);
      case 'New added':
        return products.filter((p) => p.tag === 'New');
      case 'Featured':
      default:
        return products;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full container mx-auto pt-12 pb-12 px-4">
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-[32px] font-bold text-black text-center md:text-left" style={{ fontFamily: 'Quicksand' }}>
            Daily Best Sells
          </h2>
          <div className="flex gap-2 md:gap-4 mt-4 md:mt-0 flex-wrap justify-center">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md font-semibold text-sm md:text-[16px] cursor-pointer ${
                  activeFilter === filter ? 'text-green-700' : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Quicksand' }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Banner */}
          <div className="w-full lg:w-[378.5px] h-[520px] rounded-[15px] overflow-hidden relative flex-shrink-0">
            <img src={banner} alt="Daily Best Sells Banner" className="w-full h-full object-cover" />
            <div className='absolute top-0 left-0 p-8 text-white w-full h-full flex flex-col justify-center'>
              <h2 className='text-3xl md:text-[40px] font-bold leading-tight' style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Bring nature <br /> into your <br /> home
              </h2>
              <button className='flex items-center gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-white text-[12px] font-bold w-max'>
                Shop Now
                <ArrowRightIcon className='h-4 w-4 font-bold' />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="w-full lg:w-[calc(100%-378.5px-2rem)] relative">
            <div
              ref={scrollContainer}
              className="flex gap-6 overflow-x-auto scrollbar-hide h-[520px]"
            >
              {filteredProducts().map((product) => (
                <div key={product.id} className="flex-shrink-0 w-[280px]">
                  <ProductCard
                    id={String(product.id)}
                    title={product.name}
                    price={product.discountedPrice}
                    image={`/src/assets/products/${product.image}`}
                    type={product.type}
                    rating={product.rating}
                    seller={product.seller}
                    originalPrice={product.originalPrice}
                    tag={product.tag}
                    showSeller={false}
                    cardHeight="h-full"
                    fullWidthButton={true}
                  />
                </div>
              ))}
            </div>
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10 hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10 hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyBestSells;
