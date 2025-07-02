import { useEffect, useState } from "react";
import { tier } from "../../dumy";
import { PlayerProps } from "@/_types/TierMakerTypes";
import { useAlert } from "@/_context/AlertContext";
import { toPng } from "html-to-image";
import useAllPlayers from "./useAllPlayer";

export default function useTierMaker() {
  const { allPlayers } = useAllPlayers();

  const [playerList, setPlayerList] = useState<PlayerProps[]>([]);
  const [filterPlayerList, setFilterPlayerList] = useState<PlayerProps[]>([]);

  const [tierLines, setTierLines] = useState<PlayerProps[][]>([[], [], []]);
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [searchValue, setSearchValue] = useState("");

  const [isInitialLoaded, setIsInitialLoaded] = useState(false);

  const { showAlert } = useAlert();

  useEffect(() => {
    const linesData = localStorage.getItem("tierLines");
    if (linesData) {
      const lines: PlayerProps[][] = JSON.parse(linesData);
      setTierLines(lines);

      const filterResult = allPlayers.filter(
        (p) =>
          !lines.some((line) => line.some((selected) => selected._id === p._id))
      );
      setFilterPlayerList(filterResult);
    } else {
      setFilterPlayerList(allPlayers);
    }

    setPlayerList(allPlayers);
    setIsInitialLoaded(true);
  }, [allPlayers]);

  useEffect(() => {
    if (isInitialLoaded) {
      localStorage.setItem("tierLines", JSON.stringify(tierLines));
    }
  }, [tierLines, isInitialLoaded]);

  const handleDragStart = (player: PlayerProps) => (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify(player));
  };

  const handleDrop = (lineIndex: number) => (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    console.log(data);
    const player = JSON.parse(data);

    setTierLines((prev) => {
      const newUpdated = [...prev].map((line) =>
        line.filter((p) => p._id !== player._id)
      );
      newUpdated[lineIndex] = [...newUpdated[lineIndex], player];

      return newUpdated;
    });

    setFilterPlayerList((prev) => prev.filter((p) => p._id !== player._id));
  };

  const handleReturnDrop = (e: React.DragEvent) => {
    const data = e.dataTransfer.getData("application/json");
    const player = JSON.parse(data);

    if (filterPlayerList.some((p) => p._id === player._id)) return;

    setFilterPlayerList((prev) => {
      const update = [...prev, player];
      return update;
    });

    setTierLines((prev) => {
      const update = [...prev].map((line) =>
        line.filter((p) => p._id !== player._id)
      );
      return update;
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    const result = playerList.filter(
      (p) =>
        !tierLines.some((line) =>
          line.some((selected) => selected._id === p._id)
        )
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
        !tierLines.some((line) =>
          line.some((selected) => selected._id === p._id)
        )
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

  const handleResetTierMaker = () => {
    if (confirm("티어메이커를 초기화 하시겠습니까?")) {
      setTierLines([[], [], []]);
      setFilterPlayerList(allPlayers);
      showAlert("티어 메이커를 초기화했습니다.");
    }
  };

  const handleDownTierMaker = async () => {
    const element = document.getElementById("capture-tiermaker");
    if (!element || playerList.length === filterPlayerList.length) {
      showAlert("배정된 선수가 없습니다.");
      return;
    }

    const dataUrl = await toPng(element);

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "tierList.jpg";
    link.click();
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
    hanldeTierPlus,
    handdleTierMinus,
    handleResetTierMaker,
    handleDownTierMaker,
  };
}
