"use client";

import React, { SetStateAction, useState } from "react";
import { positionMenu } from "../../../dumy";
import { FaSortDown } from "react-icons/fa6";

interface CustomSelectProps {
  selectedPosition: string;
  setSelectedPosition: React.Dispatch<SetStateAction<string>>;
  onSelectExtra?: () => void;
}

export default function CustomSelect({
  selectedPosition,
  setSelectedPosition,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (pos: string) => {
    setSelectedPosition(pos);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[full]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-2 py-1 border border-gray-300 rounded bg-white shadow cursor-pointer relative"
      >
        {selectedPosition}
        <FaSortDown className="absolute right-[4px] top-1/2 translate-y-[-75%]" />
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full max-h-[200px] overflow-y-scroll mt-2 border border-gray-300 rounded bg-white shadow z-10 ">
          {positionMenu.map((pos) => (
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
