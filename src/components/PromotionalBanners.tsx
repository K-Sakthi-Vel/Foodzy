import React from 'react';
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


const PromotionalBanners = () => {
    return (
        <div className='w-full container mx-auto px-4 mt-[70px]'>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                {/* Banner 1 */}
                <div className='relative h-[300px] w-full'>
                    <div className='absolute top-[50%] -translate-y-1/2 left-[50px] h-auto'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Everyday fresh & <br /> Clean with Our<br /> Products
                        </h2>
                        <button className='cursor-pointer flex items-center hover:bg-[#D8372C] transition hover:translate-x-2 gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-white text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' />
                        </button>
                    </div>
                    <img className="h-full w-full object-cover rounded-[10px]" src={Banner1} alt="Banner 1" />
                </div>

                {/* Banner 2 */}
                <div className='relative h-[300px] w-full'>
                    <div className='absolute top-[50%] -translate-y-1/2 left-[50px] h-auto'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Make your Breakfast <br /> Healthy and Easy
                        </h2>
                        <button className='cursor-pointer flex items-center hover:bg-[#D8372C] transition hover:translate-x-2  gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-white text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' />
                        </button>
                    </div>
                    <img className="h-full w-full object-cover rounded-[10px]" src={Banner2} alt="Banner 2" />
                </div>

                {/* Banner 3 */}
                <div className='relative h-[300px] w-full'>
                    <div className='absolute top-[50%] -translate-y-1/2 left-[50px] h-auto'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            The best Organic <br /> Products Online
                        </h2>
                        <button className='cursor-pointer flex items-center hover:bg-[#D8372C] transition hover:translate-x-2  gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-white text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' />
                        </button>
                    </div>
                    <img className="h-full w-full object-cover rounded-[10px]" src={Banner3} alt="Banner 3" />
                </div>
            </div>
        </div>
    );
};

export default PromotionalBanners;
