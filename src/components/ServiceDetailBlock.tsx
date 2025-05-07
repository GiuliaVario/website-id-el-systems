import Image from "next/image";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ServiceBlockProps {
  title: string;
  desc: string;
  bullet: string[];
  img: string;
  Icon: LucideIcon;
  reversed?: boolean;
}

export default function ServiceDetailBlock({
  title,
  desc,
  bullet,
  img,
  Icon,
  reversed = false,
}: ServiceBlockProps) {
  return (
    <section
      className={`container mx-auto px-13 grid md:grid-cols-2 gap-10 items-start py-16 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Testo */}
      <div>
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-[#21455b]">
          <Icon size={20} className="text-[#21455b]" /> {title}
        </h2>
        <p className="mt-2 mb-4 text-gray-700">{desc}</p>

        <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
          {bullet.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <Link
          href="mailto:info@idelsystems.it?subject=Preventivo%20per%20servizio%20di%20%s"
          className="mt-6 inline-block px-6 py-4 text-sm font-medium text-white shadow transform transition-all duration-200 hover:scale-105 rounded-md"
          style={{ backgroundColor: "#21455b" }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5eb3e9")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#21455b")}
        >
          Richiedi preventivo
        </Link>
      </div>

      {/* Immagine */}
      <div className="relative h-56 md:h-72 lg:h-80">
        <Image
          src={img}
          alt={title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
