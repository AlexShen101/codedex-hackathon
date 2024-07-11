import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-black relative flex flex-col items-center justify-center h-70v overflow-hidden">
      <Image src="/magic_the_gathering/logo.png" alt="Magic The Gathering logo" width={768} height={280} className="absolute top-0 mb-8" />
      <div className="top-0 left-0 w-full h-full flex items-center justify-center">
        <Image src="/magic_the_gathering/p1.png" alt="Character 1" width={484} height={542} className="absolute left-0 top-[23%] h-[85%]" />
        <Image src="/magic_the_gathering/p2.png" alt="Character 2" width={855} height={473} className="absolute left-0 top-[35%] h-[80%]" />
        <Image src="/magic_the_gathering/p3.png" alt="Character 3" width={447} height={631} className="absolute right-0 top-[10%] h-[100%]" />
      </div>
      <div className="absolute bottom-10 right-10 text-center">
        <p className="text-xl mb-4">Want to Join the Sip & Play Community?</p>
        <button className="bg-white text-black py-2 px-4 rounded-full">Join Discord</button>
      </div>
    </div>
  );
}
