"use client";
import { useState } from "react";

interface SidebarProps {
  categories: string[];
  onFilter: (text: string, cat: string) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  categories,
  onFilter,
  onReset,
}: SidebarProps) {
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onFilter(text, cat);
  }

  return (
    <aside className="rounded-xl border p-4 shadow-sm sticky top-24 self-start">
      <h2 className="font-semibold mb-4 text-[#21455b] text-lg">Filtra Prodotti</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block mb-1 text-[#21455b] font-medium">Cerca prodotto</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nome, codice articolo…"
            className="w-full rounded border px-2 py-1"
          />
        </div>

        <div>
          <label className="block mb-1 text-[#21455b] font-medium">Categoria</label>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="w-full rounded border px-2 py-1"
          >
            <option value="">Tutte le categorie</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#21455b] py-2 text-white font-medium transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
        >
          Filtra
        </button>

        <button
          type="button"
          onClick={() => {
            setText("");
            setCat("");
            onReset();
          }}
          className="w-full rounded-xl bg-[#21455b] text-white font-medium py-2 transition duration-200 transform hover:bg-[#4fc3f7] hover:scale-105"
        >
          Reset filtri
        </button>
      </form>
    </aside>
  );
}
