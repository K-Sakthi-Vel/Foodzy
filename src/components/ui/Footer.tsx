import React from 'react';
import logo from '../../assets/logo.png';
import { MapPin, Mail, Phone, Send, Facebook, Twitter, Instagram, Dribbble } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';

import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';
import image1 from '../../assets/footer-image1.png';
import image2 from '../../assets/footer-image2.png';
import image3 from '../../assets/footer-image3.png';



export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      setMessage(response.data.message);
      setEmail('');
    } catch (error: any) {
      setMessage(error.response?.data?.message || 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage('');
      }, 3000); // Hide message after 3 seconds
    }
  };

  return (
    <footer style={{ backgroundColor: '#F7F7F8' }} className="relative flex items-end justify-center h-[513px] border-t border-[#E9E9E9] pt-20 mt-20">
      <img src={image1} alt="Foodzy" className="absolute bottom-5 right-50 h-[60px] w-[120px]" />
      <img src={image2} alt="Foodzy" className="absolute top-[-24px] right-50 h-[70px] w-[70px]" />
      <img src={image3} alt="Foodzy" className="absolute top-[200px] left-[-10px] h-[60px] w-[60px]" />
      <div className="container w-[1320px] relative px-4 h-full">
        <div className="grid grid-cols-12 gap-10">
          <div className="w-[400px] col-span-12 lg:col-span-4">
            <div className="mb-1">
              <a href="#" className="flex items-center">
                <img src={logo} alt="Foodzy" className="h-12 mr-1" />
                <div>
                  <h2 className="text-[18px] font-bold text-gray-800" style={{fontFamily:'Arial'}}>Foodzy</h2>
                  <p className="text-[10px] text-[#818181]">A Treasure of Tastes</p>
                </div>
              </a>
            </div>
            <p className="text-[#7A7A7A] text-[14px] ml-2 mb-6" style={{fontFamily:'Poppins'}}>
              FoodTrove is the biggest market of grocery products. Get your daily needs from our store.
            </p>
            <ul className="space-y-4 text-gray-600 text-[14px] text-[#777777]">
              <li className="flex items-start">
                <MapPin className="text-red-500 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>51 Green St. Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-red-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span>example@email.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-500 mr-3 h-5 w-5 flex-shrink-0" />
                <span>+91 123 4567890</span>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-[18px] font-bold text-[#000000] mb-6" style={{fontFamily:'Arial'}}>Company</h3>
            <ul className="space-y-4 text-[#777777] text-[14px]" style={{fontFamily:'Poppins'}}>
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Delivery Information</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500">Support Center</a></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <h3 className="text-[18px] font-bold text-[#000000] mb-6"  style={{fontFamily:'Arial'}}>Category</h3>
            <ul className="space-y-4 text-[#777777] text-[14px]" style={{fontFamily:'Poppins'}}>
              <li><a href="#" className="hover:text-red-500">Dairy & Bakery</a></li>
              <li><a href="#" className="hover:text-red-500">Fruits & Vegetable</a></li>
              <li><a href="#" className="hover:text-red-500">Snack & Spice</a></li>
              <li><a href="#" className="hover:text-red-500">Juice & Drinks</a></li>
              <li><a href="#" className="hover:text-red-500">Chicken & Meat</a></li>
              <li><a href="#" className="hover:text-red-500">Fast Food</a></li>
            </ul>
          </div>
          
          <div className="col-span-12 lg:col-span-4">
            <h3 className="text-[18px] font-bold text-[#000000] mb-6"  style={{fontFamily:'Arial'}}>Subscribe Our Newsletter</h3>
            <div className="relative mb-6">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full bg-white text-black border border-gray-300 rounded-lg py-3 pl-4 pr-12 focus:outline-none focus:border-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                onClick={handleSubmit}
                disabled={loading}
              >
                <Send className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            {message && (
              <p className={`mt-2 text-center text-[14px] ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
            <div className="flex space-x-2 mb-6 mt-4"> {/* Added mt-4 for spacing */}
                <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-red-500 hover:text-white"><Facebook size={16} /></a>
                <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-red-500 hover:text-white"><Twitter size={16} /></a>
                <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-red-500 hover:text-white"><Dribbble size={16} /></a>
                <a href="#" className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:bg-red-500 hover:text-white"><Instagram size={16} /></a>
            </div>
            <div className="flex space-x-2">
                <img src={gallery1} alt="gallery" className="w-16 h-16 rounded-md object-cover" />
                <img src={gallery2} alt="gallery" className="w-16 h-16 rounded-md object-cover" />
                <img src={gallery3} alt="gallery" className="w-16 h-16 rounded-md object-cover" />
                <img src={gallery4} alt="gallery" className="w-16 h-16 rounded-md object-cover" />
                <img src={gallery5} alt="gallery" className="w-16 h-16 rounded-md object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full border-t border-gray-200 mt-12 py-6 text-center text-gray-600"  style={{fontFamily:'Poppins'}}>
          © 2025 <a href="#" className="text-red-500 font-semibold">foodzy</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
