"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactCards() {
  return (
    <section className="container mx-auto grid max-w-5xl gap-6 px-4 py-16 md:grid-cols-3">
      {/* Indirizzo */}
      <div className="rounded-xl border p-6 shadow-sm space-y-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center gap-2">
          <MapPin size={24} className="text-[#21455b]" />
          <h3 className="font-semibold text-[#21455b]">Indirizzo</h3>
        </div>
        <p>
          Via Italia 123<br />00100 Roma (RM)<br />Italia
        </p>
        <button
          className="block w-full rounded bg-[#21455b] py-2 text-center text-sm font-semibold text-white shadow transform transition-all duration-200 hover:scale-105 hover:bg-[#5eb3e9]"
          disabled
        >
          Indicazioni stradali
        </button>
      </div>

      {/* Contatti */}
      <div className="rounded-xl border p-6 shadow-sm space-y-4 transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center gap-2">
          <Phone size={24} className="text-[#21455b]" />
          <h3 className="font-semibold text-[#21455b]">Telefono</h3>
        </div>
        <p>+39 123 456 7890</p>
        <Link
          href="tel:+391234567890"
          className="block w-full rounded bg-[#21455b] py-2 text-center text-sm font-semibold text-white shadow transform transition-all duration-200 hover:scale-105 hover:bg-[#5eb3e9]"
        >
          Chiama ora
        </Link>

        <div className="flex items-center gap-2 pt-4">
          <Mail size={24} className="text-[#21455b]" />
          <h3 className="font-semibold text-[#21455b]">Email</h3>
        </div>
        <p>info@hydroelectro.it</p>
        <Link
          href="mailto:info@hydroelectro.it"
          className="block w-full rounded bg-[#21455b] py-2 text-center text-sm font-semibold text-white shadow transform transition-all duration-200 hover:scale-105 hover:bg-[#5eb3e9]"
        >
          Invia un messaggio
        </Link>
      </div>

      {/* QR */}
      <div className="rounded-xl border p-6 shadow-sm space-y-4 text-center transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
        <h3 className="font-semibold text-[#21455b]">Scansiona per contattarci</h3>
        <p className="text-sm text-gray-600">
          Inquadra il codice QR con il tuo smartphone per salvarci in rubrica!
        </p>
        <div className="mx-auto mt-2 h-40 w-40 relative">
          <Image
            src="/qr.png"
            alt="QR contatti"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
