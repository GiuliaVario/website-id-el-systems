import ServiziHero from "@/components/ServiziHero";
import ServicesDetails from "@/components/ServicesDetails";

export const metadata = {
  title: "I nostri servizi",
};

export default function Servizi() {
  return (
    <>
      <ServiziHero />
      <ServicesDetails />
    </>
  );
}
