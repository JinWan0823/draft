import { useEffect, useState } from "react";
import { dummyPlayers } from "../../dumy";
import { PlayerProps } from "@/_types/TierMakerTypes";

export default function useTierMaker() {
  const [player, setPlayer] = useState<PlayerProps[]>([]);
  const [tierLines, setTierLines] = useState<PlayerProps[][]>([[], [], []]);

  useEffect(() => {
    setPlayer(dummyPlayers);
  }, []);

  const handleDragStart = (player: PlayerProps) => (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify(player));
    console.log("ddd");
    console.log(player);
  };

  const handleDrop = (lineIndex: number) => (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    console.log(data);
    const player: PlayerProps = JSON.parse(data);

    setTierLines((prev) => {
      const updated = [...prev];
      updated[lineIndex] = [...updated[lineIndex], player];
      return updated;
    });

    setPlayer((prev) => prev.filter((p) => p.id !== player.id));
  };

  return {
    player,
    handleDragStart,
    setPlayer,
    handleDrop,
    setTierLines,
    tierLines,
  };
}
