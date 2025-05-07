interface ValueCardProps {
    title: string;
    text: string;
  }
  
  export default function ValueCard({ title, text }: ValueCardProps) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow-sm border hover:shadow-md transition">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
    );
  }
  