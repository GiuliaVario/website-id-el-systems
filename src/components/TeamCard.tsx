"use client";
import Image from "next/image";

interface TeamCardProps {
  src: string;
  name: string;
  role: string;
}

export default function TeamCard({ src, name, role }: TeamCardProps) {
  return (
    <div
      className="
        overflow-hidden 
        rounded-xl 
        border 
        text-center 
        shadow-sm 
        transform 
        transition-transform 
        duration-300 
        hover:scale-105 
        hover:shadow-lg
      "
    >
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <h4 className="font-semibold text-[#21455b] mb-1">
          {name}
        </h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
