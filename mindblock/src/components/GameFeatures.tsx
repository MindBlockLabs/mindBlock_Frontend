import { Brain, Trophy, Code } from "lucide-react";
import { GameFeatureCard } from "../ui/GameFeatureCard";
// import { GlassInput } from "./atoms/GlassInput/GlassInput";
import { Button } from "./atoms/GlassInput/Button";
import type { LucideProps } from "lucide-react";

function GameFeature() {
  const handleStartJourney = () => {
    console.log("Start your journey clicked");
    // to Add navigation or other logic here
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("Input changed:", e.target.value);
  // };

  // Game feature data
  const features = [
    {
      icon: (props: LucideProps) => <Brain {...props} className="w-6 h-6 text-white" />,
      title: "Adaptive Puzzles",
      description:
        "Challenges that adapt to your IQ level, ensuring the perfect balance of difficulty for every player.",
    },
    {
      icon: (props: LucideProps) => <Trophy {...props} className="w-6 h-6 text-white" />,
      title: "Compete & Earn",
      description:
        "Climb the leaderboard, compete with other players, and earn blockchain rewards for your achievements.",
    },
    {
      icon: (props: LucideProps) => <Code {...props} className="w-6 h-6 text-white" />,
      title: "Coding Challenges",
      description:
        "Test your programming skills with our specially designed coding puzzles that push your limits.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r text-white">
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

        <div className="mt-16 text-center">
          <Button
            variant="white"
            onClick={handleStartJourney}
            className="px-8 py-3 text-base font-semibold"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GameFeature;