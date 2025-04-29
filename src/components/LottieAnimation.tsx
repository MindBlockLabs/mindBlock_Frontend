import Lottie from "react-lottie-player";
import styled from "styled-components";

interface LottieAnimationProps {
  animationData: object; // Expecting the imported JSON data
}

// You can keep the container styling here or in the parent (HeroSection)
// If kept here, HeroSection's AnimationContainer might just need basic flex properties
const AnimationWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px; // Or adjust as needed
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    height: 300px; // Match HeroSection's media query if needed
    margin-top: 2rem;
  }
`;

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  // Basic check if data is provided
  if (!animationData || Object.keys(animationData).length === 0) {
    console.error("LottieAnimation component received empty animationData.");
    return (
      <AnimationWrapper>
        <div>Animation data missing.</div>
      </AnimationWrapper>
    );
  }

  return (
    <AnimationWrapper>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </AnimationWrapper>
  );
};

export default LottieAnimation;
