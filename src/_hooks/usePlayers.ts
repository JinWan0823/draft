import { useState } from "react";
import useAllPlayers from "./useAllPlayer";

export default function usePlayers() {
  const { allPlayers } = useAllPlayers();

  const [selectedOpt, setSelectedOpt] = useState("이름순");
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");

  const sortOptions = ["이름순", "포지션순"];
  const positionOrder = [
    "스트라이커",
    "윙포워드",
    "센터 미드필더",
    "수비형 미드필더",
    "수비수",
    "풀백",
    "골키퍼",
    "올라운더",
  ];

  const filteredPlayers = allPlayers
    .filter(
      (player) =>
        selectedPosition === "포지션 선택" ||
        player.position === selectedPosition
    )
    .sort((a, b) => {
      if (selectedOpt === "이름순") {
        return a.name.localeCompare(b.name, "ko"); // 한글 이름 정렬
      }
      if (selectedOpt === "포지션순") {
        const aIndex = positionOrder.indexOf(a.position);
        const bIndex = positionOrder.indexOf(b.position);
        return aIndex - bIndex;
      }
      return 0;
    });

  return {
    sortOptions,
    setSelectedOpt,
    setSelectedPosition,
    filteredPlayers,
    allPlayers,
    selectedOpt,
    selectedPosition,
  };
}
