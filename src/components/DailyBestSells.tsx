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
    <section className="flex justify-center w-screen mx-auto pt-12 pb-12">
      <div className="w-[1610px] h-[623.77px] relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
            Daily Best Sells
          </h2>
          <div className="flex gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md font-semibold text-[16px] cursor-pointer ${
                  activeFilter === filter
                    ? 'text-green-700'
                    : 'text-gray-600'
                }`}
                style={{ fontFamily: 'Quicksand' }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-x-8">
          <div className="w-[378.5px] h-[520px] rounded-[15px] overflow-hidden">
            <div className='absolute h-[300px]'>
                    <div className='absolute top-[49px] left-[50px] h-[270px] w-[250px] leading-[50px]'>
                        <h2
                            className='text-white text-[40px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Bring nature <br /> into your <br/> home
                        </h2>
                        <button className='absolute bottom-0 flex items-center gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-[12px] font-bold'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' /></button>
                    </div>
                </div>
            <img src={banner} alt="Daily Best Sells Banner" className="w-full h-full object-cover" />
          </div>

          <div className="w-[1207.5px] relative">
            <div 
              ref={scrollContainer}
              className="flex h-[520px] gap-6 overflow-x-auto scrollbar-hide"
            >
              {filteredProducts().map((product) => (
                <div key={product.id} className="flex-shrink-0">
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
                    cardHeight="h-[520px]"
                    fullWidthButton={true}
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={() => scroll('left')} 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition z-10"
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
