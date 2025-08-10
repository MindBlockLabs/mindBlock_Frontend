import React from "react";
import type { LucideIcon } from "lucide-react";
import { Brain, Code, Cpu, Blocks } from "lucide-react";

type GameMode = "puzzles" | "logic" | "coding" | "blockchain";

export type GameModeBadgeVariant = "popular" | "new";

export interface GameModeBadgeProps {
  label: string;
  variant?: GameModeBadgeVariant;
  className?: string;
}

export const GameModeBadge: React.FC<GameModeBadgeProps> = ({
  label,
  variant = "new",
  className,
}) => {
  const base =
    "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide border backdrop-blur-sm";
  const styles =
    variant === "new"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30";
  return <span className={`${base} ${styles} ${className || ""}`}>{label}</span>;
};

export interface GameModeCardProps {
  mode: GameMode;
  title: string;
  description: string;
  selected?: boolean;
  onToggle?: (nextSelected: boolean) => void;
  badge?: { label: string; variant?: GameModeBadgeVariant } | null;
  className?: string;
  iconOverride?: LucideIcon;
  disabled?: boolean;
}

const ICONS: Record<GameMode, LucideIcon> = {
  puzzles: Brain,
  logic: Cpu,
  coding: Code,
  blockchain: Blocks,
};

const joinClassNames = (...parts: Array<string | undefined | false>) =>
  parts.filter(Boolean).join(" ");

export const GameModeCard: React.FC<GameModeCardProps> = ({
  mode,
  title,
  description,
  selected = false,
  onToggle,
  badge,
  className,
  iconOverride,
  disabled = false,
}) => {
  const Icon = iconOverride ?? ICONS[mode];

  const handleToggle = () => {
    if (disabled) return;
    onToggle?.(!selected);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle?.(!selected);
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={selected}
      aria-disabled={disabled}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={joinClassNames(
        "relative w-full max-w-lg cursor-pointer select-none rounded-xl border p-4 sm:p-5 transition-all",
        "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60",
        selected &&
          "border-cyan-500/60 bg-cyan-500/10 shadow-[0_0_0_2px_rgba(34,211,238,0.15)]",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {badge ? (
        <div className="absolute right-3 top-3">
          <GameModeBadge label={badge.label} variant={badge.variant} />
        </div>
      ) : null}

      <div className="flex items-start gap-4">
        <div
          className={joinClassNames(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border",
            "bg-slate-800/60 border-slate-700",
            selected && "text-cyan-400 border-cyan-500/40 ring-2 ring-cyan-500/20"
          )}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">{description}</p>
        </div>
      </div>

      {/* Selection indicator */}
      <div
        className={joinClassNames(
          "pointer-events-none absolute inset-0 rounded-xl transition-opacity",
          selected ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <div className="absolute inset-0 -z-10 rounded-xl bg-[radial-gradient(75%_75%_at_50%_0%,rgba(34,211,238,0.15)_0%,rgba(0,0,0,0)_70%)]" />
      </div>
    </div>
  );
};

export default GameModeCard;


