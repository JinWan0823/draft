"use client";

import Logo from "@/_components/common/Logo";
import CustomSelect from "@/_components/players/CustomSelect";
import TierCard from "@/_components/tiermaker/TierCard";
import TierIntro from "@/_components/tiermaker/TierIntro";
import TierLine from "@/_components/tiermaker/TierLine";
import TierTool from "@/_components/tiermaker/TierTool";
import useTierMaker from "@/_hooks/useTierMaker";
import { BsPatchExclamation } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import { softColors, tier } from "../../../dumy";

export default function TierMakerClient() {
  const {
    handleDrop,
    tierLines,
    handleReturnDrop,
    selectedPosition,
    setSelectedPosition,
    handleSearch,
    searchValue,
    filterPlayerList,
    handleResetFilter,
    hanldeTierPlus,
    handdleTierMinus,
    handleResetTierMaker,
    handleDownTierMaker,
  } = useTierMaker();

  return (
    <section className="max-w-[1240px] w-[95%] mx-auto py-[120px] pb-[160px] md:pb-[120px]">
      <TierTool
        hanldeTierPlus={hanldeTierPlus}
        handdleTierMinus={handdleTierMinus}
        handleResetTierMaker={handleResetTierMaker}
        handleDownTierMaker={handleDownTierMaker}
      />

      <Logo />
      <TierIntro />
      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <div id="capture-tiermaker">
          {tierLines.map((line, idx) => (
            <TierLine
              key={idx}
              players={line}
              onDrop={handleDrop(idx)}
              onDragOver={(e) => e.preventDefault()}
              tier={tier[idx]}
              bg={softColors[idx]}
            />
          ))}
        </div>

        <div className="items-center gap-4 p-2 mt-8 sm:flex">
          <div className="w-full sm:w-[35%]">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              className="w-full border-1 border-gray-300 p-1 px-2 rounded focus:outline-1"
              placeholder="선수 이름으로 검색"
            />
          </div>
          <div className="w-full sm:w-[35%] mt-1 sm:mt-0">
            <CustomSelect
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center rounded py-1 px-4 hover:bg-gray-300 mt-1 w-full sm:mt-0 sm:w-auto"
            onClick={handleResetFilter}
          >
            <GrPowerReset className="mr-2 text-lg" /> 필터 초기화
          </button>
        </div>

        <div className="mt-2">
          <div className="flex items-center justify-between p-2 px-4 bg-[#333] font-bold text-white">
            <p>미분류 선수</p>
            <span className="rounded-[12px] px-2 bg-gray-600">
              {
                filterPlayerList.filter(
                  (p) =>
                    selectedPosition === "포지션 선택" ||
                    p.position === selectedPosition
                ).length
              }
            </span>
          </div>
          <div
            onDrop={handleReturnDrop}
            onDragOver={(e) => e.preventDefault()}
            className="p-4 flex items-start flex-wrap h-[260px] max-h-[260px] overflow-y-scroll gap-4 custom-scrollbar"
          >
            {filterPlayerList.length === 0 ? (
              <div className="w-full h-full text-gray-500 text-center flex flex-col items-center justify-center">
                <BsPatchExclamation className="text-4xl " />
                <p className="mt-2">검색 결과가 없습니다.</p>
              </div>
            ) : (
              filterPlayerList
                .filter(
                  (p) =>
                    selectedPosition === "포지션 선택" ||
                    p.position === selectedPosition
                )
                .map((p, idx) => <TierCard key={idx} playerInfo={p} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
