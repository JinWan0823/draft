"use client";

import Logo from "@/_components/common/Logo";
import Board from "@/_components/tactics/Board";
import DraggablePlayer from "@/_components/tactics/DraggablePlayer";
import TacticList from "@/_components/tactics/TacticList";
import { useState } from "react";

interface PlayerInfo {
  name: string;
  image: string;
  position: string;
  x: number;
  y: number;
}

export default function Tactice() {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    const player = JSON.parse(data);
    const rect = e.currentTarget.getBoundingClientRect();

    setPlayers((prev) => [
      ...prev,
      {
        ...player,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-[1100px] mx-auto py-[120px]">
      <Logo />
      <TacticList />
      <div
        className="p-[20px] w-auto bg-white relative mx-auto shadow-lg rounded"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Board />
        {players.map((player, index) => (
          <DraggablePlayer key={index} {...player} />
        ))}
      </div>
    </section>
  );
}
