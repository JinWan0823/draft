import { useEffect, useState } from "react";
import { dummyPlayers, softColors } from "../../dumy";
import { CoachProps, TeamPlayerProps } from "@/_types/draftTypes";

export default function useDraft() {
  const [inputValue, setInputValue] = useState("");
  const [coachList, setCoachList] = useState<CoachProps[]>([]);
  const [currentOrder, setCurrentOrder] = useState(1);
  const [selectedCoachName, setSelectedCoachName] = useState<string | null>(
    null
  );
  const [isReset, setIsReset] = useState(false);
  const [playerList, setPlayerList] = useState<TeamPlayerProps[]>([]);

  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [addPlayer, setAddPlayer] = useState("");

  const [draftResult, setDraftResult] = useState(false);

  useEffect(() => {
    setPlayerList(dummyPlayers);
  }, []);

  useEffect(() => {
    if (isReset) {
      setIsReset(false);
      handleRandomSelect();
    }
  }, [isReset]);

  const getRandomColor = () => {
    const idx = Math.floor(Math.random() * softColors.length);
    return softColors[idx];
  };

  //입력 감독 생성
  const handleCoach = () => {
    if (!inputValue.trim()) return;
    if (coachList.some((coach) => coach.name === inputValue.trim())) return;

    const foundPlayer = dummyPlayers.find(
      (player) => player.name === inputValue.trim()
    );

    const newCoach = {
      name: inputValue.trim(),
      image: foundPlayer ? foundPlayer.image : "/team1.png",
      teamPlayer: [],
      color: getRandomColor(),
    };

    setCoachList((prev) => [...prev, newCoach]);
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCoach();
  };

  // 감독 초기화
  const handleCoachReset = () => {
    setCoachList([]);
    setCurrentOrder(1);
    setSelectedCoachName(null);
  };

  //감독 랜덤 선택
  const handleRandomSelect = () => {
    if (coachList.length === 0) {
      alert("먼저 감독을 추가해주세요!");
      return;
    }

    const unassigned = coachList.filter((coach) => coach.order === undefined);

    if (unassigned.length === 0) {
      const resetCoachList = coachList.map((coach) => ({
        ...coach,
        order: undefined,
      }));
      setCoachList(resetCoachList);
      setCurrentOrder(1);
      setIsReset(true);
      return;
    }

    const randomIdx = Math.floor(Math.random() * unassigned.length);
    const selectedCoachName = unassigned[randomIdx].name;

    const updateCoachList = coachList.map((coach) => {
      if (coach.name === selectedCoachName) {
        return { ...coach, order: currentOrder };
      }
      return coach;
    });

    setSelectedCoachName(selectedCoachName);
    setCoachList(updateCoachList);
    setCurrentOrder((prev) => prev + 1);
  };

  //드래프트 선수 선택
  const handlePlayerSelect = (player: TeamPlayerProps) => {
    if (!selectedCoachName) return;
    const alreadySelected = coachList.some((coach) =>
      coach.teamPlayer.some((p) => p.name === player.name)
    );
    if (alreadySelected) return;

    const updateCoachList = coachList.map((coach) => {
      if (coach.name === selectedCoachName) {
        return {
          ...coach,
          teamPlayer: [...coach.teamPlayer, player],
        };
      }
      return coach;
    });

    setCoachList(updateCoachList);
  };

  const isAlreadySelected = (playerName: string) => {
    return coachList.some((coach) =>
      coach.teamPlayer.some((player) => player.name === playerName)
    );
  };

  //선택된 선수 제거
  const handlePlayerDelete = (name: string) => {
    const updateCoachList = coachList.map((coach) => ({
      ...coach,
      teamPlayer: coach.teamPlayer.filter((player) => player.name !== name),
    }));
    setCoachList(updateCoachList);
  };

  //입력 선수 추가
  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    const updatePlayers = addPlayer
      .split(",")
      .map((str) => str.trim())
      .filter(Boolean);

    if (updatePlayers.length === 0 || selectedPosition === "포지션 선택") {
      alert("이름 및 포지션을 확인해주세요.");
      return;
    }

    const newPlayers = updatePlayers.map((player) => ({
      name: player,
      position: selectedPosition,
    }));

    setPlayerList((prev) => [...prev, ...newPlayers]);
    setSelectedPosition("포지션 선택");
    setAddPlayer("");
  };

  //최종 드래프트 복사
  const handleCopyResult = () => {
    if (coachList.length === 0) return;

    const text = coachList.map((coach, idx) => {
      const teamPlayers = coach.teamPlayer.map((p) => `-${p.name}`).join("\n");
      return `${idx + 1}.${coach.name}팀 (${coach.teamPlayer.length}명) \n${teamPlayers}\n`;
    });

    const resultText = `===최종 팀 결과===\n \n${text.join(`\n`)}`;

    navigator.clipboard
      .writeText(resultText)
      .then(() => alert("복사에 성공했습니다!"));
  };

  return {
    inputValue,
    setInputValue,
    coachList,
    handleSubmit,
    handleCoachReset,
    handleRandomSelect,
    handlePlayerSelect,
    isAlreadySelected,
    handlePlayerDelete,
    handleAddPlayer,
    currentOrder,
    playerList,
    selectedPosition,
    setSelectedPosition,
    addPlayer,
    setAddPlayer,
    draftResult,
    setDraftResult,
    handleCopyResult,
  };
}
