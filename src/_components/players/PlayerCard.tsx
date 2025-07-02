import Image from "next/image";
import PositionBadge from "./PositionBadge";
import PlayerCareer from "./PlayerCareer";
import PlayerDetail from "./PlayerDetail";
import { useState } from "react";

interface PlayerProps {
  item: ItemProps;
}

interface Achivement {
  tournament: string;
  result: string;
}

interface ItemProps {
  _id: string;
  id: number;
  name: string;
  position: string;
  subPosition: string;
  note: string;
  image: string;
  achievements: Achivement[];
}

export default function PlayerCard({ item }: PlayerProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((prev) => !prev);
    document.documentElement.classList.toggle("modal-open");
  };

  return (
    <>
      <li className="relative bg-gray-200 rounded-md shadow-xl overflow-hidden dark:bg-[#333] cursor-pointer group">
        {/* 상하좌우 선 애니메이션  */}
        <span className="z-[999] absolute top-0 left-0 h-[2px] bg-[#333] w-0 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        <span className="z-[999] absolute top-0 right-0 w-[2px] bg-[#333] h-0 transition-all duration-500 ease-in-out delay-150 group-hover:h-full"></span>
        <span className="z-[999] absolute bottom-0 right-0 h-[2px] bg-[#333] w-0 transition-all duration-500 ease-in-out delay-300 group-hover:w-full"></span>
        <span className="z-[999] absolute bottom-0 left-0 w-[2px] bg-[#333] h-0 transition-all duration-500 ease-in-out delay-500 group-hover:h-full"></span>
        <div className="text-black dark:text-white">
          <div className="img-box overflow-hidden relative w-full h-[194px]">
            <Image
              src={item.image}
              alt="더미이미지"
              width={292}
              height={194}
              className="transition-all duration-500 ease-in-out group-hover:scale-125"
            />
            <div className="absolute bottom-[4px] left-[4px]">
              <PositionBadge position={item.position} />
            </div>
          </div>
          <div className="p-[16px] py-[20px]">
            <p className="font-bold text-xl">{item.name}</p>
            <PlayerCareer position={item.position} career={item.achievements} />
            <button
              type="button"
              className="w-full mt-[10px] rounded p-[8px] text-white bg-[#f37812] cursor-pointer"
              onClick={() => handleModal()}
            >
              상세정보
            </button>
          </div>
        </div>
      </li>

      {openModal && <PlayerDetail info={item} handleModal={handleModal} />}
    </>
  );
}
