import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between p-4 bg-[#fdf6e4]">
        <div className="flex items-center">
          <Image
            src="/sipnplay.png"
            width={512}
            height={512}
            className="h-20 w-20"
            alt="SipnPlay Logo"
          />
        </div>
        <nav className="mr-8 flex space-x-8 text-lg text-black">
          <Link href="/" className="hover:underline color-black">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/games" className="hover:underline">Game Collection</Link>
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/reservations" className="hover:underline">Reservations</Link>
        </nav>
      </div>
    </header>
  );
}