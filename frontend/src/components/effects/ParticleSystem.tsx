import React, { useEffect, useRef, useCallback } from 'react';
import { useMousePosition } from '../../hooks';
import { useTheme } from '../../contexts/ThemeContext';
import { prefersReducedMotion } from '../../utils';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
}

export const ParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mousePosition = useMousePosition();
  const { theme } = useTheme();

  // Theme-aware colors
  const colors = theme === 'light' 
    ? ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'] // Light theme: blues, purples, teals
    : ['#60A5FA', '#A78BFA', '#34D399', '#FBBF24', '#F87171']; // Dark theme: lighter variants

  const createParticle = useCallback((x: number, y: number): Particle => {
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 60,
      maxLife: 60,
      size: Math.random() * 2 + 0.5, // Smaller, more subtle particles
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }, [colors]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new particles near mouse (reduced frequency for subtlety)
    if (Math.random() < 0.05) {
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;
      particlesRef.current.push(
        createParticle(
          mousePosition.x + offsetX,
          mousePosition.y + offsetY
        )
      );
    }

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Calculate alpha based on remaining life
      const alpha = particle.life / particle.maxLife;
      
      // Draw particle
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Draw connections to nearby particles
      particlesRef.current.forEach(otherParticle => {
        if (particle === otherParticle) return;
        
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) { // Reduced connection distance
          ctx.save();
          ctx.globalAlpha = (1 - distance / 80) * alpha * 0.2; // More subtle connections
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5; // Thinner lines
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });

      return particle.life > 0;
    });

    if (!prefersReducedMotion()) {
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }
  }, [mousePosition, createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!prefersReducedMotion()) {
      updateParticles();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateParticles]);

  if (prefersReducedMotion()) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: theme === 'light' ? 0.3 : 0.4 }} // Adjust opacity based on theme
      aria-hidden="true"
    />
  );
};
