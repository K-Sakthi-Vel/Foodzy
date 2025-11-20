import React from 'react';
import subscribeBanner from '../assets/subscribe-banner.png';
import personImage from '../assets/person-image-subscribe-section.png';
import Promise1 from '../assets/promises/promise1.png';
import Promise2 from '../assets/promises/promise2.png';
import Promise3 from '../assets/promises/promise3.png';
import Promise4 from '../assets/promises/promise4.png';
import Promise5 from '../assets/promises/promise5.png';
const OurPromises = () => {
    return (
        <section className='w-[100vw] flex justify-center mt-15'>
            <div className='w-[1609px] h-[107px] flex items-center gap-1'>
                <img
                    src={Promise1}
                    alt="Delivery Person"
                    className=""

                />
                <img
                    src={Promise2}
                    alt="Delivery Person"
                    className=""
                />
                <img
                    src={Promise3}
                    alt="Delivery Person"
                    className=""
                />
                <img
                    src={Promise4}
                    alt="Delivery Person"
                    className=""
                />
                <img
                    src={Promise5}
                    alt="Delivery Person"
                    className=""
                />
            </div>
        </section>
    );
};

export default OurPromises;