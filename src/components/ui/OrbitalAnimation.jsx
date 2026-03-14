import { useEffect, useRef } from 'react';

const OrbitalAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    let angle1 = 0;
    let angle2 = Math.PI;
    let angle3 = Math.PI / 2;
    let angle4 = (3 * Math.PI) / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw orbital rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Outer ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 120, 40, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Middle ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 90, 30, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner ring
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 60, 20, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw orbiting dots
      const drawDot = (angle, radius, radiusY) => {
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radiusY;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      };
      
      drawDot(angle1, 120, 40);
      drawDot(angle2, 90, 30);
      drawDot(angle3, 60, 20);
      drawDot(angle4, 90, 30);
      
      angle1 += 0.01;
      angle2 += 0.015;
      angle3 += 0.02;
      angle4 += 0.012;
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width={300} 
      height={250}
      className="w-full max-w-[300px]"
    />
  );
};

export default OrbitalAnimation;
