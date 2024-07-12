import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaInstagramSquare,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex w-full justify-between bg-black mt-4">
      <div className="flex justify-between p-5 w-full desktop-container">
        <div className="footer-logo">
          <Image
            src="/sipnplay2.png"
            width={512}
            height={512}
            className="h-[84px] w-[84px] min-w-[84px] min-h-[84px]"
            alt="SipnPlay Logo"
          />{" "}
        </div>
        <div className="flex flex-col">
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/games"
          >
            Game Collection
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/events"
          >
            Events
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline text-xl font-semibold"
            href="/reservations"
          >
            Reservations
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl mb-1.5 font-semibold text-white">Company</h3>
          <Link className="text-beige mb-1.5 hover:underline" href="/feedback">
            Submit Feedback
          </Link>
          <Link className="text-beige mb-1.5 hover:underline" href="/news">
            Press
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl mb-1.5 font-semibold text-white">
            Contact Us
          </h3>
          <Link
            className="text-beige mb-1.5 hover:underline flex items-center gap-2"
            href="tel:+1718971684"
          >
            <FaPhone /> 1 (718) 971-1684
          </Link>
          <Link
            className="text-beige mb-1.5 hover:underline flex items-center gap-2"
            href="mailto:sipnplaynyc@gmail.com"
          >
            <FaEnvelope />
            <span>sipnplaynyc@gmail.com</span>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            className="text-beige text-4xl mb-1.5 mt-4"
            href="https://www.instagram.com/sipnplaynyc"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            className="text-beige text-4xl mb-1.5 mt-4"
            href="https://www.tiktok.com/@sipnplaynycofficial"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
}
