import React from 'react';
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


const PromotionalBanners = () => {
    return (
        <div className='w-[100vw] h-[310px] mt-[70px]'>
            <div
                className="flex items-center justify-center gap-5 overflow-hidden"
            >
                <div className='relative h-[300px]'>
                    <div className='absolute top-[70px] left-[50px] h-[160px]'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Everyday fresh & <br /> Clean with Our<br /> Products
                        </h2>
                        <button className='absolute bottom-0 flex items-center gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' /></button>
                    </div>

                    <img className="h-[300px] w-[512px] rounded-[10px]" src={Banner1} alt="img2" />
                </div>
                <div className='relative h-[300px]'>
                    <div className='absolute top-[70px] left-[50px] h-[160px]'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            Make your Breakfast <br /> Healthy and Easy
                        </h2>
                        <button className='absolute bottom-0 flex items-center gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' /></button>
                    </div>
                    <img className="h-[300px] w-[512px] rounded-[10px]" src={Banner2} alt="img3" />
                </div>
                <div className='relative h-[300px]'>
                    <div className='absolute top-[70px] left-[50px] h-[160px]'>
                        <h2
                            className='text-black text-[24px] font-bold '
                            style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                            The best Organic <br /> Products Online
                        </h2>
                        <button className='absolute bottom-0 flex items-center gap-2 pl-3 pr-3 h-[32px] mt-5 bg-orange-600 rounded text-[12px]'>
                            Shop Now
                            <ArrowRightIcon className='h-4 w-4 font-bold' /></button>
                    </div>
                    <img className="h-[300px] w-[512px] rounded-[10px]" src={Banner3} alt="img4" />
                </div>
            </div>

        </div>

    );
};

export default PromotionalBanners;
