'use client';

import { type FC, useEffect, useRef } from 'react';
import noise from 'perlin.js';

export const AnimatedCanvasGrid: FC<{ color?: string }> = ({
  color = '255, 255, 255',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parentSection = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    if (!ctx || !parentSection) return;

    canvas.width = parentSection.scrollWidth;
    canvas.height = parentSection.scrollHeight;

    const resizeCanvas = () => {
      canvas.width = parentSection.scrollWidth;
      canvas.height = parentSection.scrollHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    let noiseVal: number;
    let incN: number;
    let speed: number;
    let xOff: number;
    let yOff: number;
    let resolution: number;
    let inflate: number;
    let zInc = 0;

    noise.seed(Math.random() * 256);

    const drawNoise = () => {
      speed = 0.001;
      incN = 0.044;
      xOff = 0;
      resolution = 30;
      inflate = 174;

      for (let x = -inflate; x <= canvas.width + inflate; x += resolution) {
        yOff = 0;

        for (let y = 0; y <= canvas.height + inflate; y += resolution) {
          noiseVal = noise.simplex3(xOff, yOff, zInc);
          ctx.save();
          ctx.translate(x + inflate, y + inflate);
          ctx.rotate(noiseVal * (Math.PI * 0.25));
          ctx.beginPath();
          ctx.fillStyle = `rgba(${color}, ${noiseVal})`;
          ctx.arc(-inflate, -inflate, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          yOff += incN;
        }
        xOff += incN;
      }
      zInc += speed;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNoise();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      id="noise-canvas"
    />
  );
};
