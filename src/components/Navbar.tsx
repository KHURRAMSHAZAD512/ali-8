"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          FinVerse 🌍
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/converter" className="hover:text-yellow-300 transition">Converter</Link>
          <Link href="/analytics" className="hover:text-yellow-300 transition">Analytics</Link>
          <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          <Link href="/navbar" className="hover:text-yellow-300 transition">Navbar</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 flex flex-col space-y-4 py-6 text-center text-lg font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/converter" onClick={() => setMenuOpen(false)}>Converter</Link>
          <Link href="/analytics" onClick={() => setMenuOpen(false)}>Analytics</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/navbar" onClick={() => setMenuOpen(false)}>Navbar</Link>
        </div>
      )}
    </nav>
  );
}
