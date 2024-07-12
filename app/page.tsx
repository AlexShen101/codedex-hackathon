import HeroSection from "@/components/heroSection";
import HomeEventsSection from "@/components/homeEventsSection";
import HomeInfoSection from "@/components/homeInfoSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />

      <HomeInfoSection />

      <HomeEventsSection />
    </div>
  );
}
