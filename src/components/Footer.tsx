"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "I nostri servizi", href: "/servizi" },
  { label: "Catalogo", href: "/prodotti" },
  { label: "Contatti", href: "/contatti" },
];

const SERVICES = [
  "Servizi idraulici",
  "Servizi elettronici",
  "Assistenza tecnica",
  "Progettazione",
  "Consulenza",
];

export default function Footer() {
  return (
    <footer className="bg-[#21455b] text-white">
      <div className="container mx-auto px-4 md:pl-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h3 className="text-xl font-bold">Id.el.systems</h3>
          <p className="text-sm">
            Servizi idraulici ed elettronici professionali per privati e aziende.
            Assistenza qualificata, progettazione e installazione.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:brightness-110 transition">
              <Facebook size={20} color="#5eb3e9" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:brightness-110 transition">
              <Instagram size={20} color="#5eb3e9" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:brightness-110 transition">
              <Linkedin size={20} color="#5eb3e9" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold mb-2">Collegamenti rapidi</h3>
          <ul className="space-y-1 text-sm">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#5eb3e9] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold mb-2">I nostri servizi</h3>
          <ul className="space-y-1 text-sm">
            {SERVICES.map((item) => (
              <li
                key={item}
                className="hover:text-[#5eb3e9] transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <h3 className="text-xl font-bold mb-2">Contattaci</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <MapPin size={18} className="mt-1 mr-2 text-[#5eb3e9]" />
              <span>Via Italia 123<br />00100 Roma (RM)</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 text-[#5eb3e9]" />
              <Link
                href="tel:+391234567890"
                className="hover:text-[#5eb3e9] transition-colors"
              >
                +39 123 456 7890
              </Link>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 text-[#5eb3e9]" />
              <Link
                href="mailto:info@hydroelectro.it"
                className="hover:text-[#5eb3e9] transition-colors"
              >
                info@hydroelectro.it
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-8 pt-6 pb-6 text-center text-sm text-white/80">
        <p className="mb-2">
          © {new Date().getFullYear()} Id.el.systems. Tutti i diritti riservati.
        </p>
        <p>P.IVA 01234567890</p>
      </div>
    </footer>
  );
}
