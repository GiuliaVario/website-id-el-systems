import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Soluzione: evita ogni tipizzazione esterna, accetta qualsiasi tipo di props
export default async function Prodotto({ params }: any) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}


