// src/components/effects/SubtleBackground.tsx
import React, { useEffect, useRef, useCallback } from 'react';
import { prefersReducedMotion } from '../../utils';

interface SubtleBackgroundProps {
  variant?: 'gradient' | 'particles' | 'waves' | 'geometric' | 'neural';
}

export const SubtleBackground: React.FC<SubtleBackgroundProps> = ({ 
  variant
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(0, 255, 136, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      if (!prefersReducedMotion()) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion()) {
      animate();
    }
  }, []);

  const drawWaves = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 221, 119, 0.1)');

      // Draw multiple wave layers
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = canvas.height / 2 + 
            Math.sin((x * 0.01) + (time * 0.02) + (i * 2)) * (30 + i * 10) +
            Math.sin((x * 0.02) + (time * 0.03) + (i * 1.5)) * (20 + i * 5);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.3 - (i * 0.1);
        ctx.fill();
      }

      time += 1;
      
      if (!prefersReducedMotion()) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion()) {
      animate();
    }
  }, []);

  const drawGeometric = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw rotating geometric shapes
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((time * 0.001 + i * 0.2) * Math.PI);
        
        // Draw hexagon
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI * 2) / 6;
          const radius = 100 + i * 50;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 - i * 0.02})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }

      time += 1;
      
      if (!prefersReducedMotion()) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion()) {
      animate();
    }
  }, []);

  const drawNeural = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simplified neural network visualization
    const nodes: Array<{
      x: number;
      y: number;
      pulse: number;
      layer: number;
    }> = [];

    // Create nodes in layers
    for (let layer = 0; layer < 4; layer++) {
      const nodesInLayer = 4 + Math.floor(Math.random() * 3);
      for (let i = 0; i < nodesInLayer; i++) {
        nodes.push({
          x: (canvas.width / 5) * (layer + 1),
          y: (canvas.height / (nodesInLayer + 1)) * (i + 1),
          pulse: Math.random() * Math.PI * 2,
          layer
        });
      }
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between layers
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].layer === nodes[i].layer + 1) {
            const opacity = 0.1 + Math.sin(time * 0.02 + nodes[i].pulse) * 0.05;
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const pulseSize = 2 + Math.sin(time * 0.03 + node.pulse) * 1;
        const opacity = 0.3 + Math.sin(time * 0.02 + node.pulse) * 0.2;
        
        ctx.fillStyle = `rgba(0, 255, 136, ${opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      time += 1;
      
      if (!prefersReducedMotion()) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion()) {
      animate();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start appropriate animation based on variant
    switch (variant) {
      case 'particles':
        drawParticles();
        break;
      case 'waves':
        drawWaves();
        break;
      case 'geometric':
        drawGeometric();
        break;
      case 'neural':
        drawNeural();
        break;
      default:
        drawNeural();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [variant, drawParticles, drawWaves, drawGeometric, drawNeural]);

  if (prefersReducedMotion()) {
    return (
      <div className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${
        variant === 'gradient' ? 'bg-gradient-to-br from-cyber-primary/5 via-cyber-secondary/5 to-cyber-green/5' :
        variant === 'particles' ? 'bg-gradient-to-br from-cyber-primary/10 via-cyber-green/5 to-cyber-secondary/10' :
        variant === 'waves' ? 'bg-gradient-to-b from-cyber-primary/8 via-cyber-secondary/4 to-cyber-green/8' :
        variant === 'geometric' ? 'bg-gradient-to-br from-cyber-primary/5 via-cyber-green/5 to-cyber-secondary/5' :
        'bg-gradient-to-br from-cyber-primary/8 via-cyber-green/4 to-cyber-secondary/8'
      }`} />
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-cyber-secondary/5 to-cyber-green/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/5 via-cyber-primary/5 to-cyber-secondary/10" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
