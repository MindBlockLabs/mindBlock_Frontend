"use client";

import type * as React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface ExperienceSelectionCardProps {
  /** Unique identifier for the radio button */
  value: string;
  /** Card title */
  title: string;
  /** Card description */
  description: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Whether this option is currently selected */
  isSelected: boolean;
  /** Callback when the card is clicked */
  onSelect: (value: string) => void;
  /** Background color for the icon (Tailwind class) */
  iconBgColor?: string;
  /** Icon color (Tailwind class) */
  iconColor?: string;
  /** Additional className for the card */
  className?: string;
}

export function ExperienceSelectionCard({
  value,
  title,
  description,
  icon: Icon,
  isSelected,
  onSelect,
  iconBgColor = "bg-primary/10",
  iconColor = "text-primary",
  className,
}: ExperienceSelectionCardProps) {
  const handleClick = () => {
    onSelect(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(value);
    }
  };

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 ease-out",
        "hover:border-primary/50 hover:shadow-md",
        "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
        isSelected && [
          "border-primary bg-primary/5",
          "shadow-md ring-2 ring-primary/20",
        ],
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {/* Icon with background */}
          <div
            className={cn(
              "flex items-center justify-center rounded-lg p-3 flex-shrink-0",
              iconBgColor,
              isSelected && "bg-primary/20"
            )}
          >
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-lg leading-tight">{title}</h3>
              {/* Radio button */}
              <RadioGroupItem
                value={value}
                className="flex-shrink-0"
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

// Example usage component for demonstration
export interface ExperienceOption {
  value: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
}

export interface ExperienceSelectionProps {
  options: ExperienceOption[];
  selectedValue: string;
  onSelectionChange: (value: string) => void;
  className?: string;
}

export function ExperienceSelection({
  options,
  selectedValue,
  onSelectionChange,
  className,
}: ExperienceSelectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {options.map((option) => (
        <ExperienceSelectionCard
          key={option.value}
          value={option.value}
          title={option.title}
          description={option.description}
          icon={option.icon}
          isSelected={selectedValue === option.value}
          onSelect={onSelectionChange}
          iconBgColor={option.iconBgColor}
          iconColor={option.iconColor}
        />
      ))}
    </div>
  );
}
