"use client";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-white" />
            <div>
              <p className="text-white font-medium text-sm leading-tight">Adv. Pinki Goswami</p>
              <p className="text-zinc-400 text-xs leading-tight">Criminal Lawyer · Jodhpur</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-zinc-400 hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/917073318678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-sm font-medium px-4 py-2 rounded hover:bg-zinc-200 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 text-sm py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/917073318678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-sm font-medium px-4 py-2 rounded text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
