
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import PageHero from "./PageHero";

export default function ProductPage({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* HERO blu */}
      <PageHero
        title={product.name}
        subtitle={`Scopri i dettagli del prodotto ${product.name} (cod. ${product.code})`}
      />

      {/* Contenuto centrale */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Galleria immagini */}
          <div>
            <div className="relative h-56 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow">
              <Image
                src={product.gallery[active]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {product.gallery.length > 1 && (
              <div className="mt-4 flex gap-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActive(idx)}
                    className={`relative h-20 w-24 rounded overflow-hidden border transition ring-offset-2 ${
                      idx === active
                        ? "ring-2 ring-[#21455b]"
                        : "hover:opacity-75"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Scheda descrizione */}
          <div className="rounded-xl border p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-extrabold text-[#21455b]">{product.name}</h2>
            <p className="text-sm text-[#21455b] font-medium">{product.category}</p>

            <p className="text-gray-700">{product.description}</p>

            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {product.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                className="flex-1 rounded-xl bg-[#21455b] text-white text-sm font-medium px-4 py-2 transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
                disabled
              >
                Scheda tecnica Download
              </button>

              <Link
                href={`mailto:info@idelsystems.it?subject=Preventivo%20per%20${product.code}`}
                className="flex-1 rounded-xl bg-[#21455b] text-white text-sm font-medium px-4 py-2 text-center transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
              >
                Richiedi preventivo
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
