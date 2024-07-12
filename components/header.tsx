import Image from "next/image";
import Link from "next/link";
import NavLink from "./navLink";

export default function Header() {
  return (
    <header className="sticky min-h-[94px] top-0 left-0 right-0 z-50 bg-white border-b border-neutral-300 flex justify-center w-full">
      <div className="desktop-container flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/sipnplaylogo.png"
              width={512}
              height={512}
              className="h-[84px] w-[84px] min-w-[84px] min-h-[84px]"
              alt="SipnPlay Logo"
            />
          </Link>
        </div>
        <nav className="flex h-full text-lg text-black">
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
