import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/Puzzle.json"; // Ensure this path is correct

const LottieAnimationSection: React.FC = () => {
  if (!lottieJson || Object.keys(lottieJson).length === 0) {
    console.error(
      "LottieAnimationSection: Animation data failed to load or is empty!"
    );
    return (
      <section className="py-16 flex justify-center items-center">
        <p className="text-center text-red-500">
          Error: Could not load animation data.
        </p>
      </section>
    );
  }

  return (
    <section className=" flex justify-center items-center">
      <Lottie loop animationData={lottieJson} play style={{ width: 600 }} />
      {/* <p className="text-center text-gray-500">Lottie Animation Placeholder</p> */}
    </section>
  );
};

export default LottieAnimationSection;
