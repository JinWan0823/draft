import { Achivement } from "@/_types/playerTypes";

interface CareerProps {
  idx: number;
  handleTournamentChange: (idx: number, value: string) => void;
  handleCareerRsultChange: (idx: number, value: string) => void;
  value: Achivement;
}

export default function CareerInput({
  idx,
  handleTournamentChange,
  handleCareerRsultChange,
  value,
}: CareerProps) {
  return (
    <div className="flex items-center mt-1 min-w-0">
      <span className="w-[24px] h-[24px] mr-2 rounded-full bg-[#f37812] font-bold text-sm text-white flex items-center justify-center">
        {idx + 1}
      </span>
      <div className="flex-1 flex items-center gap-1 min-w-0">
        <input
          type="text"
          value={value.tournament}
          onChange={(e) => handleTournamentChange(idx, e.target.value)}
          placeholder="대회이름"
          className="flex-7 px-2 border border-gray-300 rounded outline-[#f37812] flex-1 min-w-0"
        />
        <input
          type="text"
          value={value.result}
          onChange={(e) => handleCareerRsultChange(idx, e.target.value)}
          placeholder="수상내용"
          className="flex-3 px-2 border border-gray-300 rounded outline-[#f37812] flex-1 min-w-0"
        />
      </div>
    </div>
  );
}
