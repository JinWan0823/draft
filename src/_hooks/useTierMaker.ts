import { useEffect, useState } from "react";
import { dummyPlayers, tier } from "../../dumy";
import { PlayerProps } from "@/_types/TierMakerTypes";
import { useAlert } from "@/_context/AlertContext";

export default function useTierMaker() {
  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);
  const [filterPlayerList, setFilterPlayerList] = useState<PlayerProps[]>([]);

  const [tierLines, setTierLines] = useState<PlayerProps[][]>([[], [], []]);
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [searchValue, setSearchValue] = useState("");

  const { showAlert } = useAlert();

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

  const hanldeTierPlus = () => {
    if (tierLines.length >= tier.length) {
      showAlert("최대치에 도달하였습니다.");
      return;
    }

    //  tierLines의 초기 세팅은 빈 배열 3개임 눌렀을때 빈 배열이 추가되어야함
    setTierLines((prev) => {
      return [...prev, []];
    });
  };

  const handdleTierMinus = () => {
    if (tierLines.length <= 3) {
      showAlert("더 이상 삭제할 수 없습니다.");
      return;
    }
    setTierLines((prev) => prev.slice(0, -1));
  };

  // const handdleTierMinus = () => {
  //   setTierLines((prev) => {
  //     if (tierLines.length <= 3) {
  //       showAlert("더 이상 삭제할 수 없습니다.");
  //       return prev;
  //     }

  //     const newTierLines = [...prev];
  //     const deletePlayer = newTierLines.pop(); // 마지막 배열 삭제, 삭제한 배열 저장
  //     setFilterPlayerList((prev) => {
  //       return [...prev, ...(deletePlayer || [])];
  //     });

  //     return newTierLines;
  //   });
  // };

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
    hanldeTierPlus,
    handdleTierMinus,
  };
}
