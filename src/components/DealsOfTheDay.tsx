import React from 'react';
import dealsData from '../data/dealsOfTheDay.json';
import Cart from '../assets/add-cart.png';
import dotd1 from '../assets/deals_of_the_day/dotd1.png';
import dotd2 from '../assets/deals_of_the_day/dotd2.png';
import dotd3 from '../assets/deals_of_the_day/dotd3.png';
import dotd4 from '../assets/deals_of_the_day/dotd4.png';

const imageMap: { [key: string]: string } = {
  'dotd1.png': dotd1,
  'dotd2.png': dotd2,
  'dotd3.png': dotd3,
  'dotd4.png': dotd4,
};

const DealsOfTheDay: React.FC = () => {
  return (
    <section className="w-full container mx-auto mt-10 px-4">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-[32px] font-bold text-black text-center md:text-left" style={{ fontFamily: 'Quicksand' }}>
            Deals Of The Day
          </h2>
          <span className="text-lg text-gray-600 hover:text-green-500 cursor-pointer mt-2 md:mt-0">
            All Deals {'>'}
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {dealsData.map((deal) => (
            <div key={deal.id} className="w-full h-[462.55px] overflow-hidden relative">
              <img
                src={imageMap[deal.image]}
                alt={deal.title}
                className="w-full h-[335.17px] object-cover rounded-[15px]"
              />
              <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[90%] md:w-[325.5px] h-[192.38px] bg-white rounded-[10px] p-4 md:p-6 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800" style={{ fontFamily: 'Quicksand' }}>{deal.title}</h3>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-[#B6B6B6] ml-1 text-[14px] ">({deal.rating})</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">By <span className="text-green-500">{deal.seller}</span></p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span className="text-xl font-bold text-green-500">${deal.price.toFixed(2)}</span>
                    <span className="text-gray-400 line-through ml-2">${deal.original_price.toFixed(2)}</span>
                  </div>
                  <button className="flex items-center justify-center gap-1 cursor-pointer bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                    <img src={Cart} alt='cart' className='h-[14px] w-[14px]'/>Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
