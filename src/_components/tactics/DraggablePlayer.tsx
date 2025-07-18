"use client";

import { useEffect, useRef, useState } from "react";
import TacticBadge from "./TacticBadge";
import DeleteBtn from "./DeleteBtn";

interface PlayerInfo {
  name: string;
  image: string;
  position: string;
  x: number;
  y: number;
  deleteMode: boolean;
  onDelete: () => void;
}

export default function DraggablePlayer({
  name,
  image,
  position,
  x,
  y,
  deleteMode,
  onDelete,
}: PlayerInfo) {
  const [pos, setPos] = useState({ x, y });
  const ref = useRef<HTMLDivElement>(null);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current?.parentElement) {
      const rect = ref.current.parentElement.getBoundingClientRect();
      setParentSize({ width: rect.width, height: rect.height });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX - pos.x;
    const startY = e.clientY - pos.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      let newX = moveEvent.clientX - startX;
      let newY = moveEvent.clientY - startY;

      newX = Math.max(0, Math.min(newX, parentSize.width - 44)); // 44: player size
      newY = Math.max(0, Math.min(newY, parentSize.height - 44));

      setPos({ x: newX, y: newY });
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
      ref={ref}
      className="absolute flex flex-col items-center justify-center cursor-pointer"
      style={{ top: pos.y, left: pos.x }}
      onMouseDown={handleMouseDown}
    >
      <div
        className="img relative w-[44px] h-[44px] rounded-full bg-[#333] shadow-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <TacticBadge position={position} />
        {deleteMode && <DeleteBtn onClick={onDelete} />}
      </div>
      <span className="px-2 text-sm bg-white rounded-[8px] mt-1">{name}</span>
    </div>
  );
}
