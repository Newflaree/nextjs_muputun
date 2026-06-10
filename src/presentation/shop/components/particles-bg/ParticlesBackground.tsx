import { useCallback } from "react";
import type { ComponentProps } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ParticlesPluginRegistrar } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback<ParticlesPluginRegistrar>( async ( engine ) => {
    await loadFull( engine );
  }, []);

  const isIOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test( navigator.userAgent );
  if ( isIOS ) return null;

  return (
    <ParticlesProvider init={ particlesInit }>
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: true, zIndex: -10 },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { push: { quantity: 4 }, repulse: { distance: 70, duration: 0.4 } },
          },
          particles: {
            color: { value: "#1FBEE8" },
            links: { color: "#1FBEE8", distance: 150, enable: true, opacity: 0.4, width: 1 },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: false,
        } as unknown as ComponentProps<typeof Particles>["options"]}
      />
    </ParticlesProvider>
  );
};
