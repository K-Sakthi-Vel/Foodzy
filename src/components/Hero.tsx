import React from 'react';
import Leaf from '../assets/leaf.png';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Send from '../assets/send.png';

const Hero = () => {
  return (
    <div
      className="relative w-full h-auto md:h-[851px] bg-[#F0F0F0] overflow-hidden flex items-center justify-center py-20 md:py-0"
    >
      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between">

        {/* --- LEFT TEXT SECTION --- */}
        <div className="z-10 text-center md:text-left md:max-w-[550px]">

          {/* Small Red Line + Label */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="text-[#FF3B3B] font-semibold tracking-wide border-b-3 bottom-grey text-lg md:text-[20px]">100%</span>
            <span className="text-[#111] font-bold text-lg md:text-[20px]">Organic Vegetables</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight md:leading-[64px] text-black mb-4">
            The best way to <br />
            stuff your wallet.
          </h1>

          {/* Sub Text */}
          <p className="text-[#555] text-sm md:text-[15px] leading-6 mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            reiciendis beatae consequuntur.
          </p>

          {/* Subscription Input */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-sm p-2 sm:p-0 sm:h-[64px] w-full max-w-md mx-auto md:mx-0 md:w-[420px]">
            <div className="flex items-center w-full sm:flex-1 pl-2">
              <img className="h-4 w-4" src={Send} alt="img1" />
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 outline-none ml-3 text-[15px] text-gray-600 w-full"
              />
            </div>
            <button className="w-full mt-2 sm:mt-0 sm:w-auto h-12 sm:h-[64px] bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer transition text-white px-8 py-2 rounded-full font-medium">
              Subscribe
            </button>
          </div>

        </div>

        {/* --- Positioned Images --- */}
        {/* Adjusted for better responsiveness */}
        <img className="hidden md:block h-[485px] w-[690px] absolute bottom-2 right-[-30px] rotate-2" src={Leaf} alt="leaf" />
        <img className="h-[50px] w-[50px] opacity-[50%] absolute top-0 left-0" src={Img1} alt="img1" />
        <img className="h-[100px] w-[100px] absolute bottom-1 left-1" src={Img2} alt="img2" />
        <img className="hidden md:block h-[80px] w-[100px] absolute top-0 left-[40%]" src={Img3} alt="img3" />
        <img className="h-[100px] w-[100px] absolute bottom-20 left-[50%] hidden lg:block" src={Img4} alt="img4" />
      </div>
    </div>
  );
};

export default Hero;
