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
    <div
      className={`
      group flex flex-col p-6 rounded-xl h-full
      bg-gray-800 
      border border-gray-700 
      transition-all duration-300
      hover:border-cyan-400 
      hover:shadow-lg
    `}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon size={24} />
      </div>
      <h3
        className="text-xl font-semibold mb-2 text-white"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
