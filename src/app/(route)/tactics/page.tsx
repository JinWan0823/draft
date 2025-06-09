"use client";

import Logo from "@/_components/common/Logo";
import Ball from "@/_components/tactics/Ball";
import Board from "@/_components/tactics/Board";
import DraggablePlayer from "@/_components/tactics/DraggablePlayer";
import DummyPlayer from "@/_components/tactics/DummyPlayer";
import TacticList from "@/_components/tactics/TacticList";
import ToolList from "@/_components/tactics/ToolList";
import { useState } from "react";

interface PlayerInfo {
  name: string;
  image: string;
  position: string;
  x: number;
  y: number;
}

interface DummyInfo {
  team: number;
  x: number;
  y: number;
}

export default function Tactice() {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [dummyPlayers, setDummyPlayers] = useState<DummyInfo[]>([]);
  const [ball, setBall] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("application/json");
    const player = JSON.parse(data);
    const rect = e.currentTarget.getBoundingClientRect();

    const isAleadyPlayer = players.some((p) => p.name === player.name);
    if (isAleadyPlayer) return;

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
      <ToolList
        setDummyPlayers={setDummyPlayers}
        setBall={setBall}
        ball={ball}
      />
      <div
        className="p-[20px] w-auto bg-white relative mx-auto shadow-lg rounded"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Board />
        {players.map((player, idx) => (
          <DraggablePlayer key={idx} {...player} />
        ))}
        {dummyPlayers.map((player, idx) => (
          <DummyPlayer key={idx} {...player} />
        ))}
        {ball && <Ball x={528} y={278} />}
      </div>
    </section>
  );
}
