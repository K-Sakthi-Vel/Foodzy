import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import apple from '../assets/products/apple.png';
import coconut from '../assets/products/coconut-flakes.jpg';
import coffee from '../assets/products/coffee.jpg';
import latte from '../assets/products/latte.jpg';
import lemon from '../assets/products/lemon.png';
import macadamia from '../assets/products/macadamia.png';
import moisturer from '../assets/products/moisturer.jpg';
import peanut from '../assets/products/peanut-butter.jpg';
import pistachio from '../assets/products/pistachio.jpg';
import watermelon from '../assets/products/watermelon.png';

const imageMap: { [key: string]: string } = {
  'apple.png': apple,
  'coconut-flakes.jpg': coconut,
  'coffee.jpg': coffee,
  'latte.jpg': latte,
  'lemon.png': lemon,
  'macadamia.png': macadamia,
  'moisturer.jpg': moisturer,
  'peanut-butter.jpg': peanut,
  'pistachio.jpg': pistachio,
  'watermelon.png': watermelon,
};

interface Product {
  id: number;
  name: string;
  type: string;
  rating: number;
  seller: string;
  originalPrice: number;
  discountedPrice: number;
  tag: string | null;
  image: string;
  description: string;
  reviews: number;
  brand: string;
  flavour: string;
  dietType: string;
  weight: string;
  speciality: string;
  info: string;
  items: number;
  sizes: string[];
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: String(product.id),
        name: product.name,
        price: product.discountedPrice,
        qty: quantity,
        image: imageMap[product.image]
      })
    );
    alert('Added to cart');
  };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="col-span-full lg:col-span-6">
                <div className="p-4 border rounded-lg w-full h-auto lg:w-[471px] lg:h-[590px] bg-[#F7F7F8] border-[#E9E9E9]">
                    <img src={imageMap[product.image]} alt={product.name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="col-span-full lg:col-span-6 w-full h-auto lg:w-[495px] lg:h-[592px]">
                <h1 className="text-[22px]  text-[#2B2B2D]">{product.name}</h1>
                <p className="text-[#7A7A7A] text-[14px] my-2" style={{ fontFamily: 'Poppins' }}>{product.description}</p>
                <div className="flex items-center my-2 border-t-1 border-t-[#E9E9E9] mt-5 pt-5">
                    <div className="flex text-[15px] text-[#F5885F]">
                        {[...Array(Math.round(product.rating))].map((_, index) => (
                            <svg
                                key={index}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-[#7A7A7A] text-[15px] ml-2" style={{ fontFamily: 'Poppins' }}>({product.reviews} Review)</span>
                </div>
                <div className="space-y-2 mt-5 text-[16px] text-[#777777]">
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Brand</span>: {product.brand}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Flavour</span>: {product.flavour}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Diet Type</span>: {product.dietType}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Weight</span>: {product.weight}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Speciality</span>: {product.speciality}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Info</span>: {product.info}</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Items</span>: {product.items}</p>
                </div>
                <div className="mt-10">
                    <span className="text-[24px] font-bold text-[#F53E32]" style={{ fontFamily: 'Poppins' }}>${product.discountedPrice.toFixed(2)}</span>
                    <span className="text-[#7A7A7A] text-[14px] line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                </div>
                <div className='flex gap-2 text-[16px] text-[#2B2B2D] mt-5' style={{ fontFamily: 'Poppins' }}>
                    <span className="">Size/Weight:</span>
                    {product.sizes.map((size, index) => (
                        <button key={index} className={`px-2 h-[24px] text-[12px] border rounded-md ${index === 0 ? 'bg-red-500 text-white' : 'bg-[#FFFFFF] text-[#777777] border-1 border-[#E9E9E9]'}`}>{size}</button>
                    ))}
                </div>
                <div className="flex items-center gap-1 mt-4 text-[#000000] h-[40px] mt-10">
                    <div className="flex items-center border border-[#E9E9E9] rounded-md h-[40px] w-[40px]">
                        <span className="px-4">{quantity}</span>
                    </div>
                    <div className='flex flex-col gap-1 h-[40px]'>
                        <button onClick={() => setQuantity(quantity + 1)} className="px-1 py-1 flex items-center justify-center border rounded-md  border border-[#E9E9E9]  h-[18px] w-[20px]">+</button>
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-1 py-1 flex items-center justify-center border rounded-md  border border-[#E9E9E9]  h-[18px] w-[20px]">-</button>
                    </div>

                    <button onClick={handleAddToCart} className="ml-4 bg-red-500 text-white px-6 py-2 rounded-md">Add To Cart</button>
                </div>
            </div>
            <div className="col-span-12 mt-8 w-full border border-1 border-[#E9E9E9] rounded-[5px] p-5">
                <div className="border-b">
                    <nav className="flex space-x-4 text-[17px] font-semibold text-[#2B2B2D]">
                        {['Description', 'Information', 'Review'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-b-[#F53E32] text-[#F53E32]' : ''}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="py-4 text-[14px] text-[#7A7A7A]">
                    {activeTab === 'Description' && (
                        <>
                            <p>{product.description}</p>
                            <h3 className="font-semibold mt-7 mb-5 border-b-1 border-b-[#E9E9E9] pb-5 text-[#2B2B2D]">Packaging & Delivery</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequatur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                        </>
                    )}
                    {activeTab === 'Information' && (
                        <div>
                            <h3 className="font-semibold text-[#2B2B2D]">Product Information</h3>
                            <p>Details about the product information will be displayed here.</p>
                        </div>
                    )}
                    {activeTab === 'Review' && (
                        <div>
                            <h3 className="font-semibold text-[#2B2B2D]">Customer Reviews</h3>
                            <p>Reviews will be displayed here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
