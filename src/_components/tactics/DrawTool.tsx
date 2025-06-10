import { SetStateAction } from "react";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";

interface DrawProps {
  redPen: boolean;
  bluePen: boolean;
  setRedPen: React.Dispatch<SetStateAction<boolean>>;
  setBluePen: React.Dispatch<SetStateAction<boolean>>;
  setDrawing: React.Dispatch<SetStateAction<boolean>>;
}

export default function DrawTool({
  redPen,
  bluePen,
  setRedPen,
  setBluePen,
  setDrawing,
}: DrawProps) {
  const handleDraw = (penColor: "red" | "blue") => {
    if (penColor === "red") {
      if (redPen) {
        setRedPen(false);
        setDrawing(false);
      } else {
        setRedPen(true);
        setBluePen(false);
        setDrawing(true);
      }
    } else if (penColor === "blue") {
      if (bluePen) {
        setBluePen(false);
        setDrawing(false);
      } else {
        setBluePen(true);
        setRedPen(false);
        setDrawing(true);
      }
    }
  };

  const resetDraw = () => {
    setRedPen(false);
    setBluePen(false);
    setDrawing(false);
  };

  return (
    <div className="p-1 py-2 mt-4 w-[180px] bg-white shadow-xl rounded-[20px] border-r-4 border-[#f37812]">
      <p className="text-lg font-bold text-center text-[#f37812]">그림판</p>
      <ul className="mt-2 p-2">
        <li
          className={`bg-[#dfdfdf] mt-1 rounded flex items-center text-red-600 font-bold p-2 px-3 cursor-pointer ${redPen ? "border-1" : ""}`}
          onClick={() => handleDraw("red")}
        >
          <FaPencilAlt className="text-lg mr-2" /> 빨간 펜
        </li>
        <li
          className={`bg-[#dfdfdf] mt-1 rounded flex items-center text-blue-600 font-bold p-2 px-3 cursor-pointer ${bluePen ? "border-1" : ""}`}
          onClick={() => handleDraw("blue")}
        >
          <FaPencilAlt className="text-lg mr-2" /> 파란 펜
        </li>
        <li className="bg-[#dfdfdf] mt-1 rounded flex items-center text-[#333] font-bold p-2 px-3 cursor-pointer">
          <IoIosRefresh className="text-lg mr-2" /> 되감기
        </li>
        <li
          className="bg-red-600 mt-1 rounded flex items-center text-white font-bold p-2 px-3 cursor-pointer"
          onClick={resetDraw}
        >
          <FaRegTrashAlt className="text-lg mr-2" /> 초기화
        </li>
      </ul>
    </div>
  );
}
