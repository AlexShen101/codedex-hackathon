import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="hero-section bg-black text-white p-8 flex justify-between items-center font-urbanist">
            <div className="mt-8 mb-20">
                <h1 className="text-[5rem] font-bold mb-16  ">Hungry from Playing?</h1>
                <p className="text-[3rem] font-semibold">Grab a quick snack!</p>
            </div>
            <Image src="/boba_hero_image.png" alt="Hand holding a bubble tea" width={150} height={150} className="w-1/4"/>
        </div>
    );
}
