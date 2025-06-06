"use client";

import { useState } from "react";
import TacticBadge from "./TacticBadge";

export default function DraggablePlayer() {
  const [pos, setPos] = useState({ x: 50, y: 20 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX - pos.x;
    const startY = e.clientY - pos.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      setPos({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="absolute flex flex-col items-center justify-center"
      style={{ top: pos.y, left: pos.x }}
      onMouseDown={handleMouseDown}
    >
      <div className="img relative w-[44px] h-[44px] rounded-full bg-[#333] shadow-xl">
        <TacticBadge position="스트라이커" />
      </div>
      <span className="px-2 text-sm bg-white rounded-[8px] mt-1">감스트</span>
    </div>
  );
}
