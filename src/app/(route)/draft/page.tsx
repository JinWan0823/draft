"use client";

import Logo from "@/_components/common/Logo";
import CoachCard from "@/_components/draft/CoachCard";
import DraftIntro from "@/_components/draft/DraftIntro";
import { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { dummyPlayers, positionMenu, softColors } from "../../../../dumy";
import BtnWrap from "@/_components/draft/BtnWrap";
import PositionCategory from "@/_components/draft/PositionCategory";

export interface CoachProps {
  name: string;
  image: string;
  teamPlayer: TeamPlayerProps[];
  color: string;
  order?: number;
}

export interface TeamPlayerProps {
  name: string;
  position: string;
}

export default function Draft() {
  const [inputValue, setInputValue] = useState("");
  const [coachList, setCoachList] = useState<CoachProps[]>([]);

  const [currentOrder, setCurrentOrder] = useState(1);
  const [selectedCoachName, setSelectedCoachName] = useState<string | null>(
    null
  );
  const [isReset, setIsReset] = useState(false);

  const getRandomColor = () => {
    const idx = Math.floor(Math.random() * softColors.length);
    return softColors[idx];
  };

  useEffect(() => {
    if (isReset) {
      setIsReset(false);
      handleRandomSelect();
      // 번호가 전부 지정되었을경우 초기화 후 실행
    }
  }, [isReset]);

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

    setSelectedCoachName(unassigned[randomIdx].name);
    setCoachList(updateCoachList);
    setCurrentOrder((prev) => prev + 1);
  };

  const handlePlayerSelect = (player: TeamPlayerProps) => {
    if (selectedCoachName === null) return;

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
    console.log(coachList);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCoach();
  };

  const handleCoachReset = () => {
    setCoachList([]);
    setCurrentOrder(1);
    setSelectedCoachName(null);
  };

  const handlePlayerDelete = (name: string) => {
    const updateCoachList = coachList.map((coach) => ({
      ...coach,
      teamPlayer: coach.teamPlayer.filter((player) => player.name !== name),
    }));

    setCoachList(updateCoachList);
  };

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <DraftIntro />

      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <h2 className="text-[#f37812] py-4 border-b-1 border-gray-300 flex items-center text-xl font-bold">
          <FaUserTie className="text-2xl mr-2" /> 감독 관리
        </h2>
        <form className="flex mt-6 gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 flex-1 rounded text-lg border-1 border-gray-300"
            placeholder="감독 이름 입력"
          />
          <button type="submit" className="bg-[#f37812] p-4 text-white rounded">
            + 감독 추가
          </button>
        </form>
        <BtnWrap
          handleCoachReset={handleCoachReset}
          handleRandomSelect={handleRandomSelect}
        />
        <ul className="flex flex-wrap items-start justify-center mt-4 gap-5">
          {coachList.map((coach, idx) => (
            <CoachCard
              key={idx}
              coach={coach}
              handlePlayerDelete={handlePlayerDelete}
              currentOrder={currentOrder}
            />
          ))}
        </ul>
      </div>

      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <h2 className="text-[#f37812] py-4 border-b-1 border-gray-300 flex items-center text-xl font-bold">
          <FaUserTie className="text-2xl mr-2" /> 선수 관리
        </h2>
        <div className="flex flex-wrap items-start gap-4 my-4">
          {positionMenu.map((posi, idx) => (
            <PositionCategory
              key={idx}
              position={posi}
              handlePlayerSelect={handlePlayerSelect}
              isAlreadySelected={isAlreadySelected}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
