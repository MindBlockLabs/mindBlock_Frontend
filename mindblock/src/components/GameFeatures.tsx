import { Brain, Trophy, Code } from "lucide-react";
import { GameFeatureCard } from "../ui/GameFeatureCard";

function GameFeature() {
  //game feature data
  const features = [
    {
      icon: Brain,
      title: "Adaptive Puzzles",
      description:
        "Challenges that adapt to your IQ level, ensuring the perfect balance of difficulty for every player.",
    },
    {
      icon: Trophy,
      title: "Compete & Earn",
      description:
        "Climb the leaderboard, compete with other players, and earn blockchain rewards for your achievements.",
    },
    {
      icon: Code,
      title: "Coding Challenges",
      description:
        "Test your programming skills with our specially designed coding puzzles that push your limits.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2
        className="text-5xl font-bold text-center mb-12 text-white"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        Game{" "}
        <span className="text-[var(--color-secondary-glow)] ">Features</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GameFeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default GameFeature;
