import { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import GameFeature from "./components/GameFeatures";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
        <section className="">
          {/* Background gradient lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_2px,transparent_1px),linear-gradient(to_bottom,#121212_2px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          {/* Background gradient circles */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--color-secondary-glow)]/24 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-400/24 rounded-full blur-[100px]"></div>

          {}
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1
                className="font-orbitron text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-secondary-glow)] via-purple-400 to-secondary"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Challenge Your Mind with Blockchain Puzzles
              </h1>
            </motion.div>
          </div>
        </section>
        <GameFeature />
      </div>
    </>
  );
}

export default App;
