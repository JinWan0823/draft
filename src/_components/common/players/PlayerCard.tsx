import Image from "next/image";
import PositionBadge from "./PositionBadge";
import PlayerCareer from "./PlayerCareer";

export default function PlayerCard() {
  return (
    <li className="relative bg-gray-200 rounded-md shadow-xl overflow-hidden dark:bg-[#333] cursor-pointer group">
      {/* 상하좌우 선 애니메이션  */}
      <span className="z-[999] absolute top-0 left-0 h-[2px] bg-[#333] w-0 transition-all duration-500 ease-in-out group-hover:w-full"></span>
      <span className="z-[999] absolute top-0 right-0 w-[2px] bg-[#333] h-0 transition-all duration-500 ease-in-out delay-150 group-hover:h-full"></span>
      <span className="z-[999] absolute bottom-0 right-0 h-[2px] bg-[#333] w-0 transition-all duration-500 ease-in-out delay-300 group-hover:w-full"></span>
      <span className="z-[999] absolute bottom-0 left-0 w-[2px] bg-[#333] h-0 transition-all duration-500 ease-in-out delay-500 group-hover:h-full"></span>
      <div className="text-black dark:text-white">
        <div className="img-box overflow-hidden">
          <Image
            src={"https://picsum.photos/300/200"}
            alt="더미이미지"
            width={298}
            height={360}
            className="transition-all duration-500 ease-in-out group-hover:scale-125"
          />
        </div>
        <div className="p-[16px] py-[20px]">
          <p className="font-bold text-xl">감스트</p>
          <PlayerCareer />
          <button
            type="button"
            className="w-full mt-[10px] rounded p-[8px] text-white bg-[#f37812] cursor-pointer"
          >
            상세정보
          </button>
        </div>
      </div>

      <PositionBadge />
    </li>
  );
}
