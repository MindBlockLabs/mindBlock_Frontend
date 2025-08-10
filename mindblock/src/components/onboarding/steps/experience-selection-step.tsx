"use client";

import { motion } from "framer-motion";
// import { ExperienceSelectionCard } from "../experience-selection-card";
// import { Brain, Zap } from "lucide-react";
import { RadioGroup } from "../../ui/radio-group";
import { DifficultyLevelCard } from "./DifficultyLevelCard";

interface ExperienceSelectionStepProps {
  selectedDifficultyType: string;
  selectedDifficultyLevel: string;
  onDifficultyTypeSelect: (value: string) => void;
  onDifficultyLevelSelect: (value: string) => void;
}

// const experienceOptions = [
//   {
//     id: "manual",
//     title: "Manual Selection",
//     description: "Choose your preferred difficulty level manually.",
//     icon: <Brain className="h-4 w-4 text-primary" />,
//     iconBgColor: "bg-primary/10",
//   },
//   {
//     id: "iq-test",
//     title: "IQ Test",
//     description: "Take a quick IQ test to determine your optimal difficulty.",
//     icon: <Zap className="h-4 w-4 text-secondary" />,
//     iconBgColor: "bg-secondary/10",
//   },
// ];

const difficultyLevels = [
  {
    id: "beginner",
    title: "Beginner",
    description: "Start with basic puzzles and gradually increase difficulty.",
    colorScheme: "green" as const,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Moderate difficulty with more complex problem-solving.",
    colorScheme: "yellow" as const,
  },
  {
    id: "expert",
    title: "Expert",
    description: "Advanced challenges for experienced problem solvers.",
    colorScheme: "red" as const,
  },
];

export function ExperienceSelectionStep({
  selectedDifficultyType,
  selectedDifficultyLevel,
  //   onDifficultyTypeSelect,
  onDifficultyLevelSelect,
}: ExperienceSelectionStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-orbitron text-2xl font-bold mb-2">
        Choose Your Experience
      </h2>
      <p className="text-foreground/70 mb-6">
        Select how you'd like to determine your difficulty level.
      </p>

      {/* <RadioGroup
        className="space-y-4"
        value={selectedDifficultyType}
        onValueChange={onDifficultyTypeSelect}
      >
        {experienceOptions.map((option) => (
          <ExperienceSelectionCard
            key={option.id}
            id={option.id}
            title={option.title}
            description={option.description}
            icon={option.icon}
            iconBgColor={option.iconBgColor}
            isSelected={selectedDifficultyType === option.id}
            onSelect={onDifficultyTypeSelect}
          />
        ))}
      </RadioGroup> */}

      {/* Manual difficulty selection */}
      {selectedDifficultyType === "manual" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <h3 className="font-orbitron text-lg font-bold mb-3">
            Select Difficulty Level
          </h3>
          <RadioGroup
            className="space-y-3"
            value={selectedDifficultyLevel}
            onValueChange={onDifficultyLevelSelect}
          >
            {difficultyLevels.map((level) => (
              <DifficultyLevelCard
                key={level.id}
                id={level.id}
                title={level.title}
                description={level.description}
                colorScheme={level.colorScheme}
                isSelected={selectedDifficultyLevel === level.id}
                onSelect={onDifficultyLevelSelect}
              />
            ))}
          </RadioGroup>
        </motion.div>
      )}
    </motion.div>
  );
}
