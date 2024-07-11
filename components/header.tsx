import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
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
          <NavLink link="/" text="Home" />
          <NavLink link="/about" text="About" />
          <NavLink link="/games" text="Game Collection" />
          <NavLink link="/menu" text="Menu" />
          <NavLink link="/events" text="Events" />
          <NavLink link="/reservations" text="Reservations" />
        </nav>
      </div>
    </header>
  );
}

function NavLink({link, text}: {link: string, text: string}) {
  return (
    <Link href={link} className="hover:underline color-black font-semibold text-2xl">{text}</Link>
  );
}