import React from "react";
import { motion } from "framer-motion";

const BlockchainIntegration: React.FC = () => {
  const starkNetFeatures = [
    "High throughput and low transaction costs",
    "Strong security inherited from Ethereum",
    "Supports complex smart contracts for game mechanics",
  ];

  const supportedWallets = [
    { name: "ArgentX", color: "bg-orange-500", available: true, icon: "🦊" },
    { name: "Braavos", color: "bg-orange-600", available: true, icon: "⚡" },
    { name: "StarkWare", color: "bg-green-500", available: true, icon: "🔷" },
    {
      name: "More coming soon",
      color: "bg-purple-500",
      available: false,
      icon: "🔮",
    },
  ];

  const smartContractCode = `// Simplified reward distribution contract
contract MindBlockRewards {
    mapping(address => uint256) public userScores;
    mapping(address => uint256) public tokenBalance;
    
    function solvePuzzle(uint256 puzzleId, uint256 score) public {
        // Verify solution (simplified)
        require(isSolved(puzzleId, msg.sender), "Invalid solution");
        
        // Update user score
        userScores[msg.sender] += score;
        
        // Calculate and distribute tokens
        uint256 tokens = calculateTokens(score);
        tokenBalance[msg.sender] += tokens;
        
        emit PuzzleSolved(msg.sender, puzzleId, score, tokens);
    }
    
    // Other functions...
}`;

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
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⛓️
        </motion.div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
          Blockchain Integration
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Built on StarkNet for secure, fast, and cost-effective blockchain
          gaming
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* StarkNet Integration */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🔗</span>
            <h3 className="text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
              StarkNet Integration
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            Mind Block is built on StarkNet, a Layer 2 scaling solution for
            Ethereum that provides fast, secure transactions with low fees.
          </p>

          <div className="space-y-2 mb-6">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
              Why StarkNet?
            </h4>
            <ul className="space-y-2">
              {starkNetFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-400 flex items-start"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <motion.button
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn more about StarkNet ↗
          </motion.button>
        </motion.div>

        {/* Enhanced Wallet Integration */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <div className="flex items-center mb-4">
              <motion.span
                className="text-3xl mr-3"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                👛
              </motion.span>
              <h3 className="text-xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                Wallet Integration
              </h3>
            </div>

            <p className="text-gray-300 mb-6">
              Connect your StarkNet wallet to store your tokens and track your
              achievements on the blockchain.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide flex items-center">
                <span className="mr-2">🌟</span>
                Supported Wallets
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {supportedWallets.map((wallet, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                      wallet.available
                        ? "bg-gradient-to-r from-gray-700/50 to-gray-800/50 border-gray-600/50 hover:border-cyan-500/50"
                        : "bg-gray-800/30 border-gray-700/30"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={wallet.available ? { scale: 1.02, x: 5 } : {}}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-4 h-4 rounded-full ${wallet.color} flex items-center justify-center`}
                      >
                        <motion.span
                          className="text-xs"
                          animate={wallet.available ? { rotate: [0, 360] } : {}}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          {wallet.icon}
                        </motion.span>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          wallet.available ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {wallet.name}
                      </span>
                    </div>
                    {wallet.available && (
                      <motion.div
                        className="text-green-400 text-xs"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓ Ready
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>🔗</span>
              <span>Connect Wallet</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Smart Contracts Section */}
      <motion.div
        className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">📜</span>
          <h3 className="text-xl font-bold text-white">Smart Contracts</h3>
        </div>

        <p className="text-gray-300 mb-4">
          Our game uses smart contracts to ensure transparent and fair
          distribution of rewards. Here's a simplified example:
        </p>

        <div className="bg-gray-900/80 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
            {smartContractCode}
          </pre>
        </div>
      </motion.div>

      {/* Enhanced Connection Steps with Scattered Layout */}
      <motion.div
        className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-8 border border-cyan-500/20 relative overflow-hidden min-h-[600px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Enhanced animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 border-2 border-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-12 right-8 w-6 h-6 border-2 border-blue-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
              x: [0, 10, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 left-12 w-4 h-4 border-2 border-purple-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -15, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-3 h-3 border-2 border-green-400 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-8 w-5 h-5 border-2 border-pink-400 rounded-full"
            animate={{
              x: [0, -20, 0],
              y: [0, 10, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            🚀 Connecting Your Wallet
          </motion.h3>

          {/* Desktop: Scattered Layout */}
          <div className="hidden lg:block relative w-full h-[450px]">
            {/* Step 1 - Top Left */}
            <motion.div
              className="absolute top-0 left-0 max-w-xs group"
              initial={{ opacity: 0, x: -50, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(59, 130, 246, 0.3)",
                      "0 0 25px rgba(59, 130, 246, 0.5)",
                      "0 0 15px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.span
                    className="text-xl"
                    animate={{
                      y: [0, -1, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    📥
                  </motion.span>
                </motion.div>
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-gray-600/30 group-hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(59, 130, 246, 0.08)",
                    }}
                  >
                    <p className="text-gray-300 font-medium text-sm">
                      Install a Web3 wallet (MetaMask, Trust Wallet, etc.)
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              {/* Connecting line to next step */}
              <motion.svg
                className="absolute -bottom-8 left-16 w-32 h-16 text-cyan-500/30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              >
                <motion.path
                  d="M 0 0 Q 50 30 100 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3,8"
                  animate={{ strokeDashoffset: [0, -11] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.svg>
            </motion.div>

            {/* Step 2 - Top Right */}
            <motion.div
              className="absolute top-16 right-0 max-w-xs group"
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(168, 85, 247, 0.3)",
                      "0 0 25px rgba(168, 85, 247, 0.5)",
                      "0 0 15px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <motion.span
                    className="text-xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    🔐
                  </motion.span>
                </motion.div>
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block px-4 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-gray-600/30 group-hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(168, 85, 247, 0.08)",
                    }}
                  >
                    <p className="text-gray-300 font-medium text-sm">
                      Create or import a wallet
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              {/* Connecting line */}
              <motion.svg
                className="absolute -bottom-12 -left-8 w-40 h-20 text-purple-500/30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.4, ease: "easeInOut" }}
              >
                <motion.path
                  d="M 0 0 Q -30 40 -80 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3,8"
                  animate={{ strokeDashoffset: [0, -11] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5,
                  }}
                />
              </motion.svg>
            </motion.div>

            {/* Step 3 - Center */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                      "0 0 30px rgba(34, 197, 94, 0.6)",
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                    ],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    🔗
                  </motion.span>
                </motion.div>
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block px-4 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-gray-600/30 group-hover:border-green-500/50 transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(34, 197, 94, 0.08)",
                    }}
                  >
                    <p className="text-gray-300 font-medium text-sm">
                      Click 'Connect Wallet' in Mind Block
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 4 - Bottom Left */}
            <motion.div
              className="absolute bottom-16 left-8 max-w-xs group"
              initial={{ opacity: 0, x: -40, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(245, 158, 11, 0.3)",
                      "0 0 25px rgba(245, 158, 11, 0.5)",
                      "0 0 15px rgba(245, 158, 11, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <motion.span
                    className="text-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    ✅
                  </motion.span>
                </motion.div>
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block px-4 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-gray-600/30 group-hover:border-yellow-500/50 transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(245, 158, 11, 0.08)",
                    }}
                  >
                    <p className="text-gray-300 font-medium text-sm">
                      Approve the connection request
                    </p>
                  </motion.div>
                </div>
              </motion.div>
              {/* Connecting line */}
              <motion.svg
                className="absolute -top-8 right-8 w-32 h-16 text-yellow-500/30"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
              >
                <motion.path
                  d="M 0 0 Q 40 -20 80 -10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3,8"
                  animate={{ strokeDashoffset: [0, -11] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                />
              </motion.svg>
            </motion.div>

            {/* Step 5 - Bottom Right */}
            <motion.div
              className="absolute bottom-0 right-0 max-w-xs group"
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.4)",
                      "0 0 35px rgba(99, 102, 241, 0.7)",
                      "0 0 20px rgba(99, 102, 241, 0.4)",
                    ],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <motion.span
                    className="text-2xl"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.5,
                    }}
                  >
                    🎉
                  </motion.span>
                </motion.div>
                <div className="flex-1 pt-2">
                  <motion.div
                    className="inline-block px-4 py-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-gray-600/30 group-hover:border-indigo-500/50 transition-all duration-300"
                    whileHover={{
                      backgroundColor: "rgba(99, 102, 241, 0.08)",
                    }}
                  >
                    <p className="text-gray-300 font-medium text-sm">
                      Your wallet is now connected and ready to receive rewards
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Central connecting animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              }}
            />
          </div>

          {/* Mobile & Tablet: Vertical Stack Layout */}
          <div className="lg:hidden space-y-6">
            {/* Step 1 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(59, 130, 246, 0.3)",
                      "0 0 25px rgba(59, 130, 246, 0.5)",
                      "0 0 15px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-lg sm:text-xl">📥</span>
                </motion.div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <span className="text-cyan-400 font-bold text-sm mr-2">
                      Step 1
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    Install a supported StarkNet wallet extension
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(168, 85, 247, 0.3)",
                      "0 0 25px rgba(168, 85, 247, 0.5)",
                      "0 0 15px rgba(168, 85, 247, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-lg sm:text-xl">🔐</span>
                </motion.div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-400 font-bold text-sm mr-2">
                      Step 2
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    Create or import a wallet
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                      "0 0 30px rgba(34, 197, 94, 0.6)",
                      "0 0 20px rgba(34, 197, 94, 0.4)",
                    ],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-xl sm:text-2xl">🔗</span>
                </motion.div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <span className="text-green-400 font-bold text-sm mr-2">
                      Step 3
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    Click 'Connect Wallet' in Mind Block
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(245, 158, 11, 0.3)",
                      "0 0 25px rgba(245, 158, 11, 0.5)",
                      "0 0 15px rgba(245, 158, 11, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  <span className="text-lg sm:text-xl">✅</span>
                </motion.div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 font-bold text-sm mr-2">
                      Step 4
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    Approve the connection request
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/30"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.4)",
                      "0 0 35px rgba(99, 102, 241, 0.7)",
                      "0 0 20px rgba(99, 102, 241, 0.4)",
                    ],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <span className="text-xl sm:text-2xl">🎉</span>
                </motion.div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center mb-2">
                    <span className="text-indigo-400 font-bold text-sm mr-2">
                      Step 5
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-indigo-400/50 to-transparent"></div>
                  </div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    Your wallet is now connected and ready to receive rewards
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlockchainIntegration;
