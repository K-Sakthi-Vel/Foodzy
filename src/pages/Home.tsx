// file: src/pages/Home.tsx
import DailyBestSells from '../components/DailyBestSells';
import DealsOfTheDay from '../components/DealsOfTheDay';
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import PromotionalBanners from '../components/PromotionalBanners';

export default function Home() {
  return (
    <div>
      <Hero />
      <PromotionalBanners />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
    </div>
  );
}
