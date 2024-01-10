// React
import { useCallback } from "react";
// Material UI
import { Box } from "@mui/material";
// React Particles
import Particles from "react-particles";
// TS Particles
import { loadSlim } from "tsparticles-slim";

/**
 * `ParticlesBackground` Component
 * 
 * Componente que genera un fondo animado de partículas en la interfaz de usuario.
 * Utiliza la biblioteca React Particles junto con TS Particles para crear efectos visuales
 * interactivos y atractivos.
 * 
 * La configuración de las partículas incluye color, tamaño, cantidad, comportamiento al
 * hacer clic y al pasar el cursor, y otros parámetros de animación. Este fondo de partículas
 * añade un elemento dinámico y moderno al diseño de la aplicación.
 * 
 * El componente Box de Material-UI se utiliza para contener las partículas, asegurando
 * su correcta ubicación y z-index en la estructura de la página.
 * 
 * Ideal para agregar un toque visualmente atractivo a la aplicación sin abrumar al usuario,
 * manteniendo un diseño limpio y profesional.
 * 
 * @example
 * <ParticlesBackground />
 * 
 * @returns {React.Component} El componente de fondo animado de partículas para la aplicación web.
 */
export const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
      await loadSlim( engine );
    }, []);

    return (
      <Box zIndex={ 0 }>
        <Particles
          id="tsparticles"
          init={ particlesInit }
          options={{
            background: {
              color: {
                value: "#fff",
              },
            },
            fullScreen: {
              enable: true,
              zIndex: -10
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 70,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#1FBEE8",
              },
              links: {
                color: "#1FBEE8",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </Box>
    );
};
