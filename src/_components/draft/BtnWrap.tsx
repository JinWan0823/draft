import { BtnProps } from "@/_types/draftTypes";
import { FaCheckCircle, FaRandom } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

export default function BtnWrap({
  handleCoachReset,
  handleRandomSelect,
  setDraftResult,
}: BtnProps) {
  return (
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center">
        <button
          onClick={handleRandomSelect}
          className="flex items-center mr-2 bg-[#f37812] p-2 text-white rounded"
        >
          <FaRandom className="mr-2" /> 랜덤 감독 선택
        </button>
        <button
          onClick={handleCoachReset}
          className="flex items-center bg-[#333] p-2 text-white rounded"
        >
          <FaUserMinus className="mr-2" /> 초기화
        </button>
      </div>
      <button
        onClick={() => setDraftResult(true)}
        className="flex items-center bg-[#7aadb3] p-2 text-white rounded"
      >
        <FaCheckCircle className="mr-2" />
        최종 팀 확정
      </button>
    </div>
  );
}
