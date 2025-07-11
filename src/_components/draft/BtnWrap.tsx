import { BtnProps } from "@/_types/draftTypes";
import { FaCheckCircle, FaRandom } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

export default function BtnWrap({
  handleCoachReset,
  handleRandomSelect,
  setDraftResult,
}: BtnProps) {
  return (
    <div className="flex flex-col items-center justify-between mt-2 sm:flex-row">
      <div className="flex items-center flex-col w-full sm:flex-row sm:w-auto">
        <button
          onClick={handleRandomSelect}
          className="flex w-full items-center bg-[#f37812] p-2 text-white rounded sm:w-auto sm:mr-2"
        >
          <FaRandom className="mr-2" /> 랜덤 감독 선택
        </button>
        <button
          onClick={handleCoachReset}
          className="flex w-full items-center bg-[#333] p-2 mt-2 text-white rounded sm:w-auto sm:mt-0"
        >
          <FaUserMinus className="mr-2" /> 초기화
        </button>
      </div>
      <button
        onClick={() => setDraftResult(true)}
        className="flex items-center bg-[#7aadb3] p-2 text-white rounded w-full mt-2 sm:w-auto"
      >
        <FaCheckCircle className="mr-2" />
        최종 팀 확정
      </button>
    </div>
  );
}
