"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Clock, Users } from "lucide-react";

// Palette colori
const PRIMARY = "#21455b";
const SECONDARY = "#5eb3e9";
const BG_GRAY = "#f9fafb"; // gray-50 shade
const TEXT_GRAY = "#4b5563"; // gray-700 shade
const BORDER_GRAY = "#e5e7eb"; // gray-200 shade

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const features: FeatureItem[] = [
  {
    icon: <CheckCircle size={28} />,
    title: "Qualità Garantita",
    text: "Utilizziamo materiali certificati e tecnologie all’avanguardia per risultati duraturi.",
  },
  {
    icon: <Heart size={28} />,
    title: "Assistenza Dedicata",
    text: "Il nostro team è sempre disponibile per consulenze e supporto rapido.",
  },
  {
    icon: <Clock size={28} />,
    title: "Tempi Rapidi",
    text: "Interventi tempestivi per ridurre al minimo disagi e fermi operativi.",
  },
  {
    icon: <Users size={28} />,
    title: "Esperienza & Competenza",
    text: "Anni di esperienza nel settore per progetti su misura e di qualità.",
  },
];

// Variants animazione
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseGrid() {
  return (
    <section style={{ backgroundColor: BG_GRAY }} className="py-24">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: PRIMARY }}>
            Perché Sceglierci
          </h2>
          <p className="mt-4 text-base" style={{ color: TEXT_GRAY }}>
            Ecco cosa ci distingue nel settore e rende i nostri servizi unici.
          </p>
        </header>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {features.map(({ icon, title, text }, idx) => (
            <motion.div
              key={idx}
              className="mx-auto max-w-xs rounded-2xl bg-white border p-6 text-center shadow-sm hover:shadow-md transition cursor-pointer"
              style={{ borderColor: BORDER_GRAY }}
              variants={itemVariants}
            >
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: SECONDARY, color: "#ffffff" }}
              >
                {icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: PRIMARY }}>
                {title}
              </h3>
              <p className="text-sm" style={{ color: TEXT_GRAY }}>
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
