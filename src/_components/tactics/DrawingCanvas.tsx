import { useEffect, useRef, useState } from "react";

interface DrowingProps {
  redPen: boolean;
}

export default function DrawingCanvas({ redPen }: DrowingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  const penColor = redPen ? "red" : "blue";

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (canvas && container) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        setIsDrawing(true);
        const { left, top } = canvas.getBoundingClientRect();
        setLastPosition({
          x: e.clientX - left,
          y: e.clientY - top,
        });
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const { left, top } = canvas.getBoundingClientRect();
        const currentX = e.clientX - left;
        const currentY = e.clientY - top;

        context.beginPath();
        context.moveTo(lastPosition.x, lastPosition.y);
        context.lineTo(currentX, currentY);
        context.strokeStyle = penColor;
        context.lineWidth = 3;
        context.lineCap = "round";
        context.stroke();

        setLastPosition({ x: currentX, y: currentY });
      }
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full z-999"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
}
