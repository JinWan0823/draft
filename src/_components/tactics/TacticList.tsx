"use client";

import { useState } from "react";
import { dummyPlayers } from "../../../dumy";
import TacticPlayer from "./TacticPlayer";

export default function TacticList() {
  const [search, setSearch] = useState("");

  const filteredPlayers = dummyPlayers.filter((item) =>
    item.name.includes(search)
  );

  return (
    <div className="p-1 py-2 w-[220px] fixed left-[20px] top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-[20px] border-l-4 border-[#f37812]">
      <p className="text-lg font-bold text-center text-[#f37812]">선수 목록</p>
      <div className="p-1">
        <input
          placeholder="선수 검색"
          className="w-full border-1 border-gray-300 p-2 py-1 rounded my-2"
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      <ul className="max-h-[60vh] h-[60vh] overflow-y-scroll custom-scrollbar p-1">
        {filteredPlayers.map((item, key) => (
          <TacticPlayer item={item} key={key} />
        ))}
      </ul>
    </div>
  );
}
