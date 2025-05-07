"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products as data, type Product } from "@/data/products";
import FilterSidebar from "./FilterSidebar";

const PER_PAGE = 6;

export default function CatalogGrid() {
  const [filterText, setFilterText] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => Array.from(new Set(data.map((p) => p.category))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const f = data.filter(
      (p) =>
        (filterCat ? p.category === filterCat : true) &&
        (filterText
          ? (p.name + p.code)
              .toLowerCase()
              .includes(filterText.toLowerCase())
          : true),
    );
    const start = (page - 1) * PER_PAGE;
    return { total: f.length, list: f.slice(start, start + PER_PAGE) };
  }, [filterText, filterCat, page]);

  function handleFilter(text: string, cat: string) {
    setFilterText(text);
    setFilterCat(cat);
    setPage(1);
  }

  return (
    <div className="container mx-auto flex flex-col md:grid max-w-7xl gap-8 px-4 py-24 md:grid-cols-[240px_1fr]">
      {/* sidebar */}
      <div className="md:mb-0 mb-8">
        <FilterSidebar
          categories={categories}
          onFilter={handleFilter}
          onReset={() => handleFilter("", "")}
        />
      </div>

      {/* area prodotti */}
      <div>
        <header className="flex items-end justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#21455b]">Prodotti</h2>
          <span className="text-sm text-gray-500">
            {filtered.total} prodotti trovati
          </span>
        </header>

        {/* griglia card */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {/* paginazione */}
        <Pagination
          page={page}
          total={filtered.total}
          perPage={PER_PAGE}
          onPage={setPage}
        />
      </div>
    </div>
  );
}

/* --- card prodotto --- */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border shadow-sm flex flex-col overflow-hidden">
      <Image
        src={product.thumb}
        alt={product.name}
        width={400}
        height={250}
        className="object-cover h-48 w-full"
      />
      <div className="p-4 flex flex-col flex-grow gap-2 text-sm">
        <span className="text-xs uppercase text-gray-500">
          {product.category}
        </span>
        <h3 className="font-semibold text-[#21455b]">{product.name}</h3>
        <p className="text-gray-600 line-clamp-3">{product.short}</p>
        <div className="mt-auto flex gap-2">
          <Link
            href={`/prodotti/${product.slug}`}
            className="flex-1 rounded-xl bg-[#21455b] text-white text-sm font-medium px-4 py-2 text-center transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
          >
            Dettagli
          </Link>
          <a
            href={`mailto:info@idelsystems.it?subject=Richiesta%20info%20${product.code}`}
            className="flex-1 rounded-xl bg-[#21455b] text-white text-sm font-medium px-4 py-2 text-center transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
          >
            Richiedi info
          </a>
        </div>
      </div>
    </div>
  );
}

/* --- paginazione --- */
function Pagination({
  page,
  total,
  perPage,
  onPage,
}: {
  page: number;
  total: number;
  perPage: number;
  onPage: (n: number) => void;
}) {
  const pages = Math.ceil(total / perPage);
  if (pages <= 1) return null;

  return (
    <nav className="mt-10 flex justify-center gap-1 text-sm">
      {Array.from({ length: pages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPage(i + 1)}
          className={`h-8 w-8 rounded border transition duration-200 ${
            page === i + 1
              ? "bg-[#21455b] text-white"
              : "hover:bg-[#4fc3f7] hover:scale-105 text-gray-700"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </nav>
  );
}
