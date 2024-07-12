export default function HeroSection() {
  return (
    <div className="hero-section bg-black text-white flex justify-center items-center w-full">
      <div className="container hero-section text-white p-8 flex justify-between items-center">
        <div className="mt-8">
          <h1 className="text-4xl font-bold">Hungry from Playing?</h1>
          <p className="text-xl">Grab a quick snack!</p>
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
