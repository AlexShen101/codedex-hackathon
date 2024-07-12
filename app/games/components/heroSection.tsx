export default function HeroSection() {
  return (
    <div className="hero-section bg-black text-white flex justify-center items-center w-full">
      <div className="desktop-container w-full hero-section text-white p-8 flex justify-between items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold">Enjoy with family & friends</h1>
          <p className="text-xl">With over 300 board games to choose from!</p>
        </div>
        <img
          src="/cards.png"
          alt="Hand holding a bubble tea"
          className="w-1/4"
        />
      </div>
    </div>
  );
}
