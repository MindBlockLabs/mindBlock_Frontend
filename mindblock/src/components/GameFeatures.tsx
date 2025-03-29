import { Brain, Trophy, Code } from "lucide-react";
import { GameFeatureCard } from "../ui/GameFeatureCard";
import { GlassInput } from "./atoms/GlassInput/GlassInput";

function GameFeature() {
  const doSomething = () => {
    console.log("first");
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Game Features
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
      <div className="flex items-center justify-center mt-50">
        <GlassInput
          id="Username"
          label="Username"
          onChange={doSomething}
          value=""
          type="email"
          placeholder="Choose a username"
        />
      </div>
    </div>
  );
}

export default GameFeature;
