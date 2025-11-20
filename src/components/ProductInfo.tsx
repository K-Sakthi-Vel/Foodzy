import React from 'react';

const ProductInfo: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
                <div className="p-4 border rounded-lg" style={{ width: 471, height: 590, backgroundColor: '#F7F7F8', borderColor: '#E9E9E9' }}>
                    <img src="https://via.placeholder.com/450" alt="Product" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="col-span-6" style={{ width: 495, height: 592.25 }}>
                <h1 className="text-[22px]  text-[#2B2B2D]">Seeds Of Change Oraganic Quinoa, Brown</h1>
                <p className="text-[#7A7A7A] text-[14px] my-2" style={{ fontFamily: 'Poppins' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                <div className="flex items-center my-2 border-t-1 border-t-[#E9E9E9] mt-5 pt-5">
                    <div className="flex text-[15px] text-[#F5885F]">
                        {[...Array(5)].map((_, index) => (
                            // The key prop is required when mapping over elements
                            <svg
                                key={index} // Use the index as the key (fine for static lists)
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-[#7A7A7A] text-[15px] ml-2" style={{ fontFamily: 'Poppins' }}>( 75 Review )</span>
                </div>
                <div className="space-y-2 mt-5 text-[16px] text-[#777777]">
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Brand</span>: ESTA BETTERU CO</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Flavour</span>: Super Saver Pack</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Diet Type</span>: Vegetarian</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Weight</span>: 200 Grams</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Speciality</span>: Gluten Free, Sugar Free</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Info</span>: Egg Free, Allergen-Free</p>
                    <p><span className="font-semibold text-[#2B2B2D] inline-block w-[100px]">Items</span>: 1</p>
                </div>
                <div className="mt-10">
                    <span className="text-[24px] font-bold text-[#F53E32]" style={{ fontFamily: 'Poppins' }}>$120.25</span>
                    <span className="text-[#7A7A7A] text-[14px] line-through ml-2">$123.25</span>
                </div>
                <div className='flex gap-2 text-[16px] text-[#2B2B2D] mt-5' style={{ fontFamily: 'Poppins' }}>
                    <span className="">Size/Weight:</span>

                    <button className="px-2 h-[24px] text-[12px] text-[#FFFFFF] border rounded-md bg-red-500 text-white">50kg</button>
                    <button className="px-2 h-[24px] bg-[#FFFFFF] text-[12px] text-[#777777] border border-1 border-[#E9E9E9] rounded-md">80kg</button>
                    <button className="px-2 h-[24px] bg-[#FFFFFF] text-[12px] text-[#777777] border border-1 border-[#E9E9E9] rounded-md">120kg</button>
                    <button className="px-2 h-[24px] bg-[#FFFFFF] text-[12px] text-[#777777] border border-1 border-[#E9E9E9] rounded-md">200kg</button>
                </div>
                <div className="flex items-center gap-1 mt-4 text-[#000000] h-[40px] mt-10">
                    <div className="flex items-center border border-[#E9E9E9] rounded-md h-[40px] w-[40px]">
                        <span className="px-4">1</span>
                    </div>
                    <div className='flex flex-col gap-1 h-[40px]'>
                        <button className="px-1 py-1 flex items-center justify-center border rounded-md  border border-[#E9E9E9]  h-[18px] w-[20px]">+</button>
                        <button className="px-1 py-1 flex items-center justify-center border rounded-md  border border-[#E9E9E9]  h-[18px] w-[20px]">-</button>
                    </div>

                    <button className="ml-4 bg-red-500 text-white px-6 py-2 rounded-md">Add To Cart</button>
                </div>
            </div>
            <div className="col-span-12 mt-8 w-[996px] border border-1 border-[#E9E9E9] rounded-[5px] p-5">
                <div className="border-b">
                    <nav className="flex space-x-4 text-[17px] font-semibold text-[#2B2B2D]">
                        {/* Selected tab should be hihjligh in #F53E32 */}
                        <button className="py-2 px-4 border-b-2 border-b-[#F53E32] text-[#F53E32]">Description</button>
                        <button className="py-2 px-4">Information</button>
                        <button className="py-2 px-4">Review</button>
                    </nav>
                </div>
                <div className="py-4 text-[14px] text-[#7A7A7A]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdebitis corporis, eaque dicta, repellat amet. Ilum adipisci vel perferendis dolor! Quis vel consequatur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                    <h3 className="font-semibold mt-7 mb-5 border-b-1 border-b-[#E9E9E9] pb-5 text-[#2B2B2D]">Packaging & Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequatur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
