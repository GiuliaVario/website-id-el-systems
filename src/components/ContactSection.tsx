"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Colori personalizzati
const PRIMARY = "#21455b";
const SECONDARY = "#5eb3e9";
const LIGHT_BG = "#f9fafb";

// Variants Framer Motion
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactSection() {
  return (
    <>
      {/* Sezione Contatti con QR */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="bg-white"
      >
        <div className="container mx-auto max-w-6xl px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Testo e link contatti */}
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: PRIMARY }}>
              Contattaci facilmente
            </h2>

            <p className="text-lg text-gray-600">
              Siamo sempre disponibili per offrirti assistenza professionale e tempestiva per tutte le tue esigenze idrauliche ed elettroniche.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                href="tel:+391234567890"
                className="font-semibold transition"
                style={{ color: PRIMARY }}
                onMouseEnter={e => e.currentTarget.style.color = SECONDARY}
                onMouseLeave={e => e.currentTarget.style.color = PRIMARY}
              >
                +39 123 456 7890
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="mailto:info@idelsystems.it"
                className="font-semibold transition"
                style={{ color: PRIMARY }}
                onMouseEnter={e => e.currentTarget.style.color = SECONDARY}
                onMouseLeave={e => e.currentTarget.style.color = PRIMARY}
              >
                info@idelsystems.it
              </Link>
            </div>
          </motion.div>

          {/* Card QR */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <div className="w-64 p-6 bg-white rounded-xl border shadow-sm">
              <div className="bg-gray-50 p-2 rounded">
                <Image
                  src="/qr.png"
                  alt="QR per contattarci"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Finale */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ backgroundColor: SECONDARY }}
        className="text-white py-16 text-center"
      >
        <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-extrabold mb-4">
          Hai bisogno di assistenza professionale?
        </motion.h3>
        <motion.p variants={itemVariants} className="max-w-xl mx-auto text-white/90 mb-8">
          I nostri esperti sono pronti ad aiutarti con qualsiasi necessità idraulica o elettronica.
          Contattaci oggi stesso per un preventivo gratuito.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
        <Link
            href="tel:+391234567890"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-white font-medium shadow transition-all duration-200"
            style={{ backgroundColor: PRIMARY, color: '#ffffff' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = SECONDARY;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = PRIMARY;
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <Phone size={20} /> Chiama ora
          </Link>
          <Link
            href="mailto:info@idelsystems.it"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-white font-medium shadow transition-all duration-200"
            style={{ backgroundColor: PRIMARY, color: '#ffffff' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = SECONDARY;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = PRIMARY;
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <Mail size={20} /> Invia un messaggio
          </Link>

          
        </motion.div>
      </motion.section>
    </>
  );
}