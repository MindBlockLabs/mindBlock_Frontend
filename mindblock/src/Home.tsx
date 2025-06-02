import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import HeroSection from "./components/HeroSection";
import LottieAnimationSection from "./components/LottieAnimationSection";
import GameFeature from "./components/GameFeatures";
import Footer from "./components/Footer";
import { options } from "./config/particlesConfig";

function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container: Container | undefined) => {
  //   await console.log(container);
  // }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        // loaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0"
      />
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_2px,transparent_1px),linear-gradient(to_bottom,#121212_2px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-10"></div> */}

      <div className="absolute top-0 -left-20 w-72 h-72 bg-[var(--color-secondary-glow)]/24 rounded-full blur-[100px] z-10"></div>
      <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-400/24 rounded-full blur-[100px] z-10"></div>

      <div className="relative z-20">
        <HeroSection />
        <LottieAnimationSection />
        <GameFeature />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
