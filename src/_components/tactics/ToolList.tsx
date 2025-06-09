import { SetStateAction } from "react";
import { FaUserMinus, FaUserPlus } from "react-icons/fa6";
import { PiSoccerBallDuotone } from "react-icons/pi";

interface ToolListProps {
  setDummyPlayers: React.Dispatch<SetStateAction<PlayerInfo[]>>;
}

interface PlayerInfo {
  x: number;
  y: number;
  team: number;
}

export default function ToolList({ setDummyPlayers }: ToolListProps) {
  const handleDummyPlayer = (teamNumber: number) => {
    const randomX = Math.floor(Math.random() * 800) + 100;
    const randomY = Math.floor(Math.random() * 550);
    setDummyPlayers((prev) => [
      ...prev,
      {
        x: randomX,
        y: randomY,
        team: teamNumber,
      },
    ]);
  };

  return (
    <div className="p-1 py-2 w-[180px] fixed right-[20px] top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-[20px] border-r-4 border-[#f37812]">
      <p className="text-lg font-bold text-center text-[#f37812]">도구 목록</p>
      <ul className="mt-2 p-2">
        <li className="bg-[#f37812] mt-1 rounded flex items-center text-white font-bold p-2 px-3">
          <PiSoccerBallDuotone className="text-lg mr-2" /> 공추가
        </li>
        <li
          className="bg-red-400 mt-1 rounded flex items-center text-white font-bold p-2 px-3"
          onClick={() => handleDummyPlayer(1)}
        >
          <FaUserPlus className="text-lg mr-2" /> 더미선수1팀
        </li>
        <li
          className="bg-blue-400 mt-1 rounded flex items-center text-white font-bold p-2 px-3"
          onClick={() => handleDummyPlayer(2)}
        >
          <FaUserPlus className="text-lg mr-2" /> 더미선수2팀
        </li>
        <li className="bg-red-600 mt-1 rounded flex items-center text-white font-bold p-2 px-3">
          <FaUserMinus className="text-lg mr-2" /> 선수 제거
        </li>
      </ul>
    </div>
  );
}
