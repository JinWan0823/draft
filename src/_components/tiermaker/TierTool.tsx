import { FaRegTrashAlt } from "react-icons/fa";
import { FaDownload, FaMinus, FaPlus } from "react-icons/fa6";

interface TierToolProps {
  hanldeTierPlus: () => void;
  handdleTierMinus: () => void;
  handleResetTierMaker: () => void;
  handleDownTierMaker: () => void;
}

export default function TierTool({
  hanldeTierPlus,
  handdleTierMinus,
  handleResetTierMaker,
  handleDownTierMaker,
}: TierToolProps) {
  return (
    <div
      className="w-[95%] p-1 py-2 fixed left-1/2 bottom-[20px]
    -translate-x-1/2 -translate-y-0
    bg-white shadow-xl rounded-[20px] 
    border-l-4 border-[#f37812] z-9999
    md:max-w-[220px] md:bottom-1/2 md:left-[20px] md:translate-y-1/2 md:-translate-x-0  
    "
    >
      <p className="text-lg font-bold text-center text-[#f37812]">티어 관리</p>
      <ul className="mt-2 p-2 flex justify-center font-bold text-sm gap-1 md:text-md md:block md:gap-0">
        <li
          className={`bg-[#dfdfdf] mt-1 rounded flex items-center text-blue-600 font-bold p-1 px-3 cursor-pointer sm:px-3`}
          onClick={hanldeTierPlus}
        >
          <FaPlus className="text-lg sm:mr-2" /> 티어 추가
        </li>
        <li
          className={`bg-[#dfdfdf] mt-1 rounded flex items-center text-red-600 font-bold p-1 px-3 cursor-pointer sm:px-3`}
          onClick={handdleTierMinus}
        >
          <FaMinus className="text-lg sm:mr-2" /> 티어 삭제
        </li>
        <li
          className="bg-red-400 mt-1 rounded flex items-center text-white font-bold p-2 px-1 cursor-pointer sm:px-3"
          onClick={handleResetTierMaker}
        >
          <FaRegTrashAlt className="text-lg sm:mr-2" /> 초기화
        </li>
        <li
          className="bg-[#f37812] mt-1 rounded flex items-center text-white font-bold p-2 px-1 cursor-pointer sm:px-3"
          onClick={handleDownTierMaker}
        >
          <FaDownload className="text-lg sm:mr-2" /> 이미지 저장
        </li>
      </ul>
    </div>
  );
}
