import TeamCard from "./TeamCard";

const team = [
  { src: "/chi-siamo.webp", name: "Marco Rossi", role: "Co‑fondatore e Direttore Tecnico" },
  { src: "/chi-siamo.webp", name: "Paolo Bianchi", role: "Co‑fondatore e Resp. Commerciale" },
  { src: "/chi-siamo.webp", name: "Laura Verdi", role: "Ingegnere Elettronico" },
  { src: "/chi-siamo.webp", name: "Andrea Neri", role: "Specialista Idraulico" },
];

export default function TeamSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#21455b]">
          Il Nostro Team
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600 mb-12">
          Il nostro team è composto da professionisti qualificati e appassionati,
          sempre pronti ad affrontare nuove sfide e trovare le soluzioni più
          adatte alle esigenze dei clienti.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <TeamCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
