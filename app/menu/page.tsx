import HeroSection from "./components/heroSection";
import MenuButtons from "./components/menuButtons";
import MenuCarousel from "./components/menuCarousel";

export default async function Menu() {
  const res = await fetch("http://127.0.0.1:3000/api/menu-items");
  const data = await res.json();

  return (
    <div className="text-center bg-white text-black">
      <HeroSection />
      <MenuButtons />
      <div className="py-8">
        <div className="bg-gray-300 p-8 inline-block"><img src="https://placehold.co/150x150" alt="3D image" /></div>
      </div>
      <MenuCarousel />
    </div>
  )
}
