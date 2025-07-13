"use client";

import { useState } from "react";
import TacticPlayer from "./TacticPlayer";
import { renamePosition } from "@/_utill/position";
import useAllPlayers from "@/_hooks/useAllPlayer";

export default function TacticList() {
  const [search, setSearch] = useState("");

  const { allPlayers } = useAllPlayers();

  const filteredPlayers = allPlayers.filter((item) => {
    const lowerSearch = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(lowerSearch) ||
      renamePosition(item.position).toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="p-1 py-2 mt-2 w-full bg-white shadow-xl rounded-[20px] border-l-4 border-[#f37812] z-9999 md:w-[220px] md:mt-0 md:fixed md:left-[20px] md:top-1/2 md:-translate-y-1/2">
      <p className="text-lg font-bold text-center text-[#f37812]">선수 목록</p>
      <div className="p-1">
        <input
          placeholder="선수/포지션 검색"
          className="w-full border-1 border-gray-300 p-2 py-1 rounded my-2"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <ul className="max-h-[210px] h-[210px] overflow-y-scroll custom-scrollbar p-1 md:max-h-[60vh] md:h-[60vh]">
        {filteredPlayers.map((item, key) => (
          <TacticPlayer item={item} key={key} />
        ))}
      </ul>
    </div>
  );
}
