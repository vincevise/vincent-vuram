import React, { useEffect, useRef } from 'react';

interface NoSignalProps {
  grainSize?: number; // This prop is retained for future flexibility
  fps?: number;       // Optional FPS throttle
}

const NoSignal: React.FC<NoSignalProps> = ({ fps = 30 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawNoise = (now: number) => {
      const elapsed = now - lastFrameTimeRef.current;
      const frameDuration = 1000 / fps;

      if (elapsed >= frameDuration) {
        lastFrameTimeRef.current = now;

        const width = canvas.width;
        const height = canvas.height;
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          const gray = Math.random() * 255;
          data[i] = gray;     // R
          data[i + 1] = gray; // G
          data[i + 2] = gray; // B
          data[i + 3] = 255;  // A
        }

        ctx.putImageData(imageData, 0, 0);
      }

      animationRef.current = requestAnimationFrame(drawNoise);
    };

    animationRef.current = requestAnimationFrame(drawNoise);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [fps]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full  z-50"
    />
  );
};

export default NoSignal;
