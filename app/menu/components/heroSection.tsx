export default function HeroSection() {
    return (
        <div className="hero-section bg-black text-white p-8 flex justify-between items-center font-urbanist">
            <div className="mt-8">
                <h1 className="text-4xl font-bold">Hungry from Playing?</h1>
                <p className="text-xl">Grab a quick snack!</p>
            </div>
            <img src="https://placehold.co/150x150" alt="Hand holding a bubble tea" className="w-1/4" />
        </div>
    );
}
