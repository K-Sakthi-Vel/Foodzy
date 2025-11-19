// file: src/pages/Home.tsx
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import PromotionalBanners from '../components/PromotionalBanners';

export default function Home() {
  return (
    <div>
      <Hero />
      <PromotionalBanners />
      <PopularProducts />
    </div>
  );
}
