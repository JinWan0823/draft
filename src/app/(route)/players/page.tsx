"use client";

import Logo from "@/_components/common/Logo";
import CustomSelect from "@/_components/common/players/CustomSelect";
import PlayerCard from "@/_components/common/players/PlayerCard";
import SelectOpt from "@/_components/common/players/SelectOpt";
import SearchBar from "@/_components/common/SearchBar";
import { useState } from "react";
import { dummyPlayers } from "../../../../dumy";

import { MdPeople, MdFilterAlt } from "react-icons/md";

export default function Players() {
  const [selectedOpt, setSelectedOpt] = useState("이름순");
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");

  const sortOptions = ["이름순", "포지션순"];

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <SearchBar />

      <div className="w-full p-[16px] bg-gray-200 shadow-xl rounded flex items-center justify-between">
        <ul className="flex">
          {sortOptions.map((opt) => (
            <SelectOpt
              key={opt}
              opt={opt}
              isSelected={selectedOpt === opt}
              onClick={() => {
                setSelectedOpt(opt);
                setSelectedPosition("포지션 선택");
              }}
            />
          ))}
          <CustomSelect
            setSelectedOpt={setSelectedOpt}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
        </ul>

        <div className="flex items-center">
          <div className="p-[4px] px-[12px] flex items-center mr-[10px] bg-white rounded">
            <MdPeople className="text-4xl text-[#f37812] mr-[12px]" />
            <div>
              <span className="font-bold text-2xl">{dummyPlayers.length}</span>
              <p className="text-sm leading-3">총 선수</p>
            </div>
          </div>
          <div className="p-[4px] px-[12px] flex items-center bg-white rounded">
            <MdFilterAlt className="text-4xl text-[#f37812] mr-[12px]" />
            <div>
              <span className="font-bold text-2xl">{dummyPlayers.length}</span>
              <p className="text-sm leading-3">필터링된 선수</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-6 w-full mt-[20px]">
        {dummyPlayers.map((item, idx) => (
          <PlayerCard key={idx} item={item} />
        ))}
      </ul>
    </section>
  );
}
