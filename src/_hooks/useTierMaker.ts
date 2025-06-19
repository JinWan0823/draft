import { useEffect, useState } from "react";
import { dummyPlayers } from "../../dumy";
import { PlayerProps } from "@/_types/TierMakerTypes";

export default function useTierMaker() {
  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);
  const [filterPlayerList, setFilterPlayerList] = useState<PlayerProps[]>([]);

  const [tierLines, setTierLines] = useState<PlayerProps[][]>([[], [], []]);
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setPlayerList(dummyPlayers);
    setFilterPlayerList(dummyPlayers);
  }, []);

  const handleDragStart = (player: PlayerProps) => (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify(player));
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

    setFilterPlayerList((prev) => prev.filter((p) => p.id !== player.id));
  };

  const handleReturnDrop = (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    const player = JSON.parse(data);

    if (filterPlayerList.some((p) => p.id === player.id)) return;

    setFilterPlayerList((prev) => {
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    const result = playerList.filter(
      (p) =>
        !tierLines.some((line) => line.some((selected) => selected.id === p.id))
    );

    if (value.trim() === "") {
      setFilterPlayerList(result);
    } else {
      const filtered = result.filter((p) => p.name.includes(value));
      setFilterPlayerList(filtered);
    }
  };

  const handleResetFilter = () => {
    //playerList 전체 플레이어중에 tierLines [][] 배열에 포함되어있지 않은 애들만
    const result = playerList.filter(
      (p) =>
        !tierLines.some((line) => line.some((selected) => selected.id === p.id))
    );
    setFilterPlayerList(result);
    setSearchValue("");
    setSelectedPosition("포지션 선택");
  };

  return {
    handleDragStart,
    handleDrop,
    setTierLines,
    tierLines,
    handleReturnDrop,
    selectedPosition,
    setSelectedPosition,
    searchValue,
    handleSearch,
    filterPlayerList,
    handleResetFilter,
  };
}
