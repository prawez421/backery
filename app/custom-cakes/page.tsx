import CustomCakeHero from "@/components/custom-cakes/CustomCakeHero";
import CakeOccasions from "@/components/custom-cakes/CakeOccasions";
import CustomCakeForm from "@/components/custom-cakes/CustomCakeForm";
import CakeDesignGallery from "@/components/custom-cakes/CakeDesignGallery";
import HowItWorks from "@/components/custom-cakes/HowItWorks";
import CustomCakeCTA from "@/components/custom-cakes/CustomCakeCTA";

export default function CustomCakesPage() {
  return (
    <main>
      <CustomCakeHero />

      <CakeOccasions />

      <CakeDesignGallery />

      <HowItWorks />

      <CustomCakeForm />

      <CustomCakeCTA />
    </main>
  );
}