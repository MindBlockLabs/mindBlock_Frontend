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
    <div className='group hover:cursor-pointer flex flex-col p-6 transition-all duration-300 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 opacity-80 hover:opacity-100'>
      <div className='mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110'>
        <Icon size={24} />
      </div>
      <h3 className='text-xl font-semibold mb-2 text-white/90'>{title}</h3>
      <p className='text-white/60 text-sm leading-relaxed'>{description}</p>
    </div>
  );
}
