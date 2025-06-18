import { useEffect, useState } from "react";
import { dummyPlayers } from "../../dumy";
import { PlayerProps } from "@/_types/TierMakerTypes";

export default function useTierMaker() {
  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);
  const [tierLines, setTierLines] = useState<PlayerProps[][]>([[], [], []]);

  useEffect(() => {
    setPlayerList(dummyPlayers);
  }, []);

  const handleDragStart = (player: PlayerProps) => (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify(player));
    console.log("ddd");
    console.log(player);
  };

  const handleDrop = (lineIndex: number) => (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    console.log(data);
    const player = JSON.parse(data);

    setTierLines((prev) => {
      const newUpdated = [...prev].map((line) =>
        line.filter((p) => p.id !== player.id)
      );
      newUpdated[lineIndex] = [...newUpdated[lineIndex], player];

      return newUpdated;
    });

    setPlayerList((prev) => prev.filter((p) => p.id !== player.id));
  };

  const handleReturnDrop = (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    const player = JSON.parse(data);

    if (playerList.some((p) => p.id === player.id)) return;

    setPlayerList((prev) => {
      const update = [...prev, player];
      return update;
    });

    setTierLines((prev) => {
      const update = [...prev].map((line) =>
        line.filter((p) => p.id !== player.id)
      );
      return update;
    });
  };

  return {
    playerList,
    handleDragStart,
    setPlayerList,
    handleDrop,
    setTierLines,
    tierLines,
    handleReturnDrop,
  };
}
