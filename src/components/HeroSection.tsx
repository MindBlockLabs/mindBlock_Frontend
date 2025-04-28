import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// Removed Lottie-related imports: lottieJson, LottieAnimation
import LearnMoreButton from "./LearnMoreButton";
import PlayNowButton from "./PlayNowButton";

const HeroSectionContainer = styled(motion.section)`
  // Apply motion directly here
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1rem;
  min-height: 80vh; // Adjusted height as needed, maybe less without animation
  position: relative;
  z-index: 10;
  width: 100%;
`;

// Adjusted TextContent for centered layout
const TextContent = styled.div`
  max-width: 650px; // Increase max-width slightly for centered text
  width: 100%; // Allow it to take available width

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.2;
    background: linear-gradient(90deg, #ff00cc, #3333ff, #00e5ff);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem; // Adjusted margin
    font-family: var(--font-primary);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 2.5rem; // Adjusted margin
    margin-left: auto; // Keep centered on smaller screens if needed
    margin-right: auto; // Keep centered on smaller screens if needed
    max-width: 550px; // Adjusted max-width

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

// Keep ButtonContainer, centered by default due to parent's text-align: center
const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem; // Slightly increased gap
  justify-content: center; // Explicitly center buttons
  margin-top: 1rem; // Reduced margin-top
`;

// Removed AnimationContainer styled component

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Removed isLottieDataValid logic

  return (
    // Apply animation directly to the container
    <HeroSectionContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      {/* Removed the extra motion.div wrapper */}
      <TextContent>
        <motion.h1
          style={{ fontFamily: "var(--font-primary)" }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Challenge your Mind with Blockchain Puzzles
        </motion.h1>

        <p>
          Solve coding and logic puzzles, compete with others, and earn rewards
          in this futuristic blockchain-based game.
        </p>

        <ButtonContainer>
          <PlayNowButton />
          <LearnMoreButton />
        </ButtonContainer>
      </TextContent>

      {/* Removed AnimationContainer and LottieAnimation component */}
    </HeroSectionContainer>
  );
};

export default HeroSection;
