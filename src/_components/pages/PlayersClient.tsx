"use client";

import Logo from "@/_components/common/Logo";
import CustomSelect from "@/_components/players/CustomSelect";
import PlayerCard from "@/_components/players/PlayerCard";
import SelectOpt from "@/_components/players/SelectOpt";
import SearchBar from "@/_components/common/SearchBar";
import { MdPeople, MdFilterAlt } from "react-icons/md";
import usePlayers from "@/_hooks/usePlayers";

export default function PlayersClient() {
  const {
    sortOptions,
    setSelectedOpt,
    setSelectedPosition,
    filteredPlayers,
    selectedOpt,
    selectedPosition,
    allPlayers,
    fetchPlayers,
  } = usePlayers();
  return (
    <section className="max-w-[1240px] w-[95%] mx-auto py-[120px]">
      <Logo />
      <SearchBar />

      <div className="w-full p-[16px] bg-gray-200 shadow-xl rounded flex flex-wrap items-center justify-between">
        <div className="flex">
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
          <div className="w-[160px] mx-[4px]">
            <CustomSelect
              onSelectExtra={() => setSelectedOpt("")}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
            />
          </div>
        </div>

        <div className="flex items-center mt-2 sm:mt-0">
          <div className="p-[4px] px-[12px] flex items-center mr-[10px] bg-white rounded">
            <MdPeople className="text-4xl text-[#f37812] mr-[12px]" />
            <div>
              <span className="font-bold text-2xl">{allPlayers.length}</span>
              <p className="text-sm leading-3">총 선수</p>
            </div>
          </div>
          <div className="p-[4px] px-[12px] flex items-center bg-white rounded">
            <MdFilterAlt className="text-4xl text-[#f37812] mr-[12px]" />
            <div>
              <span className="font-bold text-2xl">
                {filteredPlayers.length}
              </span>
              <p className="text-sm leading-3">필터링된 선수</p>
            </div>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 w-full mt-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredPlayers.map((item, idx) => (
          <PlayerCard key={idx} item={item} fetchPlayers={fetchPlayers} />
        ))}
      </ul>
    </section>
  );
}
