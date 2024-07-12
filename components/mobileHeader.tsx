"use client";

import { useState } from "react";
import NavLink from "./navLink";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent w-full h-screen">
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-neutral-300">
        <div className="flex items-center">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-neutral-300`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
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
