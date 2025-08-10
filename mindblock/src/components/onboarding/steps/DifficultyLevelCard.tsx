import { RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { cn } from "../../../lib/utils";

interface DifficultyLevelCardProps {
  id: string;
  title: string;
  description: string;
  colorScheme: "green" | "yellow" | "red";
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const colorSchemes = {
  green: {
    border: "border-green-500/30 bg-green-500/5",
    hover: "hover:border-green-500/30 hover:bg-green-500/5",
    radio: "text-green-500",
    indicator: "bg-green-500",
  },
  yellow: {
    border: "border-yellow-500/30 bg-yellow-500/5",
    hover: "hover:border-yellow-500/30 hover:bg-yellow-500/5",
    radio: "text-yellow-500",
    indicator: "bg-yellow-500",
  },
  red: {
    border: "border-red-500/30 bg-red-500/5",
    hover: "hover:border-red-500/30 hover:bg-red-500/5",
    radio: "text-red-500",
    indicator: "bg-red-500",
  },
};

export function DifficultyLevelCard({
  id,
  title,
  description,
  colorScheme,
  isSelected,
  onSelect,
}: DifficultyLevelCardProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div
      className={cn(
        "relative flex items-center gap-4 p-3 rounded-lg border cursor-pointer transition-colors",
        isSelected ? colors.border : `border-border ${colors.hover}`
      )}
      onClick={() => onSelect(id)}
    >
      {/* Circle indicator in top-right */}
      <div className="absolute top-2 right-2">
        <div
          className={cn(
            "w-4 h-4 rounded-full border-2 transition-colors",
            isSelected
              ? `${colors.indicator} border-transparent`
              : "border-border bg-transparent"
          )}
        />
      </div>

      <div className="flex-1 pr-6">
        <div className="flex items-center justify-between mb-1">
          <Label className="font-medium cursor-pointer">{title}</Label>
          <RadioGroupItem value={id} id={id} className={colors.radio} />
        </div>
        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}
