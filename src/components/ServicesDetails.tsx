"use client";

import {
  Droplet,
  Zap,
  Wrench,
  Plug,
  ClipboardCheck,
  LifeBuoy,
} from "lucide-react";
import ServiceDetailBlock from "./ServiceDetailBlock";

const services = [
  {
    Icon: Droplet,
    title: "Servizi Idraulici",
    desc: "Offriamo una gamma completa di servizi idraulici per abitazioni e aziende.",
    img: "/hero.webp",
    bullet: [
      "Installazione e manutenzione di impianti idraulici",
      "Riparazione di perdite e tubature",
      "Sistemi di riscaldamento e condizionamento",
      "Trattamento dell’acqua",
      "Interventi di emergenza 24/7",
    ],
  },
  {
    Icon: Zap,
    title: "Servizi Elettronici",
    desc: "Soluzioni elettriche ed elettroniche all’avanguardia per ogni esigenza.",
    img: "/hero.webp",
    bullet: [
      "Progettazione e installazione di impianti elettrici",
      "Automazione domestica e industriale",
      "Sistemi di sicurezza e videosorveglianza",
      "Illuminazione e domotica",
      "Certificazioni e collaudi normativi",
    ],
    reversed: true,
  },
  {
    Icon: Wrench,
    title: "Manutenzione",
    desc: "Servizi di manutenzione preventiva e correttiva per tutti i tipi di impianti.",
    img: "/hero.webp",
    bullet: [
      "Controlli periodici programmati",
      "Interventi di manutenzione ordinaria",
      "Riparazioni guasti e malfunzionamenti",
      "Sostituzione di componenti usurati",
      "Aggiornamento impianti esistenti",
    ],
  },
  {
    Icon: Plug,
    title: "Installazione",
    desc: "Installazione professionale con attenzione ai dettagli e alla sicurezza.",
    img: "/hero.webp",
    bullet: [
      "Nuovi impianti idraulici o elettrici",
      "Montaggio dispositivi domotici",
      "Pannelli solari e fotovoltaici",
      "Sistemi di climatizzazione",
      "Messa a norma impianti esistenti",
    ],
    reversed: true,
  },
  {
    Icon: ClipboardCheck,
    title: "Consulenza",
    desc: "Consulenza tecnica per aiutarti a scegliere le soluzioni più adatte.",
    img: "/hero.webp",
    bullet: [
      "Analisi preliminare delle esigenze",
      "Preventivi dettagliati",
      "Progettazione su misura",
      "Gestione normative e burocrazia",
      "Valutazioni di efficienza energetica",
    ],
  },
  {
    Icon: LifeBuoy,
    title: "Assistenza",
    desc: "Assistenza tecnica rapida e affidabile in caso di guasti o emergenze.",
    img: "/hero.webp",
    bullet: [
      "Supporto telefonico",
      "Interventi d’emergenza 24/7",
      "Risoluzione rapida problemi tecnici",
      "Garanzia sugli interventi effettuati",
      "Reperibilità durante i giorni festivi",
    ],
    reversed: true,
  },
];

export default function ServicesDetails() {
  return (
    <>
      {services.map((s) => (
        <ServiceDetailBlock key={s.title} {...s} />
      ))}

      {/* CTA finale */}
      <section className="bg-[#5eb3e9] py-20 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold">
          Hai bisogno di un servizio specifico?
        </h3>
        <p className="mt-4 max-w-xl mx-auto">
          Contattaci per discutere le tue esigenze e ricevere un preventivo personalizzato.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+391234567890"
            className="inline-block px-6 py-4 text-sm font-medium text-white shadow transform transition-all duration-200 hover:scale-105 rounded-md"
            style={{ backgroundColor: "#21455b" }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = "#21455b"; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#21455b"; e.currentTarget.style.color = "#ffffff"; }}
          >
            Chiama ora
          </a>
          <a
            href="mailto:info@idelsystems.it"
            className="inline-block px-6 py-4 text-sm font-medium text-white shadow transform transition-all duration-200 hover:scale-105 rounded-md"
            style={{ backgroundColor: "#21455b" }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = "#21455b"; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "#21455b"; e.currentTarget.style.color = "#ffffff"; }}
          >
            Invia un messaggio
          </a>
        </div>
      </section>
    </>
  );
}
