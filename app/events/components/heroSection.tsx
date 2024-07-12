import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-hero-black relative flex flex-col items-center justify-center h-70v overflow-hidden">
      <Image src="/magic_the_gathering/logo.png" alt="Magic The Gathering logo" width={768} height={280} className="absolute top-0 mb-8" />
      <div className="top-0 left-0 w-full h-full flex items-center justify-center">
        <Image src="/magic_the_gathering/p1.png" alt="Character 1" width={484} height={542} className="absolute hidden md:inline left-0 top-[23%] h-[85%]" />
        <Image src="/magic_the_gathering/p2.png" alt="Character 2" width={855} height={473} className="absolute hidden md:inline left-0 top-[35%] h-[80%]" />
        <Image src="/magic_the_gathering/p3.png" alt="Character 3" width={447} height={631} className="absolute hidden md:inline right-0 top-[10%] h-[100%]" />
      </div>
      <div className="absolute bottom-10 right-10 text-center">
        <p className="text-4xl xl:text-[3rem] xl:leading-[3rem] mb-4 text-white font-bold text-right max-w-[60%] break-words ml-auto">Want to Join the Sip & Play Community?</p>
        <button className="bg-white text-black py-4 px-8 sm:w-[60%] rounded-full md:w-[30%] shadow-white shadow-md font-semibold text-xl transition transform hover:scale-105 ml-auto float-right">Join the Discord</button>
      </div>
    </div>
  );
}
