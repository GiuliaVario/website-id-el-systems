"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

// Palette colori (stessi della navbar)
const DARK_BLUE = "#21455b";
const LIGHT_BLUE = "#5eb3e9";

export default function Hero() {
  // Stato hover per i pulsanti
  const [hoverService, setHoverService] = useState(false);
  const [hoverPhone, setHoverPhone] = useState(false);

  return (
    <section
      style={{ backgroundColor: DARK_BLUE }}
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 flex flex-col md:flex-row items-center">
        {/* Colonna testo */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-white">
            Servizi Idraulici <br/>Elettronici Professionali
          </h1>
          <p className="text-base md:text-lg text-white">
            Soluzioni complete per installazione, manutenzione e riparazione.<br/>
            Esperienza e competenza al tuo servizio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Pulsante Servizi */}
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow transform transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: hoverService ? LIGHT_BLUE : '#ffffff',
                color: hoverService ? '#ffffff' : DARK_BLUE
              }}
              onMouseOver={() => setHoverService(true)}
              onMouseOut={() => setHoverService(false)}
            >
              Scopri i nostri servizi
              <ArrowRight size={16} />
            </Link>

            {/* Pulsante Contattaci */}
            <Link
              href="tel:+391234567890"
              className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow transform transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: hoverPhone ? LIGHT_BLUE : '#ffffff',
                color: hoverPhone ? '#ffffff' : DARK_BLUE
              }}
              onMouseOver={() => setHoverPhone(true)}
              onMouseOut={() => setHoverPhone(false)}
            >
              <Phone size={16} />
              Contattaci
            </Link>
          </div>
        </div>

        {/* Colonna immagine */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative h-64 md:h-96">
          <Image
            src="/hero.webp"
            alt="Esempio di impianto professionale"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
