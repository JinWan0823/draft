"use client";

import Logo from "@/_components/common/Logo";
import CoachCard from "@/_components/draft/CoachCard";
import DraftIntro from "@/_components/draft/DraftIntro";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { dummyPlayers } from "../../../../dumy";
import BtnWrap from "@/_components/draft/BtnWrap";

export interface CoachProps {
  name: string;
  image: string;
}

export default function Draft() {
  const [inputValue, setInputValue] = useState("");
  const [coachList, setCoachList] = useState<CoachProps[]>([]);

  const handleCoach = () => {
    if (!inputValue.trim()) return;

    if (coachList.some((coach) => coach.name === inputValue.trim())) return;

    const foundPlayer = dummyPlayers.find(
      (player) => player.name === inputValue.trim()
    );

    const newCoach = {
      name: inputValue.trim(),
      image: foundPlayer ? foundPlayer.image : "/team1.png",
    };

    setCoachList((prev) => [...prev, newCoach]);
    setInputValue("");
    console.log(coachList);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCoach();
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
        <BtnWrap />
        <ul className="flex flex-wrap items-start justify-center mt-4 gap-5">
          {coachList.map((coach, idx) => (
            <CoachCard key={idx} coach={coach} />
          ))}
        </ul>
      </div>
    </section>
  );
}
