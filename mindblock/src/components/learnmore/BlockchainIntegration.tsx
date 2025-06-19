import { Wallet, Zap, ExternalLink, GitFork } from "lucide-react";

const BlockchainIntegration = () => {
  const whyStarknet = [
    { description: "High throughput and low transaction costs" },
    { description: "Strong security inherited from Ethereum" },
    { description: "Supports complex smart contracts for game mechanics" },
  ];
  const supportedWallets = [
    { name: "ArgentX", color: "bg-blue-500" },
    { name: "Braavos", color: "bg-orange-600" },
    { name: "StarkWare", color: "bg-green-500" },
    { name: "More coming soon", color: "bg-purple-500" },
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

  const connectWallet = [
    { point: "1", step: "Install a supported StarkNet wallet extension" },
    { point: "2", step: "Create or import a wallet" },
    { point: "3", step: "Click 'Connect Wallet' in Mind Block" },
    { point: "4", step: "Approve the connection request" },
    {
      point: "5",
      step: "Your wallet is now connected and ready to receive rewards",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 pb-12 w-full">
      {/* Left Side */}
      <div className="border-2 border-slate-800 rounded-lg p-4 sm:p-6 w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6">
          <div className="flex justify-center sm:justify-start">
            <GitFork className="border border-slate-400 p-3 size-12 rounded-full bg-neutral-600/50" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold pb-1">
              StarkNet Integration
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400">
              Mind Block is built on StarkNet, a layer 2 scaling solution for
              Ethereum that provides fast, secure transactions with low fees.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Why StarkNet */}
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900 w-full">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold pb-3">
              Why StarkNet?
            </h1>
            <div>
              {whyStarknet.map((item, index) => (
                <div key={index} className="flex items-start gap-2 pb-2">
                  <Zap className="size-4 sm:size-5 mt-[2px]" />
                  <span className="text-xs sm:text-sm md:text-base text-neutral-400">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Contracts */}
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900 w-full">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Smart Contracts
            </h1>
            <p className="text-xs sm:text-sm md:text-base pb-4 text-neutral-400">
              Our game uses smart contracts to ensure transparent and fair
              distribution of rewards. Here's a simplified example:
            </p>
            <div className="border border-slate-700 p-3 rounded-lg bg-slate-800 overflow-x-auto w-full">
              <pre className="text-xs sm:text-sm font-mono text-slate-200">
                <code>{smartContractCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="border-2 border-slate-800 rounded-lg p-4 sm:p-6 w-full">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6">
          <div className="flex justify-center sm:justify-start">
            <Wallet className="border border-slate-400 p-3 size-12 rounded-full bg-neutral-600/50" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold pb-1">
              Wallet Integration
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400">
              Connect your StarkNet wallet to store your tokens and track your
              achievements on the blockchain.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Supported Wallets */}
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900 w-full">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold pb-3">
              Supported Wallets
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {supportedWallets.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border border-slate-700 p-2 sm:p-3 rounded-lg bg-slate-800 w-full"
                >
                  <div
                    className={`size-4 sm:size-5 md:size-6 rounded-full mr-3 ${item.color}`}
                  />
                  <span className="text-xs sm:text-sm md:text-base font-semibold">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wallet Steps */}
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900 w-full">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
              Connect Your Wallet
            </h1>
            <div>
              {connectWallet.map((item, index) => (
                <div
                  key={index}
                  className="text-neutral-400 text-sm sm:text-base pb-1"
                >
                  {item.point}. {item.step}
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center w-full">
            <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white/10 transition">
              <h1 className="text-sm sm:text-base font-semibold">
                Learn more about StarkNet
              </h1>
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainIntegration;
