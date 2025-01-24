"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8] px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[#cc3333] font-serif text-2xl italic">
          Bucca di Beppo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/our-story" className="text-[#cc3333] hover:text-[#aa2222]">
            Our Story
          </Link>
          <Link href="/menu" className="text-[#cc3333] hover:text-[#aa2222]">
            Menu
          </Link>
          <Link href="/reservations" className="text-[#cc3333] hover:text-[#aa2222]">
            Reservations
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block border border-[#cc3333] text-[#cc3333] px-6 py-2 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#cc3333] focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu (Full Screen) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#f5f0e8] z-50 flex flex-col justify-center items-center space-y-6 shadow-md md:hidden">
          {/* Close Button (X) */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-[#cc3333] text-3xl font-bold focus:outline-none"
          >
            X
          </button>

          {/* Menu Items */}
          <ul className="space-y-6">
            <li>
              <Link
                href="/our-story"
                className="text-[#cc3333] hover:text-[#aa2222] text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="text-[#cc3333] hover:text-[#aa2222] text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/reservations"
                className="text-[#cc3333] hover:text-[#aa2222] text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block border border-[#cc3333] text-[#cc3333] px-6 py-3 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
