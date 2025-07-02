"use client";

import Logo from "@/_components/common/Logo";
import Ball from "@/_components/tactics/Ball";
import Board from "@/_components/tactics/Board";
import DraggablePlayer from "@/_components/tactics/DraggablePlayer";
import DrawingCanvas from "@/_components/tactics/DrawingCanvas";
import DrawTool from "@/_components/tactics/DrawTool";
import DummyPlayer from "@/_components/tactics/DummyPlayer";
import TacticIntro from "@/_components/tactics/TacticIntro";
import TacticList from "@/_components/tactics/TacticList";
import ToolList from "@/_components/tactics/ToolList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  id: string;
}

export default function Tactice() {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [dummyPlayers, setDummyPlayers] = useState<DummyInfo[]>([]);
  const [ball, setBall] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const [redPen, setRedPen] = useState(false);
  const [bluePen, setBluePen] = useState(false);
  const [drawing, setDrawing] = useState(false);

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

  const handleDummyPlayer = (teamNumber: number) => {
    const randomX = Math.floor(Math.random() * 800) + 100;
    const randomY = Math.floor(Math.random() * 550);
    setDummyPlayers((prev) => [
      ...prev,
      {
        id: uuidv4(),
        x: randomX,
        y: randomY,
        team: teamNumber,
      },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDeleteMode = () => {
    setDeleteMode((prev) => !prev);
  };

  const handleDeleteDummyPlayer = (id: string) => {
    setDummyPlayers((prev) => prev.filter((p) => p.id !== id));
  };

  const handleDeletePlayer = (name: string) => {
    setPlayers((prev) => prev.filter((p) => p.name !== name));
  };

  return (
    <section className="w-[1100px] mx-auto py-[120px]">
      <Logo />
      <TacticList />
      <div className="fixed right-[20px] top-1/2 -translate-y-1/2">
        <ToolList
          handleDummyPlayer={handleDummyPlayer}
          setBall={setBall}
          ball={ball}
          handleDeleteMode={handleDeleteMode}
          deleteMode={deleteMode}
        />
        <DrawTool
          redPen={redPen}
          bluePen={bluePen}
          setRedPen={setRedPen}
          setBluePen={setBluePen}
          setDrawing={setDrawing}
        />
      </div>

      <TacticIntro />
      <div
        className="p-[20px] mt-6 w-full bg-white relative mx-auto shadow-lg rounded"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Board />
        {drawing && <DrawingCanvas redPen={redPen} />}
        {players.map((player) => (
          <DraggablePlayer
            key={player.name}
            {...player}
            deleteMode={deleteMode}
            onDelete={() => handleDeletePlayer(player.name)}
          />
        ))}
        {dummyPlayers.map((player) => (
          <DummyPlayer
            key={player.id}
            {...player}
            deleteMode={deleteMode}
            onDelete={() => handleDeleteDummyPlayer(player.id)}
          />
        ))}
        {ball && <Ball x={528} y={278} />}
      </div>
    </section>
  );
}
