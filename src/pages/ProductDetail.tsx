import React from 'react';
import FilterOptions from '../components/FilterOptions';
import ProductInfo from '../components/ProductInfo';

const ProductDetail: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[100vw] ">
      <div className='flex items-center justify-center bg-[#F53E32] h-[70px] w-[100vw]'>
        <div className='flex justify-between items-center w-[1310px]' style={{ fontFamily: 'Poppins' }}>
          <p className='text-[19px] text-[#FFFFFF]'>Product</p>
          <p className='text-[14px] text-[#FFFFFF]'>Home - Product</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 w-[1310px] mt-10">
        <div className="col-span-3">
          <FilterOptions />
        </div>
        <div className="w-[996px] col-span-9">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
