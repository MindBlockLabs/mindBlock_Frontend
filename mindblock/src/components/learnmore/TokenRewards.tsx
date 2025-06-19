import { Zap, Trophy } from "lucide-react";
const TokenRewards = () => {
  const EarningToken = [
    {
      subheading: "Solving Puzzles:",
      description: "Earn tokens based on puzzle difficulty and solving time",
    },
    {
      subheading: "Daily Challenges:",
      description: "Complete special daily puzzles for bonus tokens",
    },
    {
      subheading: "Competition:",
      description: "Win tokens by ranking high in timed competitions",
    },
    {
      subheading: "Creating Puzzles:",
      description: "Submit your own puzzles and earn while others solve them",
    },
  ];

  const IngameBenefit = [
    {
      subheading: "Unlock Premium Puzzles:",
      description: "Access exclusive, high-reward challenges",
    },
    {
      subheading: "Hints:",
      description: "Purchase hints for difficult puzzles",
    },
    {
      subheading: "Custom Avatar:",
      description: "Unlock unique profile customizations",
    },
    {
      subheading: "Tournament Entry:",
      description: "Join high-stakes competetion",
    },
  ];

  const ExternalUtilities = [
    {
      subheading: "Trading:",
      description: "Exchange tokens on supported DEXs",
    },
    {
      subheading: "Governance:",
      description: "Vote on future game features and updates",
    },
    {
      subheading: "Partner Benefits:",
      description: "Access special offers from our partners",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8 pb-12">
      <div className="border-2 border-slate-800 rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6">
          <div className="flex justify-center sm:justify-start">
            <Zap className="border border-slate-400 p-3 size-12 rounded-full bg-neutral-600/50" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold pb-1">
              Token Economy
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-neutral-400">
              Mind Block features a token-based reward system that incentivizes
              puzzle-solving and community participation.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900">
            <div>
              <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-1">
                Earning Tokens
              </h1>
            </div>
            <div>
              {EarningToken.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 pb-2 sm:pb-1"
                >
                  <div className="mt-1">
                    <Zap className="size-3 sm:size-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium">
                      {item.subheading}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900">
            <div>
              <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-3">
                Token Distribution
              </h1>
            </div>
            <div className="flex h-[120px] sm:h-[140px] md:h-[180px] rounded overflow-hidden">
              <div className="flex flex-col items-center justify-center w-[60%] bg-gray-500">
                <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                  60%
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-[12px] text-center px-1">
                  Player Rewards
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-[20%] bg-slate-800">
                <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                  20%
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-[12px] text-center px-1">
                  Development
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-[15%] bg-fuchsia-950">
                <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                  15%
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-[12px] text-center px-1">
                  Community
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-[5%] bg-blue-950">
                <h1 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold">
                  5%
                </h1>
                <p className="text-[8px] sm:text-[9px] md:text-[12px] text-center px-1">
                  Reserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-slate-800 rounded-lg p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6">
          <div className="flex justify-center sm:justify-start">
            <Trophy className="border border-slate-400 p-3 size-12 rounded-full bg-neutral-600/50" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold pb-1">
              Using Your Tokens
            </h1>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-neutral-400">
              Mind Block tokens have various utilities within the platform and
              beyond.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900">
            <div>
              <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-1">
                In-Game Benefits
              </h1>
            </div>
            <div>
              {IngameBenefit.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 pb-2 sm:pb-1"
                >
                  <div className="mt-1">
                    <Zap className="size-3 sm:size-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium">
                      {item.subheading}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-slate-800 p-3 sm:p-4 rounded-lg bg-slate-900">
            <div>
              <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-1">
                External Utilities
              </h1>
            </div>
            <div>
              {ExternalUtilities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 pb-2 sm:pb-1"
                >
                  <div className="mt-1">
                    <Zap className="size-3 sm:size-4" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium">
                      {item.subheading}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between border-2 border-slate-500 p-4 rounded-lg bg-gray-800 gap-3 sm:gap-2">
            <div>
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                Current Token Value
              </div>
              <div className="text-gray-400 text-[10px] sm:text-[11px] md:text-[12px]">
                Last updated: Today
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                $0.42 USD
              </div>
              <div className="text-gray-400 text-[10px] sm:text-[11px] md:text-[12px]">
                +5.2% <span>(24hr)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenRewards;
