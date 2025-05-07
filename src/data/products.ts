export interface Product {
  slug: string;
  code: string;
  category: string;    // es. "Elettronica", "Ricambi", ecc.
  name: string;
  thumb: string;
  short: string;
  gallery: string[];   // immagini per la scheda prodotto
  description: string; // descrizione estesa
  specs: string[];     // elenco puntato specifiche
}

/* Dataset di esempio – puoi duplicare/modificare a piacere */
export const products: Product[] = [
  {
    slug: "articolo-01-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 1 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-02-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 2 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  {
    slug: "articolo-03-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 3 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-04-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 4 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  {
    slug: "articolo-05-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 5 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-06-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 6 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  {
    slug: "articolo-07-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 7 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-08-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 8 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  {
    slug: "articolo-09-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 9 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-10-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 10 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  {
    slug: "articolo-11-elettronica",
    code: "EL‑001",
    category: "Elettronica",
    name: "Articolo 11 – Elettronica",
    thumb: "/products/images.jpeg",
    short: "Descrizione sintetica articolo 1…",
    gallery: ["/products/images.jpeg", "/products/images.jpeg"],
    description:
      "Descrizione estesa dell’articolo 1: specifiche tecniche, materiali, applicazioni e vantaggi.",
    specs: ["Tensione 220 V", "Potenza 500 W", "Garanzia 2 anni"],
  },

  {
    slug: "articolo-12-attrezzatura",
    code: "ATT‑002",
    category: "Attrezzatura",
    name: "Articolo 12 – Attrezzatura",
    thumb: "/products/images1.jpeg",
    short: "Breve descrizione articolo 2…",
    gallery: ["/products/images1.jpeg", "/products/images1.jpeg"],
    description:
      "Descrizione estesa dell’articolo 2. Materiali costruttivi, certificazioni, modalità d’uso.",
    specs: ["Acciaio inox", "Portata 10 L/min", "Peso 5 kg"],
  },

  


  /* 👉 aggiungi altri articoli con gli stessi campi 👈 */
];

