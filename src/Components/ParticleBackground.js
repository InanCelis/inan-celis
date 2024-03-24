import React, { useEffect, useRef } from 'react';
// import './App.css';

const NUM_PARTICLES = 60;
const PARTICLE_SIZE = 4;
const CONNECT_DISTANCE = 150;

class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
    this.size = PARTICLE_SIZE;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x < 0 || this.x > canvasWidth) this.velocityX *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.velocityY *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#6b6b6b';
    ctx.fill();
  }

  static connectParticles(particles, ctx, mouseX, mouseY) {
    particles.forEach((particle, index) => {
      for (let i = index + 1; i < particles.length; i++) {
        const distance = Math.sqrt(
          (particle.x - particles[i].x) ** 2 + (particle.y - particles[i].y) ** 2
        );

        if (distance < CONNECT_DISTANCE) {
          ctx.strokeStyle = 'rgba(129, 131, 132, 0.7)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }

      // Connect to mouse
      if (mouseX && mouseY && Math.sqrt((particle.x - mouseX) ** 2 + (particle.y - mouseY) ** 2) < CONNECT_DISTANCE) {
        ctx.strokeStyle = 'rgba(189, 136, 60, 1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    });
  }
}

function App() {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const particles = useRef([]);
  const mousePosition = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particles.current = Array.from({ length: NUM_PARTICLES }, () => new Particle(canvas.width, canvas.height));

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      Particle.connectParticles(particles.current, ctx, mousePosition.current.x, mousePosition.current.y);

      requestRef.current = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleMouseMove = (e) => {
    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY;
  };

  return <canvas ref={canvasRef} onMouseMove={handleMouseMove} />;
}

export default App;
