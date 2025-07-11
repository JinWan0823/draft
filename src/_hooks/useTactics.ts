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

export default function useTactics() {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [dummyPlayers, setDummyPlayers] = useState<DummyInfo[]>([]);
  const [ball, setBall] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
    const paddingX = 0.1; // 좌우 여백 10%
    const paddingY = 0.05; // 상하 여백 5%

    const minX = dimensions.width * paddingX;
    const maxX = dimensions.width * (1 - paddingX);
    const minY = dimensions.height * paddingY;
    const maxY = dimensions.height * (1 - paddingY);

    const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

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

  return {
    players,
    ball,
    setBall,
    dummyPlayers,
    deleteMode,
    redPen,
    setRedPen,
    bluePen,
    setBluePen,
    drawing,
    setDrawing,
    handleDrop,
    handleDummyPlayer,
    handleDragOver,
    handleDeleteMode,
    handleDeleteDummyPlayer,
    handleDeletePlayer,
    setDimensions,
    dimensions,
  };
}
