import { Brain, Trophy, Code } from "lucide-react";
import GradientBorderCard from "../ui/GradientBorderCard"; // Import the new card
import { motion } from "framer-motion";

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
    <div className="w-full" style={{ padding: "0 5%" }}>
      <h2
        className="text-4xl font-bold text-center mb-10"
        style={{
          fontFamily: "var(--font-primary)",
          color: "transparent",
          backgroundImage: "linear-gradient(to right, #00e5ff, #ff0080)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Game Features
      </h2>

      {/* Update the card container to match Hero Section width */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{ width: "100%" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="h-full flex flex-col" // Ensures motion div takes full height
          >
            {/* Removed the external h3 title */}
            {/* Use the new GradientBorderCard */}
            <GradientBorderCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GameFeature;
