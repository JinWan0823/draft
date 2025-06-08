"use client";

import { useState } from "react";
import TacticBadge from "./TacticBadge";

interface PlayerInfo {
  name: string;
  image: string;
  position: string;
  x: number;
  y: number;
}

export default function DraggablePlayer({
  name,
  image,
  position,
  x,
  y,
}: PlayerInfo) {
  const [pos, setPos] = useState({ x: x, y: y });

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
      <div
        className="img relative w-[44px] h-[44px] rounded-full bg-[#333] shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <TacticBadge position={position} />
      </div>
      <span className="px-2 text-sm bg-white rounded-[8px] mt-1">{name}</span>
    </div>
  );
}
