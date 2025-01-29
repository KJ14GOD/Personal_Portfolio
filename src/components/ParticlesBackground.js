import React from "react";
import { Particles } from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: { color: "#181818" },
        particles: {
          number: { value: 150, density: { enable: true, value_area: 1200 } },
          move: { enable: true, speed: 2 },
          size: { value: 3 },
          opacity: { value: 0.8 },
          color: { value: ["#ff007f", "#00eaff"] }, // Neon pink & cyan
          links: { enable: true, distance: 120, color: "#fff", opacity: 0.2 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
