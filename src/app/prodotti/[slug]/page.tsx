import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Prodotto({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <h1 className="text-center py-24">Prodotto non trovato</h1>;
  }

  return <ProductPage product={product} />;
}


