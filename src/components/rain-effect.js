import { useEffect, useRef } from "react";

export function RainfallEffect() {
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
      var ctx = canvas.getContext("2d");

      var init = [];
      var maxParts = 200;
      for (var a = 0; a < maxParts; a++) {
        init.push({
          x: Math.random() * width,
          y: Math.random() * height,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() * 10 + 10,
        });
      }

      var particles = [];
      for (var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
      }

      const draw = () => {
        ctx.clearRect(0, 0, width, height);
        for (var c = 0; c < particles.length; c++) {
          var p = particles[c];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          ctx.strokeStyle = "rgba(255, 255, 255, 1)";
          ctx.lineWidth = 1;
          ctx.lineCap = "round";
          ctx.stroke();
        }
        move();
      };

      const move = () => {
        for (var b = 0; b < particles.length; b++) {
          var p = particles[b];
          p.x += p.xs;
          p.y += p.ys;
          if (p.x > width || p.y > height) {
            p.x = Math.random() * width;
            p.y = -20;
          }
        }
      };

      setInterval(draw, 30);
    }

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [ref]);

  return <canvas ref={ref} />;
}
