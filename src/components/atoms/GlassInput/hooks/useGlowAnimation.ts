import { useRef } from "react";

export const useGlowAnimation = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const triggerGlow = () => {
    const wrapper = glowRef.current;
    const input = inputRef.current;

    if (wrapper && input) {
      wrapper.classList.add("animate-glow");
      input.classList.add("border-hidden");

      setTimeout(() => {
        wrapper.classList.remove("animate-glow");
        wrapper.classList.add("fade-out-glow");
      }, 1000);

      setTimeout(() => {
        wrapper.classList.remove("fade-out-glow");
        input.classList.remove("border-hidden");
      }, 0);
    }
  };

  return {
    glowRef,
    inputRef,
    triggerGlow,
  };
};
