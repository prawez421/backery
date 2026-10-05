import CakesHero from "@/components/cakes/CakesHero";
import CakesGrid from "@/components/cakes/CakesGrid";

export default function CakesPage() {
  return (
    <main className="min-h-screen bg-[#fff9f6]">
      <CakesHero />
      <CakesGrid />
    </main>
  );
}