import React from 'react';
import subscribeBanner from '../assets/subscribe-banner.png';
import personImage from '../assets/person-image-subscribe-section.png';
import Promise1 from '../assets/promises/Promise1.png';
import Promise2 from '../assets/promises/Promise2.png';
import Promise3 from '../assets/promises/Promise3.png';
import Promise4 from '../assets/promises/Promise4.png';
import Promise5 from '../assets/promises/Promise5.png';
const OurPromises = () => {
    return (
        <section className='w-full container mx-auto mt-10 mb-10 px-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center'>
                <div className="flex flex-col items-center">
                    <img src={Promise1} alt="Promise 1" className="h-16 w-auto" />
                    <p className="mt-2 font-semibold">Best prices & offers</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Promise2} alt="Promise 2" className="h-16 w-auto" />
                    <p className="mt-2 font-semibold">Free delivery</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Promise3} alt="Promise 3" className="h-16 w-auto" />
                    <p className="mt-2 font-semibold">Great daily deal</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Promise4} alt="Promise 4" className="h-16 w-auto" />
                    <p className="mt-2 font-semibold">Wide assortment</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Promise5} alt="Promise 5" className="h-16 w-auto" />
                    <p className="mt-2 font-semibold">Easy returns</p>
                </div>
            </div>
        </section>
    );
};

export default OurPromises;