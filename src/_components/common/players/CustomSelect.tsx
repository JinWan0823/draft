"use client";

import React, { SetStateAction, useState } from "react";

interface CustomSelectProps {
  setSelectedOpt: React.Dispatch<SetStateAction<string>>;
  selectedPosition: string;
  setSelectedPosition: React.Dispatch<SetStateAction<string>>;
}

export default function CustomSelect({
  setSelectedOpt,
  selectedPosition,
  setSelectedPosition,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positions = ["ST", "CM", "CB", "GK", "초기화"];

  const handleSelect = (pos: string) => {
    if (pos === "초기화") {
      setSelectedPosition("포지션 선택");
      setIsOpen(false);
      return;
    }
    setSelectedOpt("");
    setSelectedPosition(pos);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[120px] mx-[4px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-[10px] py-[4px] border rounded bg-white shadow cursor-pointer"
      >
        {selectedPosition}
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full mt-2 border rounded bg-white shadow z-10 ">
          {positions.map((pos) => (
            <li
              key={pos}
              className="px-[10px] py-[4px] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(pos)}
            >
              {pos}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
