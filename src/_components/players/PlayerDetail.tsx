import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSoccerBallDuotone } from "react-icons/pi";
import PositionBadge from "./PositionBadge";
import { IoClose } from "react-icons/io5";
import CareerList from "./CareerList";
import { PlayerInfoProps } from "@/_types/playerTypes";

interface PlayerProps {
  info: PlayerInfoProps;
  handleModal: () => void;
}

export default function PlayerDetail({ info, handleModal }: PlayerProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#000000bf] flex items-center justify-center">
      <div className="bg-[#fff] rounded-[20px] max-w-[900px] w-[90%] max-h-[85vh] overflow-y-auto custom-scrollbar">
        <div className="img h-[320px] bg-[#dfdfdf] overflow-hidden relative">
          <Image
            src={info.image}
            alt="더미이미지"
            width={900}
            height={320}
            className="w-full h-full object-cover"
          />
          <div className="absolute left-[16px] bottom-[16px]">
            <PositionBadge position={info.position} />
          </div>
          <button
            type="button"
            className="close-btn absolute right-[16px] top-[16px] text-sm bg-[#fff] font-bold py-[2px] px-[10px] rounded-[8px] flex items-center"
            onClick={() => handleModal()}
          >
            닫기 <IoClose />
          </button>
        </div>

        <div className="p-[16px] py-[24px]">
          <div>
            <div className="title border-b-2 pb-2  text-xl font-bold text-[#f37812]">
              <p className="flex items-center">
                <IoMdInformationCircleOutline className="text-2xl mr-[4px]" />
                기본 정보
              </p>
            </div>
            <ul className="p-[16px]">
              <li className="flex items-center">
                <PiSoccerBallDuotone className="mr-1 text-[#f37812]" /> 주포지션
                : {info.position}
              </li>
              <li className="flex items-center mt-2">
                <PiSoccerBallDuotone className="mr-1 text-[#f37812]" /> 부포지션
                : {info.subPosition}
              </li>
              <li className="mt-2">
                <div className="flex items-center">
                  <PiSoccerBallDuotone className="mr-1 text-[#f37812]" />{" "}
                  특이사항
                </div>
                <p className="p-2 bg-[#dfdfdf] mt-1 text-sm rounded">
                  {info.note}
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-[20px]">
            <div className="title border-b-2 pb-2 text-xl font-bold text-[#f37812]">
              <p className="flex items-center">
                <GiTrophyCup className="text-2xl mr-[4px]" />
                대회 기록
              </p>
            </div>
            <ul className="p-2 py-4 space-y-3">
              {info.achievements.map((career, idx) => (
                <CareerList key={idx} career={career} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
