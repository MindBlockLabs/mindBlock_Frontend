import Navbar from "./Navbar";
import Faq from "./Faq";
import LearnMoreFooter from "./LearnMoreFooter";
import { useState } from "react";
import TokenRewards from "./learnmore/TokenRewards";
import BlockchainIntegration from "./learnmore/BlockchainIntegration";
import GameMechanics from "./learnmore/GameMechanics";

const LearnMore = () => {
  const [selected, setSelected] = useState("Token Rewards");
  const Headings = [
    { name: "Game Mechanics" },
    { name: "Blockchain Integration" },
    { name: "Token Rewards" },
  ];

  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <div className="flex justify-center items-center px-4">
        <div className="text-center pt-4 w-full max-w-[700px]">
          <h1 className="font-['Oswald',sans-serif] text-[32px] sm:text-[42px] md:text-[58px] font-bold leading-tight">
            Learn About Mind Block
          </h1>
          <p className="text-neutral-400 font-semibold text-sm sm:text-base md:text-lg mt-2 px-2">
            Discover how Mind Block combines puzzle-solving skills with
            blockchain technology to create a unique gaming experience.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-4">
        <ul className="flex flex-col sm:flex-row rounded-lg w-full sm:w-fit bg-slate-900 text-neutral-400 font-semibold p-1 gap-1 sm:gap-0">
          {Headings.map((item) => (
            <li
              key={item.name}
              className={`px-3 py-2 sm:py-1 cursor-pointer text-center text-sm sm:text-base ${
                selected === item.name
                  ? "bg-white text-black rounded-md"
                  : "bg-slate-900"
              }`}
              onClick={() => setSelected(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>{selected === "Game Mechanics" && <GameMechanics />}</div>
      <div>
        {selected === "Blockchain Integration" && <BlockchainIntegration />}
      </div>
      <div>{selected === "Token Rewards" && <TokenRewards />}</div>
      <Faq />
      <LearnMoreFooter />
    </div>
  );
};

export default LearnMore;
