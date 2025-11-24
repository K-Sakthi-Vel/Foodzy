import products from '../data/products.json';
import PopularProductCard from './PopularProductCard';
import apple from '../assets/products/apple.png';
import coconut from '../assets/products/coconutFlakes.jpg';
import coffee from '../assets/products/coffee.jpg';
import latte from '../assets/products/latte.jpg';
import lemon from '../assets/products/lemon.png';
import macadamia from '../assets/products/macadamia.png';
import moisturer from '../assets/products/moisturer.jpg';
import peanut from '../assets/products/peanutButter.jpg';
import pistachio from '../assets/products/pistachio.jpg';
import watermelon from '../assets/products/watermelon.png';

const imageMap: { [key: string]: string } = {
  'apple.png': apple,
  'coconutFlakes.jpg': coconut,
  'coffee.jpg': coffee,
  'latte.jpg': latte,
  'lemon.png': lemon,
  'macadamia.png': macadamia,
  'moisturer.jpg': moisturer,
  'peanutButter.jpg': peanut,
  'pistachio.jpg': pistachio,
  'watermelon.png': watermelon,
};

const ProductDetailPopularProducts = () => {
  return (
    <section className="w-full pt-15">
      <div className="w-full max-w-[1320px] mx-auto px-4">
        <h2 className="text-[32px] text-[#2B2B2D] font-bold text-center mb-5" style={{fontFamily:'Manrope'}}>
          Popular Products
        </h2>
        <p className="text-[14px] text-[#7A7A7A]  text-base text-center max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.slice(0, 4).map((product) => (
            <PopularProductCard
              key={product.id}
              id={String(product.id)}
              title={product.name}
              price={product.discountedPrice}
              image={imageMap[product.image]}
              type={product.type}
              originalPrice={product.originalPrice}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPopularProducts;
