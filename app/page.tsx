import HeroSection from "@/components/heroSection";
import HomeInfoSection from "@/components/homeInfoSection";
import HomeEventsSection from "@/components/homeEventsSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />

      <HomeInfoSection />

      <HomeEventsSection />
    </div>
  );
}
