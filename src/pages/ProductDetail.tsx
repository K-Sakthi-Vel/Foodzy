import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterOptions from '../components/FilterOptions';
import ProductInfo from '../components/ProductInfo';
import ProductDetailPopularProducts from '../components/ProductDetailPopularProducts';
import products from '../data/products.json';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="flex flex-col items-center w-[100vw]">
      <div className="flex items-center justify-center bg-[#F53E32] h-[70px] w-full">
        <div className="flex justify-between items-center w-[1310px]" style={{ fontFamily: 'Poppins' }}>
          <p className="text-[19px] text-[#FFFFFF]">Product</p>
          <p className="text-[14px] text-[#FFFFFF]">Home - Product</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 w-[1310px] mt-20">
        <div className="col-span-3">
          <FilterOptions />
        </div>
        <div className="w-[996px] col-span-9">
          <ProductInfo product={product} />
        </div>
      </div>
      <ProductDetailPopularProducts />
    </div>
  );
};

export default ProductDetail;
