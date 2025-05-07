import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseGrid from "@/components/WhyChooseGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseGrid />
      <ContactSection />
    </>
  );
}
