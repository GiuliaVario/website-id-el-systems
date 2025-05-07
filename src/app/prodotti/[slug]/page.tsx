import ProductPage from "@/components/ProductPage";
import { products } from "@/data/products";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function Prodotto({ params }: PageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <h1 className="text-center py-24">Prodotto non trovato</h1>;
  }

  return <ProductPage product={product} />;
}
