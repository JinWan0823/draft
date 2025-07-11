import { CoachProps } from "@/_types/draftTypes";
import ResultCard from "./ResultCard";
import { IoClose } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";
import { SetStateAction } from "react";

interface DraftResultProps {
  coachList: CoachProps[];
  setDraftResult: React.Dispatch<SetStateAction<boolean>>;
  handleCopyResult: () => void;
}

export default function DraftResult({
  coachList,
  setDraftResult,
  handleCopyResult,
}: DraftResultProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#000000bf] flex items-center justify-center">
      <div className="shadow-xl bg-[#fff] py-12 px-4 rounded-[20px] max-w-[1240px] w-[90%] max-h-[85vh] relative overflow-y-auto custom-scrollbar">
        <h2 className="text-center font-bold text-[#f37812] text-3xl">
          최종 팀 결과
        </h2>
        {coachList.length === 0 && <p>아직 드래프트가 진행되지 않았습니다!</p>}
        <ul className="flex flex-wrap items-start my-8 gap-3 sm:justify-center md:justify-start">
          {coachList.map((coach, idx) => (
            <ResultCard key={idx} coach={coach} />
          ))}
        </ul>
        <button
          onClick={handleCopyResult}
          className="flex items-center mx-auto bg-[#f37812] p-2 text-white rounded"
        >
          <IoMdCopy className="mr-1 text-2xl" /> 결과 복사
        </button>
        <button
          onClick={() => setDraftResult(false)}
          className="none absolute top-[20px] right-[20px] w-[36px] h-[36px] rounded-full flex items-center justify-center hover:rotate-90 hover:bg-gray-300"
        >
          <IoClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
