"use client";

import { useEffect, useRef, useState } from "react";

export default function Board() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = 580;
      setDimensions({ width, height });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = dimensions.width);
    const height = (canvas.height = dimensions.height);

    const stripeCount = 8;
    const stripeWidth = width / stripeCount;
    for (let i = 0; i < stripeCount; i++) {
      ctx.fillStyle = i % 2 === 0 ? "#2e7d32" : "#388e3c";
      ctx.fillRect(i * stripeWidth, 0, stripeWidth, height);
    }

    const margin = 10;
    const fieldX = margin;
    const fieldY = margin;
    const fieldWidth = width - margin * 2;
    const fieldHeight = height - margin * 2;

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.strokeRect(fieldX, fieldY, fieldWidth, fieldHeight);

    // 센터 라인
    ctx.beginPath();
    ctx.moveTo(width / 2, fieldY);
    ctx.lineTo(width / 2, fieldY + fieldHeight);
    ctx.stroke();

    // 센터 서클
    ctx.beginPath();
    const centerCircleRadius = fieldHeight * 0.12;
    ctx.arc(width / 2, height / 2, centerCircleRadius, 0, Math.PI * 2);
    ctx.stroke();

    // 페널티 박스
    const boxWidth = fieldWidth * 0.13;
    const boxHeight = fieldHeight * 0.47;
    const leftBoxX = fieldX;
    const rightBoxX = width - boxWidth - margin;

    ctx.strokeRect(leftBoxX, (height - boxHeight) / 2, boxWidth, boxHeight);
    ctx.strokeRect(rightBoxX, (height - boxHeight) / 2, boxWidth, boxHeight);

    // 골키퍼 박스
    const goalBoxWidth = fieldWidth * 0.05;
    const goalBoxHeight = fieldHeight * 0.23;
    ctx.strokeRect(
      fieldX,
      (height - goalBoxHeight) / 2,
      goalBoxWidth,
      goalBoxHeight
    );
    ctx.strokeRect(
      width - goalBoxWidth - margin,
      (height - goalBoxHeight) / 2,
      goalBoxWidth,
      goalBoxHeight
    );

    // 페널티 스팟
    ctx.beginPath();
    const leftSpotX = fieldX + boxWidth * 0.67;
    const rightSpotX = width - fieldX - boxWidth * 0.67;
    ctx.arc(leftSpotX, height / 2, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(rightSpotX, height / 2, 3, 0, Math.PI * 2);
    ctx.fill();

    // 페널티 아크
    const arcRadius = centerCircleRadius;
    ctx.beginPath();
    ctx.arc(
      leftSpotX,
      height / 2,
      arcRadius,
      0.27 * Math.PI,
      1.73 * Math.PI,
      true //방향
    );
    ctx.stroke();

    // 오른쪽 아크
    ctx.beginPath();
    ctx.arc(
      rightSpotX,
      height / 2,
      arcRadius,
      0.73 * Math.PI,
      1.27 * Math.PI,
      false
    );
    ctx.stroke();
  }, [dimensions]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-lg shadow-lg border border-white"
      />
    </div>
  );
}
