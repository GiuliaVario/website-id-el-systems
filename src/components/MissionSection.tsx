"use client";
import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

const DARK_BLUE = "#21455b";

const values = [
  {
    title: "Qualità",
    text: "Utilizziamo solo materiali e componenti di alta qualità, garantendo durata e affidabilità in ogni intervento.",
    icon: <CheckCircle size={24} className="text-[#21455b]" />,
  },
  {
    title: "Innovazione",
    text: "Ci manteniamo costantemente aggiornati sulle nuove tecnologie, offrendo soluzioni all’avanguardia e sostenibili.",
    icon: <Zap size={24} className="text-[#21455b]" />,
  },
  {
    title: "Affidabilità",
    text: "Rispettiamo scadenze e preventivi, garantendo trasparenza e professionalità in ogni fase del lavoro.",
    icon: <ShieldCheck size={24} className="text-[#21455b]" />,
  },
];

export default function MissionSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-16 text-center">
        {/* Titolo in blu scuro */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#21455b]">
          La Nostra Missione
        </h2>

        {/* Descrizione */}
        <p className="text-gray-600 mb-12">
          La nostra missione è fornire soluzioni idrauliche ed elettroniche
          innovative e di qualità, garantendo sempre la massima soddisfazione
          del cliente e rispettando l’ambiente.
        </p>

        {/* Griglia di card */}
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, text, icon }) => (
            <div
              key={title}
              className="
                bg-white 
                rounded-2xl 
                shadow-md 
                p-8 
                text-center 
                transition-transform duration-300 transform 
                hover:shadow-lg hover:-translate-y-1
              "
            >
              {/* Cerchio grigio con icona blu */}
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                {icon}
              </div>

              {/* Titolo della card blu */}
              <h3 className="text-xl font-semibold text-[#21455b] mb-2">
                {title}
              </h3>

              {/* Testo */}
              <p className="text-gray-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


