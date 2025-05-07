"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Zap,
  Wrench,
  Plug,
  ClipboardCheck,
  LifeBuoy,
} from "lucide-react";

// Palette colori
const PRIMARY = "#21455b";
const LIGHT_BLUE = "#5eb3e9"; // se serve altrove
const GRAY_BORDER = "#e5e7eb"; // gray-200

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const services: ServiceItem[] = [
  { icon: <Droplet size={24} />, title: "Servizi Idraulici", text: "Installazione, manutenzione e riparazione di impianti idraulici residenziali e commerciali." },
  { icon: <Zap size={24} />, title: "Servizi Elettronici", text: "Progettazione e installazione di sistemi elettrici ed elettronici all’avanguardia." },
  { icon: <Wrench size={24} />, title: "Manutenzione", text: "Interventi di manutenzione preventiva e correttiva per garantire il perfetto funzionamento degli impianti." },
  { icon: <Plug size={24} />, title: "Installazione", text: "Installazione professionale con attenzione a sicurezza, norme e prestazioni." },
  { icon: <ClipboardCheck size={24} />, title: "Consulenza", text: "Analisi tecnica e consulenza personalizzata per individuare le soluzioni più adatte." },
  { icon: <LifeBuoy size={24} />, title: "Assistenza", text: "Supporto rapido e affidabile in caso di guasti o emergenze, 24/7." },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesGrid() {
  return (
    <section className="container mx-auto px-6 py-24">
      {/* Titolo sezione */}
      <header className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          I Nostri Servizi
        </h2>
        <p className="mt-4 text-gray-600">
          Offriamo una gamma completa di servizi idraulici ed elettronici per soddisfare ogni tua esigenza.
        </p>
      </header>

      {/* Griglia delle card con animazione */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {services.map(({ icon, title, text }) => (
          <motion.div
            key={title}
            className="mx-auto max-w-sm rounded-2xl border p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            style={{ borderColor: GRAY_BORDER }}
            variants={cardVariants}
          >
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(33,69,91,0.1)", color: PRIMARY }}
            >
              {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2" style={{ color: PRIMARY }}>
              {title}
            </h3>
            <p className="text-sm text-gray-600">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}