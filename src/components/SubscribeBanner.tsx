import React from 'react';
import subscribeBanner from '../assets/subscribe-banner.png';
import personImage from '../assets/person-image-subscribe-section.png';
import Send from '../assets/send.png';
const SubscribeBanner = () => {
  return (
    <section className='w-[100vw] flex justify-center mt-10'>
      <div
        className="relative w-[1609px] h-[417px] rounded-[20px] bg-cover bg-center text-white p-10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${subscribeBanner})` }}
      >
        <div className="w-[530px] absolute bottom-22 left-20">
          <h2 className="text-[40px] text-black font-bold mb-4" style={{ fontFamily: 'Quicksand' }}>
            Stay home & get your daily needs from our shop
          </h2>
          <p className="text-[18px] text-[#7E7E7E] mb-6" style={{ fontFamily: 'Lato' }}>
            Start You'r Daily Shopping with <span className='text-[#3BB77E]'>Nest Mart</span>
          </p>
          {/* Subscription Input */}
          <div className="flex items-center bg-white rounded-full shadow-sm pl-4 py-3 h-[64px] w-[420px]">
            <img className="h-4 w-4" src={Send} alt="img1" />

            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 outline-none ml-3 text-[15px] text-gray-600"
            />
            <button className="h-[64px] bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer transition text-white px-8 py-2 rounded-full font-medium">
              Subscribe
            </button>
          </div>
        </div>
        <img
          src={personImage}
          alt="Delivery Person"
          className="absolute bottom-0 right-10"
          style={{ width: '634px', height: '345px' }}
        />
      </div>
    </section>
  );
};

export default SubscribeBanner;