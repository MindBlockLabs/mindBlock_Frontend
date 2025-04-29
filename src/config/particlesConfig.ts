import type { ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
  background: {
    color: {
      value: "#0d0d0d",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.3,
        },
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: {
      value: ["#00e5ff", "#4a00e0", "#ffffff"],
    },
    links: {
      color: "#ffffff",
      distance: 170,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 0.5,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.4,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};
