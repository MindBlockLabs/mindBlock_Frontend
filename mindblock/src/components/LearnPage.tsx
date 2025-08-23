"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GameMechanicsTab } from "@/components/game-mechanics-tab";

export function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Learn</h1>

        <Tabs defaultValue="game-mechanics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="game-mechanics">Game Mechanics</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="mt-6">
            <div className="text-center text-muted-foreground">
              Basics content coming soon...
            </div>
          </TabsContent>

          <TabsContent value="game-mechanics" className="mt-6">
            <GameMechanicsTab />
          </TabsContent>

          <TabsContent value="strategies" className="mt-6">
            <div className="text-center text-muted-foreground">
              Strategies content coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
