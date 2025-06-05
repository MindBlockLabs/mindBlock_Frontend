import React from "react";
import { motion } from "framer-motion";

const GameMechanics: React.FC = () => {
  const mechanics = [
    {
      title: "Adaptive Difficulty",
      description:
        "AI-powered system that adjusts puzzle complexity based on your performance",
      icon: "🧠",
      features: [
        "Real-time difficulty adjustment",
        "Performance tracking",
        "Personalized challenge levels",
      ],
    },
    {
      title: "Puzzle Variety",
      description:
        "Multiple puzzle types to challenge different cognitive skills",
      icon: "🧩",
      features: [
        "Logic puzzles",
        "Pattern recognition",
        "Mathematical challenges",
        "Spatial reasoning",
      ],
    },
    {
      title: "Time-Based Scoring",
      description:
        "Earn more points by solving puzzles quickly and efficiently",
      icon: "⏱️",
      features: ["Speed bonuses", "Accuracy multipliers", "Streak rewards"],
    },
    {
      title: "Progressive Unlocks",
      description: "Unlock new puzzle types and features as you advance",
      icon: "🔓",
      features: [
        "New puzzle categories",
        "Advanced game modes",
        "Special challenges",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-6xl mb-4"
          animate={{
            rotateY: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          🎮
        </motion.div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Game Mechanics
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover the innovative gameplay systems that make Mind Block both
          challenging and rewarding
        </p>
      </motion.div>

      {/* Mechanics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {mechanics.map((mechanic, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3 filter drop-shadow-lg">
                {mechanic.icon}
              </span>
              <h3 className="text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {mechanic.title}
              </h3>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {mechanic.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                Key Features:
              </h4>
              <ul className="space-y-1">
                {mechanic.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-gray-400 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* How It Works Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-500/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          How Game Mechanics Work Together
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="text-3xl">📊</div>
            <h4 className="font-semibold text-white">Performance Analysis</h4>
            <p className="text-sm text-gray-400">
              AI tracks your solving patterns and adjusts difficulty in
              real-time
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-3xl">🎯</div>
            <h4 className="font-semibold text-white">Optimal Challenge</h4>
            <p className="text-sm text-gray-400">
              Always face puzzles that are challenging but solvable
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-3xl">🏆</div>
            <h4 className="font-semibold text-white">Rewarding Progress</h4>
            <p className="text-sm text-gray-400">
              Earn tokens and unlock new content as you improve
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameMechanics;
