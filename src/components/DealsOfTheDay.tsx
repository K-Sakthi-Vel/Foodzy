import React from 'react';
import dealsData from '../data/dealsOfTheDay.json';

const DealsOfTheDay: React.FC = () => {
  return (
    <section className="w-[100vw] h-[545px] flex justify-center mx-auto mt-10">
      <div className='w-[1610px]'>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[32px] font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
            Deals Of The Day
          </h2>
          <a href="#" className="text-lg text-gray-600 hover:text-green-500">
            All Deals {'>'}
          </a>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {dealsData.map((deal) => (
            <div key={deal.id} className="w-[378.5px] h-[462.55px]  overflow-hidden relative">
              <img
                src={`/src/assets/deals_of_the_day/${deal.image}`}
                alt={deal.title}
                className="w-full h-[335.17px] object-cover rounded-[15px]"
              />
              <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[325.5px] h-[192.38px] bg-white rounded-[10px] p-6 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800" style={{fontFamily:'Quicksand'}}>{deal.title}</h3>
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
                  <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors">
                    Add
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
