import PageHero from "@/components/PageHero";
import CatalogGrid from "@/components/CatalogGrid";

export const metadata = { title: "Catalogo prodotti" };

export default function CatalogoProdotti() {
  return (
    <>
      <PageHero
        title="Catalogo Prodotti"
        subtitle="Esplora la nostra selezione di oltre 800 prodotti di alta qualità per il settore idraulico ed elettronico."
      />
      <CatalogGrid />
    </>
  );
}
