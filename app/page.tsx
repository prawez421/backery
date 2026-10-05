import BakeryCategories from "@/components/home/BakeryCategories";
import BestSellersSection from "@/components/home/BestSellersSection";
import CelebrationCakeSection from "@/components/home/CelebrationCakeSection";
import CTASection from "@/components/home/CTASection";
import FreshDeliverySection from "@/components/home/FreshDeliverySection";
import HeroSection from "@/components/home/HeroSection";
import HeroStats from "@/components/home/HeroStats";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroStats />
      <BakeryCategories />
      <CelebrationCakeSection />
      <BestSellersSection />
      <FreshDeliverySection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}