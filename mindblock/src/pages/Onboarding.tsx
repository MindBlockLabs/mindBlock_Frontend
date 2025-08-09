import React, { useState } from "react";
import GameModeCard, {
  GameModeBadge,
} from "../components/onboarding/game-mode-card";

type ModeKey = "puzzles" | "logic" | "coding" | "blockchain";

const MODES: Array<{
  key: ModeKey;
  title: string;
  description: string;
  badge?: { label: string; variant?: "popular" | "new" } | null;
}> = [
  {
    key: "puzzles",
    title: "Puzzles",
    description: "General brain teasers and mind puzzles.",
    badge: { label: "Popular", variant: "popular" },
  },
  {
    key: "logic",
    title: "Logic",
    description: "Reasoning challenges and logical deduction.",
  },
  {
    key: "coding",
    title: "Coding",
    description: "Programming puzzles and algorithmic tasks.",
    badge: { label: "New", variant: "new" },
  },
  {
    key: "blockchain",
    title: "Blockchain",
    description: "Crypto, web3, and consensus-themed challenges.",
  },
];

const Onboarding: React.FC = () => {
  const [selected, setSelected] = useState<Set<ModeKey>>(new Set());

  const toggle = (key: ModeKey) => (next: boolean) => {
    setSelected((prev) => {
      const nextSet = new Set(prev);
      if (next) nextSet.add(key);
      else nextSet.delete(key);
      return nextSet;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Choose Game Modes</h1>
          <p className="mt-2 text-neutral-400">
            Pick one or more modes to tailor your experience.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MODES.map((m) => (
            <GameModeCard
              key={m.key}
              mode={m.key}
              title={m.title}
              description={m.description}
              selected={selected.has(m.key)}
              onToggle={toggle(m.key)}
              badge={m.badge ?? null}
            />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-neutral-300">
          <span>Selected:</span>
          <div className="flex flex-wrap gap-2">
            {[...selected].length === 0 ? (
              <span className="text-neutral-500">None</span>
            ) : (
              [...selected].map((k) => (
                <GameModeBadge key={k} label={k} variant="popular" />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;


