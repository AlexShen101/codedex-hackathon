import GameRow from "./components/gameRow";
import HeroSection from "./components/heroSection";

export default async function Games() {
  const res = await fetch("http://127.0.0.1:3000/api/games");
  const categories = await res.json();

  // return JSON.stringify(data); //<h1>Game page</h1>;
  return (
    <div className="w-full">
      <HeroSection></HeroSection>
      <div className="mt-6 w-full flex flex-col items-center">
        <div className="flex container flex-col space-y-[50px]">
          {categories.data.map((category: any) => {
            return <GameRow category={category}></GameRow>;
          })}
        </div>
      </div>
    </div>
  );
}
