import { useEffect, useRef } from "react";

export function WindEffect() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      canvas.width = width = window.innerWidth;
      canvas.height = height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      const particles = [];
      const maxParticles = 150;
      
      // Initialize wind particles
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * 80 + 20,
          opacity: Math.random() * 0.8 + 0.3,
          speed: Math.random() * 3 + 2,
          angle: Math.random() * Math.PI / 6 - Math.PI / 12, // Slight angle variation
          thickness: Math.random() * 2 + 0.5,
        });
      }

      let windIntensity = 0.5;
      let windDirection = 1;
      let windTimer = 0;

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Update wind intensity with sine wave for gusts
        windTimer += 0.01;
        windIntensity = 0.3 + 0.7 * (Math.sin(windTimer * 0.5) + 1) / 2;
        
        // Occasional direction changes
        if (Math.random() < 0.002) {
          windDirection *= -1;
        }

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          // Draw wind streak
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          
          const endX = p.x + Math.cos(p.angle) * p.length;
          const endY = p.y + Math.sin(p.angle) * p.length;
          
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * windIntensity * 0.6})`;
          ctx.lineWidth = p.thickness;
          ctx.lineCap = "round";
          ctx.stroke();
          
          // Move particle
          p.x += p.speed * windIntensity * windDirection * 2;
          p.y += Math.sin(p.angle) * p.speed * windIntensity * 0.5;
          
          // Add some vertical drift
          p.y += (Math.random() - 0.5) * 0.5;
          
          // Reset particle if it goes off screen
          if (windDirection > 0 && p.x > width + p.length) {
            p.x = -p.length;
            p.y = Math.random() * height;
          } else if (windDirection < 0 && p.x < -p.length) {
            p.x = width + p.length;
            p.y = Math.random() * height;
          }
          
          // Reset if too high or low
          if (p.y < -50 || p.y > height + 50) {
            p.y = Math.random() * height;
          }
        }
        
        requestAnimationFrame(draw);
      };

      draw();
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [ref]);

  return <canvas ref={ref} className="opacity-60" />;
}
