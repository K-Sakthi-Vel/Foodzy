import React from 'react';

const FilterOptions: React.FC = () => {
    return (
        <div className="p-6 border rounded-lg shadow-sm bg-[#F7F7F8] border-[#E9E9E9] border-1" style={{ width: 306, height: 578 }}>
            <h2 className="text-[16px] text-[#2B2B2D]" style={{ fontFamily: 'Poppins' }}>Product Category</h2>
            <div className="space-y-2 mt-3 border-t-1 border-t-[#E9E9E9] pt-5  text-[14px] text-[#7A7A7A]">
                <div className="flex items-center justify-between" style={{ fontFamily: 'Poppins' }}>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 border rounded w-4 h-4 cursor-pointer custom-checkbox"
                            defaultChecked
                        />
                        Juice & Drinks
                    </label>
                    <span>[20]</span>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 border rounded w-4 h-4 cursor-pointer custom-checkbox"
                        />
                        Dairy & Milk
                    </label>
                    <span>[54]</span>
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 border rounded w-4 h-4 cursor-pointer custom-checkbox"
                        />
                        Snack & Spice
                    </label>
                    <span>[64]</span>
                </div>
            </div>
            <h2 className="text-[16px] mt-6 mb-4 text-[#2B2B2D]" style={{fontFamily:'Poppins'}}>Filter By Price</h2>
            <div className='border border-t-1 border-t-[#E9E9E9] pt-5'>
                <input type="range" min="20" max="250" className="w-full accent-[#F53E32]" />
                <div className="flex justify-between mt-2">
                    <span className='text-[#7A7A7A] text-[15px]' style={{fontFamily:'Poppins'}}><span className='text-black font-bold'>Price:</span> $20 - $250</span>
                </div>
            </div>
            <button className="bg-red-500 text-white py-2 rounded-md mt-4 px-5">Filter</button>
            <h2 className="text-[16px] text-[#2B2B2D] mt-6 mb-4" style={{ fontFamily: 'Poppins' }}>Products Tags</h2>
            <div className="text-[14px] text-[#7A7A7A] flex flex-wrap gap-2" style={{ fontFamily: 'Poppins' }}>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Vegetables</span>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Juice</span>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Food</span>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Dry Fruits</span>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Vegetables</span>
                <span className="px-3 py-1 rounded-md bg-[#FFFFFF] border-[#E9E9E9]">Juice</span>
            </div>
        </div>
    );
};

export default FilterOptions;
