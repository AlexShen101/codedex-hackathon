export default function HeroSection() {
  return (
    <div className="hero-section  bg-hero-black text-white flex justify-center items-center w-full">
      <div className="desktop-container w-full hero-section text-white p-8 flex justify-between items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl font-bold z-10">Make a Reservation for Your Event Today!</h1>
          <button className="w-[60%] mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-white/50 shadow-lg transition transform hover:scale-105">Reserve Now</button>
        </div>
        <img
          src="/chess.png"
          alt="chess pieces"
          className="mt-16 w-1/2"
        />
      </div>
    </div>
  );
}
