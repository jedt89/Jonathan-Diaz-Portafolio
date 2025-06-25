import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { loadGradientUpdater } from '@tsparticles/updater-gradient';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    try {
      await loadSlim(engine);
      await loadGradientUpdater(engine);
    } catch (error) {
      console.error('Error loading particles:', error);
    }
  }, []);

  const intenseColors = [
    '#FF005580',
    '#00FFAA80',
    '#FF00FF80',
    '#AA00FF80',
    '#00B4FF80',
    '#FFD70080',
    '#FF450080',
    '#7CFC0080',
    '#FF149380',
    '#00FFFF80'
  ];

  const particlesConfig: any = {
    fullScreen: {
      enable: false,
      zIndex: -1
    },
    particles: {
      number: {
        value: 10,
        density: { enable: true, area: 800 }
      },
      color: {
        value: intenseColors
      },
      shape: {
        type: 'square'
      },
      rotate: {
        value: 0,
        random: true,
        direction: 'clockwise',
        animation: {
          enable: true,
          speed: 2,
          sync: false
        }
      },
      opacity: {
        value: 0.3
      },
      size: {
        value: { min: 15, max: 50 },
        random: true
      },
      move: {
        enable: true,
        speed: 0.2,
        outModes: { default: 'bounce' }
      },
      gradient: {
        enable: true,
        type: 'radial',
        stops: [
          { offset: 0, color: 'transparent' },
          {
            offset: 1,
            color:
              intenseColors[Math.floor(Math.random() * intenseColors.length)]
          }
        ]
      }
    },
    background: {
      color: 'transparent'
    }
  };

  return (
    <div
      id='particlesBackground'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    >
      <Particles init={particlesInit} options={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
