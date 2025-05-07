import PageHero from "@/components/PageHero";
import ContactCards from "@/components/ContactCards";

export const metadata = {
  title: "Contattaci",
};

export default function Contatti() {
  return (
    <>
      <PageHero
        title="Contattaci"
        subtitle="Siamo a tua disposizione per qualsiasi necessità. Contattaci per un preventivo gratuito o per richiedere informazioni sui nostri servizi."
      />

      <ContactCards />

      {/* Orari di apertura */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
         <h2 className="text-2xl md:text-3xl font-extrabold text-[#21455b] mb-6">
            Orari di apertura
          </h2>

          <div className="max-w-md mx-auto text-sm">
            <div className="flex justify-between border-b py-2">
              <span>Lunedì - Venerdì</span>
              <span>9:00 - 17:00</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Sabato</span>
              <span>9:00 - 12:00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Domenica e festivi</span>
              <span>Chiuso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
