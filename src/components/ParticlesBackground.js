import React from "react";
import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: { color: "#181818" },
        particles: {
          number: { value: 120, density: { enable: true, value_area: 1000 } },
          move: { enable: true, speed: 1.5 },
          size: { value: 3 },
          opacity: { value: 0.7 },
          color: { value: ["#ff7b00", "#2575fc"] },
          links: { enable: true, distance: 150, color: "#fff", opacity: 0.3 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
