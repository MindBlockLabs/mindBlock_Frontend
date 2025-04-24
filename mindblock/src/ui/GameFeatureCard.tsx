import "../App.css";
interface GameFeatureCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

export function GameFeatureCard({
  icon: Icon,
  title,
  description,
}: GameFeatureCardProps) {
  return (
    <div className="group hover:cursor-pointe flex flex-col p-6 transition-al duratio-300 rounded-xl border  hover:border-[var(--color-secondary-glow)] border-purple-950 opacit-80 hover:opacit-100">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
        <Icon size={24} />
      </div>
      <h3
        className="text-xl fon-semibold font-[var(--font-primary)] mb-2 text-white/90"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
