import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSoccerBallDuotone } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import PositionBadge from "./PositionBadge";
import { IoClose } from "react-icons/io5";

interface PlayerProps {
  info: ItemProps;
}

interface ItemProps {
  id: number;
  name: string;
  position: string;
  image: string;
  achievements: string[];
}

export default function PlayerDetail({ info }: PlayerProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#333333bf] flex items-center justify-center">
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
            <PositionBadge position="스트라이커" />
          </div>
          <button
            type="button"
            className="close-btn absolute right-[16px] top-[16px] text-sm bg-[#fff] font-bold py-[2px] px-[10px] rounded-[8px] flex items-center"
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
                : 스트라이커
              </li>
              <li className="flex items-center mt-2">
                <PiSoccerBallDuotone className="mr-1 text-[#f37812]" /> 부포지션
                : 윙포워드
              </li>
              <li className="mt-2">
                <div className="flex items-center">
                  <PiSoccerBallDuotone className="mr-1 text-[#f37812]" />{" "}
                  특이사항
                </div>
                <p className="p-2 bg-[#dfdfdf] mt-1 text-sm rounded">
                  특이사항 입력란입니다.
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
              {/* 금메달 */}
              <li
                className="w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[#FFD700] flex items-center"
                style={{ borderColor: "#FFD700" }}
              >
                <FaMedal className="text-xl mr-3 text-[#FFD700]" /> 감드컵 시즌1
                - 우승
              </li>

              {/* 은메달 */}
              <li
                className="w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[#C0C0C0] flex items-center"
                style={{ borderColor: "#C0C0C0" }}
              >
                <FaMedal className="text-xl mr-3 text-[#C0C0C0]" /> 감드컵 시즌2
                - 준우승
              </li>

              {/* 동메달 */}
              <li
                className="w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[#CD7F32] flex items-center"
                style={{ borderColor: "#CD7F32" }}
              >
                <FaMedal className="text-xl mr-3 text-[#CD7F32]" /> 감드컵 시즌3
                - 3위
              </li>
              <li
                className="w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[#CD7F32] flex items-center"
                style={{ borderColor: "#CD7F32" }}
              >
                <FaMedal className="text-xl mr-3 text-[#CD7F32]" /> 감드컵 시즌3
                - 3위
              </li>
              <li
                className="w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[#CD7F32] flex items-center"
                style={{ borderColor: "#CD7F32" }}
              >
                <FaMedal className="text-xl mr-3 text-[#CD7F32]" /> 감드컵 시즌3
                - 3위
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
