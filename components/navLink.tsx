"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  link,
  text,
  onClick
}: {
  link: string;
  text: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  const active = link === "/" ? pathname === "/" : pathname.includes(link);

  return (
    <Link
      href={link}
      className={`${
        active ? "text-black" : "text-light-brown"
      } hover:text-black font-semibold text-xl block min-h-12 px-4 flex flex-col justify-center transition duration-[0.1s]`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
