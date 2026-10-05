import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurProcess from "@/components/about/OurProcess";
import MeetOurBakers from "@/components/about/MeetOurBakers";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurValues />
      <WhyChooseUs />
      <OurProcess />
      <MeetOurBakers />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}