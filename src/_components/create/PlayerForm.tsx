"use client";

import { useState } from "react";
import CustomSelect from "../players/CustomSelect";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function PlayerForm() {
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [selectedSubPosition, setSelectedSubPosition] = useState("포지션 선택");

  return (
    <form className="w-[95%] max-w-[450px] h-[70vh] max-h-[600px] overflow-y-scroll custom-scrollbar mt-4 mx-auto bg-white py-10 px-6 rounded-[20px] shadow-xl">
      <div className="img-box">
        <div className="w-[120px] h-[140px] bg-[#333] rounded"></div>
        <input type="file" />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">이름 *</p>
        <input
          type="text"
          className="border-1 mt-1 p-1 px-2 border-gray-300 rounded w-full outline-[#f37812]"
        />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">포지션</p>
        <CustomSelect
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
        />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">부포지션</p>
        <CustomSelect
          selectedPosition={selectedSubPosition}
          setSelectedPosition={setSelectedSubPosition}
        />
      </div>

      <div className="mt-2">
        <div className="flex items-center justify-between">
          <p className="text-[#f37812] font-bold">대회 기록</p>
          <div className="flex items-center rounded justify-center text-white text-[12px] font-bold">
            <div className="bg-[#f37812] p-1 border-r-1 border-gray-300 cursor-pointer">
              <FaPlus />
            </div>
            <div className="bg-[#f37812] p-1 cursor-pointer">
              <FaMinus />
            </div>
          </div>
        </div>
        <input
          type="text"
          className="px-2 border-1 mt-1 p-1 border-gray-300 rounded w-full outline-[#f37812]"
        />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">특이사항 *</p>
        <textarea className="border-1 mt-1 p-1 px-2 border-gray-300 rounded w-full outline-[#f37812] h-[90px]" />
      </div>

      <button
        type="submit"
        className="w-full bg-[#f37812] text-white font-bold rounded py-2 mt-4"
      >
        저장하기
      </button>
    </form>
  );
}
