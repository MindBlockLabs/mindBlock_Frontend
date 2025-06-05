import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PlayNowButton from "./PlayNowButton"; // Changed import
import GameMechanics from "./GameMechanics";
import BlockchainIntegration from "./BlockchainIntegration";
import TokenRewards from "./TokenRewards";
import FAQ from "./FAQ";
import Footer from "./Footer";

const Learn: React.FC = () => {
  const [activeTab, setActiveTab] = useState("game-mechanics");

  const tabs = [
    {
      id: "game-mechanics",
      label: "Game Mechanics",
      icon: "🎮",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "blockchain-integration",
      label: "Blockchain Integration",
      icon: "⛓️",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "token-rewards",
      label: "Token Rewards",
      icon: "💎",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects - Fixed positioning to prevent overflow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--color-secondary-glow)]/24 rounded-full blur-[100px] z-10 -translate-x-1/2"></div>
      <div className="absolute top-0 right-0 bg-purple-400/24 rounded-full blur-[100px] z-10 translate-x-1/2"></div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            Learn About <span className="text-white">Mind Block</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how Mind Block combines puzzle-solving with blockchain
            technology to create a unique gaming experience. Learn about our
            adaptive difficulty system, token rewards, and competitive gameplay
            that challenges your mind while rewarding your skills.
          </p>
        </motion.div>

        {/* Enhanced Modern Tab Navigation */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 w-full max-w-5xl mx-auto border border-gray-700/50 shadow-2xl">
            {/* Animated Background Slider */}
            <motion.div
              className="absolute hidden md:block h-14 bg-gradient-to-r rounded-xl shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${tabs
                  .find((tab) => tab.id === activeTab)
                  ?.gradient.replace("from-", "")
                  .replace("to-", ", ")})`,
              }}
              animate={{
                x:
                  tabs.findIndex((tab) => tab.id === activeTab) * (100 / 3) +
                  "%",
                width: `calc(${100 / 3}% - 16px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
            />

            {/* Tab Buttons */}
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 flex items-center justify-center space-x-2 px-4 py-4 rounded-xl font-semibold transition-all duration-500 flex-1 group whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
                whileHover={{
                  scale: 1.02,
                  y: -1,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon with Glow Effect */}
                <motion.span
                  className={`text-xl filter ${
                    activeTab === tab.id
                      ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      : "group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                  }`}
                  animate={{
                    rotate: activeTab === tab.id ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {tab.icon}
                </motion.span>

                {/* Label with Gradient Effect */}
                <span
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r bg-clip-text text-transparent " +
                        tab.gradient
                      : ""
                  }`}
                >
                  {tab.label}
                </span>

                {/* Active Indicator Dot */}
                <AnimatePresence>
                  {activeTab === tab.id && (
                    <motion.div
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${tab.gradient} rounded-full shadow-lg`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1.2, 1],
                        opacity: 1,
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r ${tab.gradient} blur-xl`}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="mb-20 min-h-[300px]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activeTab === "game-mechanics" && (
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
                <GameMechanics />
              </div>
            )}

            {activeTab === "blockchain-integration" && (
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
                <BlockchainIntegration />
              </div>
            )}

            {activeTab === "token-rewards" && (
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl p-8">
                <TokenRewards />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            Ready to <span className="text-white">Start Playing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players solving puzzles and earning rewards in the
            world's first blockchain-powered puzzle game.
          </p>
          <Link to="/dashboard">
            <div className="inline-block">
              <PlayNowButton />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Learn;
