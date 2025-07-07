"use client";

import CustomSelect from "../players/CustomSelect";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CareerInput from "./CareerInput";
import usePlayerCreate from "@/_hooks/usePlayerCreate";
import Image from "next/image";

export default function PlayerForm({ mode }: { mode: "create" | "edit" }) {
  const {
    selectedPosition,
    setSelectedPosition,
    selectedSubPosition,
    setSelectedSubPosition,
    careerArr,
    addCareerInput,
    removeCareerInput,
    handleTournamentChange,
    handleCareerRsultChange,
    playerName,
    setPlayerName,
    playerInfo,
    setPlayerInfo,
    handleChangeFile,
    handlePlayerCreate,
    handlePlayerUpdate,
    preview,
  } = usePlayerCreate(mode);

  return (
    <form
      onSubmit={mode === "edit" ? handlePlayerUpdate : handlePlayerCreate}
      className="w-[95%] max-w-[450px] h-[70vh] max-h-[600px] overflow-y-scroll custom-scrollbar mt-4 mx-auto bg-white py-10 px-6 rounded-[20px] shadow-xl"
    >
      <div className="img-box flex flex-col justify-center items-center">
        <div className="w-[140px] h-[140px] overflow-hidden border-4 border-gray-300 bg-[#333] rounded-full">
          <Image
            src={preview}
            width={140}
            height={140}
            alt="프로필 이미지"
            className="object-cover w-full h-full rounded-full"
            draggable="false"
          />
        </div>
        <label
          className="text-center inline-block px-2 rounded mt-2 border-2 border-[#f37812] cursor-pointer text-[#f37812] font-bold"
          htmlFor="image-input"
        >
          프로필 이미지 등록
        </label>
        <input
          id="image-input"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">이름 *</p>
        <input
          type="text"
          className="border-1 mt-1 p-1 px-2 border-gray-300 rounded w-full outline-[#f37812]"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">포지션 *</p>
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
            <button
              onClick={addCareerInput}
              type="button"
              className="bg-[#f37812] p-1 border-r-1 border-gray-300 cursor-pointer"
            >
              <FaPlus />
            </button>
            <button
              onClick={removeCareerInput}
              type="button"
              className="bg-[#f37812] p-1 cursor-pointer"
            >
              <FaMinus />
            </button>
          </div>
        </div>

        {careerArr.map((career, idx) => (
          <CareerInput
            key={idx}
            idx={idx}
            value={career}
            handleTournamentChange={handleTournamentChange}
            handleCareerRsultChange={handleCareerRsultChange}
          />
        ))}
      </div>

      <div className="mt-2">
        <p className="text-[#f37812] font-bold">특이사항 *</p>
        <textarea
          value={playerInfo}
          onChange={(e) => setPlayerInfo(e.target.value)}
          className="border-1 mt-1 p-1 px-2 border-gray-300 rounded w-full outline-[#f37812] h-[90px]"
        />
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
