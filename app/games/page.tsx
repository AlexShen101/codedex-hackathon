import GameRow from "./components/gameRow";
import HeroSection from "./components/heroSection";

export default async function Games() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/game-categories?populate[games][populate][0]=thumbnail`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_SECRET}`,
      },
    }
  );
  const categories = await res.json();

  return (
    <div className="w-full">
      <HeroSection></HeroSection>
      <div className="mt-6 w-full flex flex-col items-center">
        <div className="flex desktop-container flex-col space-y-[50px]">
          {categories.data.map((category: any) => {
            return <GameRow key={category.id} category={category}></GameRow>;
          })}
        </div>
      </div>
    </div>
  );
}
