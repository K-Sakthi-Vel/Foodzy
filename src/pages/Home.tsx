// file: src/pages/Home.tsx
import DailyBestSells from '../components/DailyBestSells';
import DealsOfTheDay from '../components/DealsOfTheDay';
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import PromotionalBanners from '../components/PromotionalBanners';
import SubscribeBanner from '../components/SubscribeBanner';
import OurPromises from '../components/OurPromises';

export default function Home() {
  return (
    <div>
      <Hero />
      <PromotionalBanners />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <SubscribeBanner />
      <OurPromises/>
    </div>
  );
}
