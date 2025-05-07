interface PageHeroProps {
    title: string;
    subtitle: string;
  }
  
  export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
      <section className="bg-[#21455b] text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
          <p className="mt-4 text-white/90">{subtitle}</p>
        </div>
      </section>
    );
  }
  