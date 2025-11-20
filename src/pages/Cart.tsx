import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import datesValuePack from '../assets/products/coconut-flakes.jpg';
import honeySpicedNuts from '../assets/products/peanut-butter.jpg';
import paymentCards from '../assets/payment-cards.png';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

export default function CartPage() {
  const items = useSelector((s: RootState) => s.cart.items);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Mock data for display since it's not in the cart state
  const displayItems = [
    {
      id: 1,
      name: 'Coconut Flakes',
      price: 120.25,
      originalPrice: 123.25,
      rating: 4,
      image: datesValuePack,
    },
    {
      id: 2,
      name: 'Peanut Butter',
      price: 120.25,
      originalPrice: 123.25,
      rating: 4,
      image: honeySpicedNuts,
    },
  ];

  return (
    <div className="flex flex-col items-center mx-auto w-full">
      <div className="flex items-center justify-center bg-[#F53E32] h-[70px] w-[100vw]">
        <div className="flex justify-between items-center w-[1310px]" style={{ fontFamily: 'Poppins' }}>
          <p className="text-[19px] text-[#FFFFFF]">Product</p>
          <p className="text-[14px] text-[#FFFFFF]">Home - Checkout</p>
        </div>
      </div>
      <div className="flex justify-between gap-8 w-[1310px] mt-20">
        {/* Left Column */}
        <div className="w-[440px]">
          {/* Summary */}
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 mb-6 w-[416px] h-[414px] text-[14px] text-[#7A7A7A]">
            <h2 className="text-[20px] font-semibold mb-4 text-left text-[#000000]">Summary</h2>
            <div className="flex justify-between ">
              <span>Sub-Total</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Delivery Charges</span>
              <span>$80.00</span>
            </div>
            <div className="border-t border-[#E9E9E9] my-4"></div>
            <div className="flex justify-between font-bold text-[16px] text-[#2B2B2D]" style={{ fontFamily: 'Manrope' }}>
              <span>Total Amount</span>
              <span>$80.00</span>
            </div>
            <div className="py-5 my-4">
              {displayItems.map((item) => (
                <div key={item.id} className="flex items-center mt-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                  <div className="ml-4 text-left">
                    <h3 className="text-[15px] text-[#000000]" style={{
                      fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
                    }}>{item.name}</h3>
                    <StarRating rating={item.rating} />
                    <div>
                      <span className="text-[#64B496] text-[16px] font-semibold">${item.price.toFixed(2)}</span>
                      <span className="text-[#7A7A7A] text-[13px] line-through ml-2">${item.originalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Delivery Method */}
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 mb-6 w-[416px] h-[189px]">
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Delivery Method</h2>
            <p className="text-[#7A7A7A] mb-4 text-left text-[14px]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Please select the preferred shipping method to use on this order.</p>
            <div className="flex gap-20" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>
              <div className="flex flex-col text-[15px] text-[#2B2B2D]">
                <p>Free Shipping </p>
                <label htmlFor="free-shipping" className="flex items-center gap-1">
                  <input type="radio" id="free-shipping" name="shipping" className="h-4 w-4 text-red-500 border-gray-300 focus:ring-red-500" checked />
                  <span className="text-[#7A7A7A]">Rate - $0.00</span>
                </label>
              </div>
              <div className="flex flex-col text-[15px] text-[#2B2B2D]">
                <p>Flat Rate </p>
                <label htmlFor="free-shipping" className="flex items-center gap-1">
                  <input type="radio" id="free-shipping" name="shipping" className="h-4 w-4 text-red-500 border-gray-300 focus:ring-red-500" checked />
                  <span className="text-[#7A7A7A]">Rate - $5.00</span>
                </label>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 mb-6 w-[416px]">
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Payment Method</h2>
            <p className="text-[#7A7A7A] mb-4 text-left text-[14px]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Please select the preferred payment method to use on this order.</p>
            <div className='text-[14px] text-[#7A7A7A]' style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>
              <div className="flex items-center mb-2">
                <input type="radio" id="cash" name="payment" className="h-4 w-4 text-red-500 border-gray-300" checked />
                <label htmlFor="cash" className="ml-2">Cash On Delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="upi" name="payment" className="h-4 w-4 text-red-500 border-gray-300" />
                <label htmlFor="upi" className="ml-2">UPI</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="bank" name="payment" className="h-4 w-4 text-red-500 border-gray-300" />
                <label htmlFor="bank" className="ml-2">Bank Transfer</label>
              </div>
            </div>
          </div>

          <div className="border border-[#E9E9E9] rounded-[5px] p-6 w-[416px]">
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Payment Method</h2>
            <img src={paymentCards} alt='payment cards' className='h-[30px]' />
          </div>

        </div>

        {/* Right Column */}
        <div className="w-[856px]">
          {/* Customer */}
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 mb-6 w-[856px] h-[435px] text-left">
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Customer</h2>
            <p className="text-[#2B2B2D] text-[15px] mb-4">Checkout Options</p>
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Returning Customer</h2>
            <div className="mb-4  text-[#2B2B2D] text-[15px] ">
              <label className="block mb-2">Email Address</label>
              <input type="email" placeholder="Enter your email address" className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div className="mb-4  text-[#2B2B2D] text-[15px] ">
              <label className="block mb-2">OTP</label>
              <input type="text" placeholder="Enter your OTP" className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <button className="bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer h-[40px] text-white px-6 rounded mt-4">Verify</button>
          </div>

          {/* Billing Details */}
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 w-[851px] h-[530px] text-left  text-[15px] text-[#2B2B2D]">
            <h2 className="text-[20px] font-semibold mb-2 text-left text-[#000000]" style={{
              fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
            }}>Billing Details</h2>
            <p className="text-[#2B2B2D] text-[15px] mb-4">Checkout Options</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name*</label>
                <input type="text" placeholder="Enter your first name" className="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name*</label>
                <input type="text" placeholder="Enter your last name" className="w-full p-3 border border-gray-300 rounded" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 mb-2">Address</label>
              <input type="text" placeholder="Address Line 1" className="w-full p-3 border border-gray-300 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 mb-2">City*</label>
                <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Post Code</label>
                <input type="text" placeholder="Post Code" className="w-full p-3 border border-gray-300 rounded" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700 mb-2">Country*</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded pr-10 appearance-none hide-native-arrow">
                    <option>Country</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Region/State</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded pr-10 appearance-none hide-native-arrow">
                    <option>Region/State</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right mt-6">
            <button className="bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer text-white py-3 px-8 rounded">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
