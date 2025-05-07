"use client";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 md:pl-16 md:pr-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Testo */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#21455b]">
            La Nostra Storia
          </h2>
          <p>
            HydroElectro nasce nel 1995 dalla passione di due tecnici
            specializzati, Marco Rossi e Paolo Bianchi, con l’obiettivo di offrire
            servizi idraulici ed elettronici di alta qualità.
          </p>
          <p>
            Nel tempo l’azienda è cresciuta, ampliando il team e le competenze, ma
            mantenendo sempre i valori di professionalità, attenzione al cliente e
            innovazione tecnologica.
          </p>
          <p>
            Oggi HydroElectro è un punto di riferimento nel settore, con clienti
            in tutta Italia e un catalogo di oltre 800 articoli selezionati per
            qualità e affidabilità.
          </p>
        </div>

        {/* Immagine */}
        <div className="relative w-full h-48 md:h-64 lg:h-80">
         <Image
           src="/chi-siamo.webp"
           alt="La nostra azienda"
           fill
           className="rounded-lg object-cover"
           priority
         />
       </div>
      </div>
    </section>
  );
}
