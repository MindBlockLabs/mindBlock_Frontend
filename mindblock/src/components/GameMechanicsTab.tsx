"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Gamepad2,
  TrendingUp,
  Brain,
  Puzzle,
  Grid3X3,
  Zap,
  Users,
} from "lucide-react";

export function GameMechanicsTab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Two-column grid layout on desktop, single column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Adaptive Difficulty Card */}
        <Card
          className={`transition-all duration-700 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          } border-border bg-card`}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Adaptive Difficulty</CardTitle>
            </div>
            <CardDescription>
              Our intelligent system automatically adjusts puzzle complexity
              based on your performance, ensuring optimal challenge and learning
              progression.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* How It Works Section */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-chart-1" />
                How It Works
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-1 mt-2 flex-shrink-0" />
                  <p>
                    <strong>Performance Tracking:</strong> Monitors your solving
                    speed, accuracy, and pattern recognition
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-2 mt-2 flex-shrink-0" />
                  <p>
                    <strong>Dynamic Adjustment:</strong> Increases difficulty
                    after consecutive successes, decreases after struggles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-chart-3 mt-2 flex-shrink-0" />
                  <p>
                    <strong>Personalized Learning:</strong> Adapts to your
                    unique cognitive strengths and learning pace
                  </p>
                </div>
              </div>
            </div>

            {/* Skill Levels Section */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-chart-2" />
                Skill Levels
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="secondary" className="justify-center py-2">
                  <Brain className="h-3 w-3 mr-1" />
                  Beginner
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  <Target className="h-3 w-3 mr-1" />
                  Intermediate
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  <Zap className="h-3 w-3 mr-1" />
                  Advanced
                </Badge>
                <Badge variant="secondary" className="justify-center py-2">
                  <Users className="h-3 w-3 mr-1" />
                  Expert
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Puzzle Types Card */}
        <Card
          className={`transition-all duration-700 ease-out delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          } border-border bg-card`}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl">Puzzle Types</CardTitle>
            </div>
            <CardDescription>
              Explore various puzzle categories designed to challenge different
              cognitive skills and problem-solving approaches.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Logic Puzzles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-chart-1" />
                <h4 className="font-semibold">Logic Puzzles</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Deductive reasoning challenges that test your ability to draw
                logical conclusions from given premises.
              </p>
            </div>

            {/* Pattern Recognition */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Grid3X3 className="h-4 w-4 text-chart-2" />
                <h4 className="font-semibold">Pattern Recognition</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Visual and numerical sequences that enhance your ability to
                identify underlying patterns and relationships.
              </p>
            </div>

            {/* Spatial Reasoning */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Puzzle className="h-4 w-4 text-chart-3" />
                <h4 className="font-semibold">Spatial Reasoning</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                3D visualization and manipulation tasks that develop your
                spatial intelligence and mental rotation skills.
              </p>
            </div>

            {/* Mathematical Puzzles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-chart-4" />
                <h4 className="font-semibold">Mathematical Puzzles</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Number-based challenges that combine arithmetic, algebra, and
                creative problem-solving techniques.
              </p>
            </div>

            {/* Word Puzzles */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-chart-5" />
                <h4 className="font-semibold">Word Puzzles</h4>
              </div>
              <p className="text-sm text-muted-foreground ml-6">
                Language-based challenges that improve vocabulary, verbal
                reasoning, and linguistic pattern recognition.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
