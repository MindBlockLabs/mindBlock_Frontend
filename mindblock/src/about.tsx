"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Code, Trophy, Zap, ChevronRight, Cpu, Network } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <main ref={containerRef} className="pt-16 min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.1)_0%,transparent_70%)]"
          style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary">
              About Mind Block
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              A futuristic blockchain-based puzzle game designed to challenge your intellect, reward your skills, and
              revolutionize how we learn through play.
            </p>
            <Button className="bg-primary hover:bg-primary/80 text-black font-medium">Start Your Journey</Button>
          </motion.div>
        </div>
      </section>

      {/* Game Concept Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-6">
                The <span className="text-primary">Game Concept</span>
              </h2>
              <p className="text-foreground/80 mb-6">
                Mind Block combines the thrill of puzzle-solving with the innovation of blockchain technology. Players
                are challenged with a variety of coding and logic puzzles that adapt to their skill level.
              </p>
              <p className="text-foreground/80 mb-6">
                Each puzzle solved not only sharpens your mind but also earns you tokens on the StarkNet blockchain.
                These tokens can be used for in-game benefits or traded on supported platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 group">
                  <span>Learn About Rewards</span>
                  <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-50"></div>
              <Card className="border-purple-900/30 bg-background/80 backdrop-blur-sm p-6 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <Brain className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-orbitron text-lg font-bold mb-2">Adaptive Difficulty</h3>
                    <p className="text-sm text-foreground/70">
                      Puzzles that adjust to your skill level for the perfect challenge.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Trophy className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-orbitron text-lg font-bold mb-2">Compete & Earn</h3>
                    <p className="text-sm text-foreground/70">Climb the leaderboard and earn blockchain rewards.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-600/20">
                    <Code className="h-8 w-8 text-purple-500 mb-3" />
                    <h3 className="font-orbitron text-lg font-bold mb-2">Coding Challenges</h3>
                    <p className="text-sm text-foreground/70">Test your programming skills with specialized puzzles.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-600/10 border border-blue-600/20">
                    <Network className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="font-orbitron text-lg font-bold mb-2">Blockchain Integration</h3>
                    <p className="text-sm text-foreground/70">
                      Secure rewards on StarkNet with transparent transactions.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      
    </main>
  )
}