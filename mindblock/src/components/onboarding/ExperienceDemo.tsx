"use client";

import { useState } from "react";
import {
  ExperienceSelection,
  type ExperienceOption,
} from "./experience-selection-card";
import { Brain, FileText } from "lucide-react";

const experienceOptions: ExperienceOption[] = [
  {
    value: "manual",
    title: "Manual Selection",
    description:
      "Choose your difficulty level based on your own assessment of your puzzle-solving abilities and preferences.",
    icon: FileText,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    value: "iq-test",
    title: "IQ Test",
    description:
      "Take a quick assessment to automatically determine the optimal difficulty level tailored to your cognitive abilities.",
    icon: Brain,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export function ExperienceSelectionDemo() {
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Choose Your Experience</h2>
        <p className="text-muted-foreground">
          Select how you'd like to determine your starting difficulty level
        </p>
      </div>

      <ExperienceSelection
        options={experienceOptions}
        selectedValue={selectedExperience}
        onSelectionChange={setSelectedExperience}
      />

      {selectedExperience && (
        <div className="text-center p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            Selected: <span className="font-medium">{selectedExperience}</span>
          </p>
        </div>
      )}
    </div>
  );
}
