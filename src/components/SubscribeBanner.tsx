import React from 'react';
import subscribeBanner from '../assets/subscribe-banner.png';
import personImage from '../assets/person-image-subscribe-section.png';
import Send from '../assets/send.png';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const SubscribeBanner = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSellerSubscribe = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/api/subscribe-seller`, { email });
      toast.success(response.data.message);
      setEmail('');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Subscription failed. Please try again.');
      setEmail(''); // Clear email on error too
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='w-full container mx-auto mt-10 px-4'>
      <div
        className="relative w-full h-auto md:h-[417px] rounded-[20px] bg-cover bg-center text-white p-6 md:p-10 flex flex-col justify-center"
        style={{ backgroundImage: `url(${subscribeBanner})` }}
      >
        <div className="md:w-[530px] text-center md:text-left z-10">
          <h2 className="text-2xl md:text-[40px] text-black font-bold mb-4" style={{ fontFamily: 'Quicksand' }}>
            Stay home & get your daily needs from our shop
          </h2>
          <p className="text-base md:text-[18px] text-[#7E7E7E] mb-6" style={{ fontFamily: 'Lato' }}>
            Start You'r Daily Shopping with <span className='text-[#3BB77E]'>Nest Mart</span>
          </p>
          {/* Subscription Input */}
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-sm p-2 sm:p-0 sm:h-[64px] w-full max-w-md mx-auto md:mx-0 md:w-[420px]">
            <div className="flex items-center w-full sm:flex-1 pl-2">
              <img className="ml-3 h-4 w-4" src={Send} alt="img1" />
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 outline-none ml-3 text-[15px] text-gray-600 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="w-full mt-2 sm:mt-0 sm:w-auto h-12 sm:h-[64px] bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer transition text-white px-8 py-2 rounded-full font-medium"
              onClick={handleSellerSubscribe}
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </div>
        <img
          src={personImage}
          alt="Delivery Person"
          className="hidden md:block absolute bottom-0 right-10 w-[634px] h-[345px]"
        />
      </div>
    </section>
  );
};

export default SubscribeBanner;
