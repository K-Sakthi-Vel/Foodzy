import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
import { updateQty, removeItem, clearCart } from '../store/slices/cartSlice';
import { sendOtp, verifyOtp } from '../store/slices/authSlice';
import paymentCards from '../assets/payment-cards.png';

export default function CartPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [emailError, setEmailError] = useState('');

  const items = useSelector((s: RootState) => s.cart.items);
  const { otpSent, otpVerified, loading, error } = useSelector((s: RootState) => s.auth);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const dispatch = useDispatch<AppDispatch>();
  const deliveryCharges = 80.00;

  const handleSendOtp = () => {
    if (validateEmail(email)) {
      dispatch(sendOtp(email));
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleVerifyOtp = () => {
    dispatch(verifyOtp({ email, otp }));
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

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
          <div className="border border-[#E9E9E9] rounded-[5px] p-6 mb-6 w-[416px] min-h-[414px] text-[14px] text-[#7A7A7A]">
            <h2 className="text-[20px] font-semibold mb-4 text-left text-[#000000]">Summary</h2>
            <div className="flex justify-between ">
              <span>Sub-Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Delivery Charges</span>
              <span>${deliveryCharges.toFixed(2)}</span>
            </div>
            <div className="border-t border-[#E9E9E9] my-4"></div>
            <div className="flex justify-between font-bold text-[16px] text-[#2B2B2D]" style={{ fontFamily: 'Manrope' }}>
              <span>Total Amount</span>
              <span>${(total + deliveryCharges).toFixed(2)}</span>
            </div>
            <div className="py-5">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                    <div className="ml-4 text-left">
                      <h3 className="text-[15px] text-[#000000]" style={{
                        fontFamily: 'Segoe UI, Roboto, Oxygen, "Helvetica Neue", sans-serif'
                      }}>{item.name}</h3>
                      <div>
                        <span className="text-[#64B496] text-[16px] font-semibold">${item.price.toFixed(2)} x {item.qty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[40%] flex-col justify-center items-center gap-1">
                    <div className='flex w-full justify-between'>
                      <button onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))} disabled={item.qty <= 1} className="px-2 py-1 bg-gray-200 rounded">-</button>
                      <span className="px-4 pt-1">{item.qty}</span>
                      <button onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))} className="px-2 py-1 bg-gray-200 rounded">+</button>
                    </div>

                    <button onClick={() => dispatch(removeItem(item.id))} className="px-2 w-full py-1 bg-red-500 text-white rounded">Remove</button>
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
                  <input type="radio" id="free-shipping" name="shipping" className="custom-radio" defaultChecked />
                  <span className="text-[#7A7A7A]">Rate - $0.00</span>
                </label>
              </div>
              <div className="flex flex-col text-[15px] text-[#2B2B2D]">
                <p>Flat Rate </p>
                <label htmlFor="free-shipping" className="flex items-center gap-1">
                  <input type="radio" id="flat-rate" name="shipping" className="custom-radio" />
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
                <input type="radio" id="cash" name="payment" className="custom-radio" defaultChecked />
                <label htmlFor="cash" className="ml-2">Cash On Delivery</label>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="upi" name="payment" className="custom-radio" />
                <label htmlFor="upi" className="ml-2">UPI</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="bank" name="payment" className="custom-radio" />
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
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={otpSent}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            {!otpSent ? (
              <button onClick={handleSendOtp} disabled={loading} className="bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer h-[40px] text-white px-6 rounded mt-4">
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            ) : (
              !otpVerified && (
                <>
                  <div className="mb-4  text-[#2B2B2D] text-[15px] ">
                    <label className="block mb-2">OTP</label>
                    <input
                      type="text"
                      placeholder="Enter your OTP"
                      className="w-full p-3 border border-gray-300 rounded"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button onClick={handleVerifyOtp} disabled={loading} className="bg-[#F53E32] hover:bg-[#D8372C] cursor-pointer h-[40px] text-white px-6 rounded mt-4">
                    {loading ? 'Verifying...' : 'Verify'}
                  </button>
                </>
              )
            )}
            {otpVerified && <p className="text-green-500">Email verified successfully!</p>}
            {error && <p className="text-red-500">{error}</p>}
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
