import AboutHero from "@/components/about/AboutHero";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurProcess from "@/components/about/OurProcess";
import MeetOurBakers from "@/components/about/MeetOurBakers";
import AboutStats from "@/components/about/AboutStats";
import OurMission from "@/components/about/OurMission";


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhyChooseUs />
      <OurMission />
      <OurProcess />
      <MeetOurBakers />
      <AboutStats />
  
    </main>
  );
}