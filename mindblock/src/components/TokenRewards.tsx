import React from "react";
import { motion } from "framer-motion";

const TokenRewards: React.FC = () => {
  const earningMethods = [
    {
      icon: "🧩",
      title: "Solving Puzzles",
      description: "Earn tokens based on puzzle difficulty and solving time",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "📅",
      title: "Daily Challenges",
      description: "Complete special daily puzzles for bonus tokens",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🏆",
      title: "Competitions",
      description: "Win tokens by ranking high in timed competitions",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: "🎯",
      title: "Creating Puzzles",
      description: "Submit your own puzzles and earn when others solve them",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const inGameBenefits = [
    {
      icon: "🔓",
      title: "Unlock Premium Puzzles",
      description: "Access exclusive, high-reward challenges",
    },
    {
      icon: "💡",
      title: "Hints",
      description: "Purchase hints for difficult puzzles",
    },
    {
      icon: "👤",
      title: "Custom Avatars",
      description: "Unlock unique profile customizations",
    },
    {
      icon: "🎮",
      title: "Tournament Entry",
      description: "Join high-stakes competitions",
    },
  ];

  const externalUtilities = [
    {
      icon: "📈",
      title: "Trading",
      description: "Exchange tokens on supported DEXs",
    },
    {
      icon: "🗳️",
      title: "Governance",
      description: "Vote on future game features and updates",
    },
    {
      icon: "🤝",
      title: "Partner Benefits",
      description: "Access special offers from our partners",
    },
  ];

  //   const tokenDistribution = [
  //     { label: "Player Rewards", percentage: 60, color: "bg-blue-500" },
  //     { label: "Development", percentage: 20, color: "bg-purple-500" },
  //     { label: "Community", percentage: 15, color: "bg-green-500" },
  //     { label: "Reserve", percentage: 5, color: "bg-yellow-500" },
  //   ];

  // Fixed: Properly typed amounts object
  //   const amounts: Record<string, string> = {
  //     "Player Rewards": "600,000,000",
  //     Development: "200,000,000",
  //     Community: "150,000,000",
  //     Reserve: "50,000,000",
  //   };

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
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💎
        </motion.div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
          Token Economy
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Mind Block features a token-based reward system that incentivizes
          puzzle-solving and community participation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Earning Tokens Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <motion.span
              className="text-3xl mr-3"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <h3 className="text-xl font-bold text-white">Earning Tokens</h3>
          </div>

          <div className="space-y-4">
            {earningMethods.map((method, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white font-bold`}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-400">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Using Your Tokens Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <motion.span
              className="text-3xl mr-3"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎯
            </motion.span>
            <h3 className="text-xl font-bold text-white">Using Your Tokens</h3>
          </div>

          <p className="text-gray-300 mb-6">
            Mind Block tokens have various utilities within the platform and
            beyond.
          </p>

          {/* In-Game Benefits */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3 flex items-center">
              <span className="mr-2">🎮</span>
              In-Game Benefits
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {inGameBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <div>
                    <span className="text-white font-medium text-sm">
                      {benefit.title}:
                    </span>
                    <span className="text-gray-400 text-sm ml-1">
                      {benefit.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* External Utilities */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-3 flex items-center">
              <span className="mr-2">🌐</span>
              External Utilities
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {externalUtilities.map((utility, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="text-lg">{utility.icon}</span>
                  <div>
                    <span className="text-white font-medium text-sm">
                      {utility.title}:
                    </span>
                    <span className="text-gray-400 text-sm ml-1">
                      {utility.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Token Distribution - Replicated Design */}
      <motion.div
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="mb-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-white text-lg">📊</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-white">
              Token Distribution
            </h3>
          </div>

          {/* Replicated Chart Design */}
          <div className="space-y-6">
            {/* Main Chart Bar */}
            <div className="relative">
              <div className="flex h-24 rounded-lg overflow-hidden bg-gray-900/50 border border-gray-600/30">
                {/* Player Rewards - 60% */}
                <motion.div
                  className="bg-gray-600 relative flex items-center justify-center text-white font-bold"
                  style={{ width: "60%" }}
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">60%</div>
                    <div className="text-sm opacity-90">Player Rewards</div>
                  </div>
                </motion.div>

                {/* Development - 20% */}
                <motion.div
                  className="bg-gray-500 relative flex items-center justify-center text-white font-bold"
                  style={{ width: "20%" }}
                  initial={{ width: 0 }}
                  animate={{ width: "20%" }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">20%</div>
                    <div className="text-xs opacity-90">Development</div>
                  </div>
                </motion.div>

                {/* Community - 15% */}
                <motion.div
                  className="bg-purple-600 relative flex items-center justify-center text-white font-bold"
                  style={{ width: "15%" }}
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold">15%</div>
                    <div className="text-xs opacity-90">Community</div>
                  </div>
                </motion.div>

                {/* Reserve - 5% */}
                <motion.div
                  className="bg-blue-600 relative flex items-center justify-center text-white font-bold"
                  style={{ width: "5%" }}
                  initial={{ width: 0 }}
                  animate={{ width: "5%" }}
                  transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                >
                  <div className="text-center">
                    <div className="text-sm font-bold">5%</div>
                    <div className="text-xs opacity-90">Reserve</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Legend with Color Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <div>
                  <div className="text-blue-400 text-sm font-semibold">
                    Player Rewards
                  </div>
                  <div className="text-white font-bold">60%</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                <div>
                  <div className="text-purple-400 text-sm font-semibold">
                    Development
                  </div>
                  <div className="text-white font-bold">20%</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                <div>
                  <div className="text-green-400 text-sm font-semibold">
                    Community
                  </div>
                  <div className="text-white font-bold">15%</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <div>
                  <div className="text-yellow-400 text-sm font-semibold">
                    Reserve
                  </div>
                  <div className="text-white font-bold">5%</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Current Token Value */}
      <motion.div
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-white text-xl">💰</span>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Current Token Value
              </h3>
              <p className="text-gray-400 text-sm">Live market data</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Live</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Price */}
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
            <div className="text-3xl font-bold text-white mb-2">$0.42</div>
            <div className="text-sm text-gray-400 mb-2">USD</div>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-green-400 text-sm">↗</span>
              <span className="text-green-400 text-sm font-semibold">
                +3.2%
              </span>
              <span className="text-gray-500 text-xs">(24h)</span>
            </div>
          </div>

          {/* Market Cap */}
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
            <div className="text-2xl font-bold text-white mb-2">$273M</div>
            <div className="text-sm text-gray-400 mb-2">Market Cap</div>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-blue-400 text-sm">↗</span>
              <span className="text-blue-400 text-sm font-semibold">+1.8%</span>
              <span className="text-gray-500 text-xs">(24h)</span>
            </div>
          </div>

          {/* CMC Rank */}
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="text-2xl font-bold text-white mb-2">#127</div>
            <div className="text-sm text-gray-400 mb-2">CMC Rank</div>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-purple-400 text-sm">↗</span>
              <span className="text-purple-400 text-sm font-semibold">+5</span>
              <span className="text-gray-500 text-xs">(7d)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Fixed: Added default export
export default TokenRewards;
