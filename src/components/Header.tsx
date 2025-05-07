"use client";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

// Palette del logo
const DARK_BLUE = "#21455b";
const LIGHT_BLUE = "#5eb3e9";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "CHI SIAMO", href: "/chi-siamo" },
  { label: "I NOSTRI SERVIZI", href: "/servizi" },
  { label: "CATALOGO PRODOTTI", href: "/prodotti" },
  { label: "CONTATTI", href: "/contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Gestione hover per link
  const onLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const s = e.currentTarget.style;
    s.color = LIGHT_BLUE;
    s.borderTop = `2px solid ${LIGHT_BLUE}`;
    s.borderBottom = `2px solid ${LIGHT_BLUE}`;
  };

  const onLinkOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const s = e.currentTarget.style;
    s.color = DARK_BLUE;
    s.borderTop = '2px solid transparent';
    s.borderBottom = '2px solid transparent';
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.webp" alt="Id.el.systems" className="h-18 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative text-lg font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 px-1"
              style={{
                color: DARK_BLUE,
                borderTop: '2px solid transparent',
                borderBottom: '2px solid transparent',
              }}
              onMouseOver={onLinkHover}
              onMouseOut={onLinkOut}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Call-to-action */}
        <Link
          href="tel:+391234567890"
          className="hidden md:inline-flex items-center gap-3 rounded-md px-6 py-3 text-lg font-medium text-white shadow transform transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: DARK_BLUE }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = LIGHT_BLUE)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = DARK_BLUE)}
        >
          <Phone size={20} /> Chiama ora
        </Link>

        {/* Burger */}
        <button
          className="md:hidden"
          aria-label="Apri menu"
          onClick={() => setOpen(!open)}
        >
          <Menu size={28} color={DARK_BLUE} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block px-6 py-4 text-sm font-medium transform transition-all duration-200 hover:scale-105"
              style={{
                color: DARK_BLUE,
                borderTop: '2px solid transparent',
                borderBottom: '2px solid transparent',
              }}
              onClick={() => setOpen(false)}
              onMouseOver={onLinkHover}
              onMouseOut={onLinkOut}
            >
              {label}
            </Link>
          ))}
          <Link
            href="tel:+391234567890"
            className="block px-6 py-4 text-sm font-medium text-white bg-[${DARK_BLUE}] transform transition-all duration-200 hover:scale-105"
            onClick={() => setOpen(false)}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = LIGHT_BLUE)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = DARK_BLUE)}
          >
            <Phone size={18} className="inline mr-2" />
            Chiama ora
          </Link>
          {/* Dentro il menu mobile */}
        </div>
      )}
    </header>
  );
}
