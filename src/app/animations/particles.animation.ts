import { MoveDirection, OutMode } from 'tsparticles-engine';

export const particles = {
  background: {
    color: {
      value: '#160129',
    },
  },
  fpsLimit: 120,
  particles: {
    color: {
      value: '#e8d9f7',
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};
