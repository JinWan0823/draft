"use client";

import Logo from "@/_components/common/Logo";
import CustomSelect from "@/_components/common/players/CustomSelect";
import PlayerCard from "@/_components/common/players/PlayerCard";
import SelectOpt from "@/_components/common/players/SelectOpt";
import SearchBar from "@/_components/common/SearchBar";
import { useState } from "react";

export default function Players() {
  const [selectedOpt, setSelectedOpt] = useState("이름순");
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");

  const sortOptions = ["이름순", "포지션순"];

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <SearchBar />

      <div className="w-full p-[16px] bg-gray-200 shadow-xl rounded">
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
      </div>
      <ul className="grid grid-cols-4 gap-6 w-full mt-[20px]">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </ul>
    </section>
  );
}
