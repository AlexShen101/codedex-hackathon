export default function HeroSection() {
  return (
    <div className="hero-section bg-hero-black text-white flex justify-center items-center w-full">
      <div className="desktop-container w-full hero-section text-white p-8 flex justify-between items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold">
            Want to join the Sip & Play community?
          </h1>
          <button>Join now</button>
        </div>
        <img src="/image.png" alt="Tea and dice" className="w-1/4" />
      </div>
    </div>
  );
}
