import { useAlert } from "@/_context/AlertContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function usePlayerCreate() {
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [selectedSubPosition, setSelectedSubPosition] = useState("포지션 선택");
  const [careerArr, setCareerArr] = useState<string[]>([""]);
  const [playerName, setPlayerName] = useState("");
  const [playerInfo, setPlayerInfo] = useState("");

  const { showAlert } = useAlert();
  const router = useRouter();

  const addCareerInput = () => {
    setCareerArr((prev) => [...prev, ""]);
  };

  const removeCareerInput = () => {
    if (careerArr.length > 1) {
      setCareerArr((prev) => [...prev].slice(0, -1));
    }
  };

  const handleCareerChange = (idx: number, value: string) => {
    const newArr = [...careerArr];
    newArr[idx] = value;
    setCareerArr(newArr);
  };

  const handlePlayerCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName || !selectedPosition) {
      showAlert("선수이름과 포지션은 필수입니다!");
      return;
    }
    try {
      const response = await fetch("/api/player", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: playerName,
          position: selectedPosition,
          subPosition: selectedSubPosition,
          playerInfo: playerInfo,
          career: careerArr,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        showAlert(error.message);
        return;
      }
      const data = await response.json();
      console.log("선수 등록", data);
      showAlert("선수 등록 성공!");
      router.push("/players");
    } catch (err) {
      console.error("선수 데이터 등록 실패", err);
      showAlert("서버에 오류가 있습니다.");
    }
  };

  return {
    selectedPosition,
    setSelectedPosition,
    selectedSubPosition,
    setSelectedSubPosition,
    careerArr,
    addCareerInput,
    removeCareerInput,
    handleCareerChange,
    playerName,
    setPlayerName,
    playerInfo,
    setPlayerInfo,
    handlePlayerCreate,
  };
}
