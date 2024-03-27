import React, { useEffect, useRef } from 'react';

const RainbowSwirl = ({position}) => {
    const canvasRef = useRef(null);
    let requestId;
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 30 + 5;
                this.speedX = Math.random() * 3 - 2;
                this.speedY = Math.random() * 3 - 2;
                this.color = `hsl(${Math.random() * 360}, 20%, 50%)`;
                // this.color = `#bd883c`;

            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const handleMouseMove = (e) => {
            particles.push(new Particle(e.clientX, e.clientY));
            if (particles.length > 100) {
                particles.shift();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestId = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(requestId);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: `${position}`, top: 0, left: 0, zIndex: -1 }} />;
};

export default RainbowSwirl;
