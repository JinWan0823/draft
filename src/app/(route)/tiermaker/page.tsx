"use client";

import Logo from "@/_components/common/Logo";
import TierCard from "@/_components/tiermaker/TierCard";
import TierIntro from "@/_components/tiermaker/TierIntro";
import TierLine from "@/_components/tiermaker/TierLine";
import useTierMaker from "@/_hooks/useTierMaker";

export default function TierMaker() {
  const { playerList, handleDrop, tierLines, handleReturnDrop } =
    useTierMaker();

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <TierIntro />
      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        {tierLines.map((line, idx) => (
          <TierLine
            key={idx}
            players={line}
            onDrop={handleDrop(idx)}
            onDragOver={(e) => e.preventDefault()}
          />
        ))}
        <div className="mt-8">
          <div className="flex items-center justify-between p-2 px-4 bg-[#333] font-bold text-white">
            <p>미분류 선수</p>
            <span className="rounded-[12px] px-2 bg-gray-600">
              {playerList.length}
            </span>
          </div>
          <div
            onDrop={handleReturnDrop}
            onDragOver={(e) => e.preventDefault()}
            className="p-4 flex flex-wrap max-h-[420px] overflow-y-scroll gap-4 custom-scrollbar"
          >
            {playerList.map((p, idx) => (
              <TierCard key={idx} playerInfo={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
