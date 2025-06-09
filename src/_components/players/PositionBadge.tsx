import { renamePosition } from "@/_utill/position";

interface PositionBadgeProps {
  position: string;
}

export default function PositionBadge({ position }: PositionBadgeProps) {
  const getBadgeColor = (posi: string): string => {
    if (["스트라이커", "윙포워드"].includes(posi)) {
      return "bg-red-400";
    } else if (["센터 미드필더", "수비형 미드필더"].includes(posi)) {
      return "bg-green-400";
    } else if (["수비수", "풀백"].includes(posi)) {
      return "bg-blue-400";
    } else if (posi === "골키퍼") {
      return "bg-yellow-400";
    } else if (posi === "올라운더") {
      return "bg-purple-400";
    } else {
      return "bg-gray-400"; // fallback
    }
  };

  return (
    <div
      className={`inline font-bold text-white py-[2px] px-[10px] rounded-[8px] ${getBadgeColor(position)}`}
    >
      {renamePosition(position)}
    </div>
  );
}
