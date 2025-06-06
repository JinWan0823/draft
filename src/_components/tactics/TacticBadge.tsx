interface PositionBadgeProps {
  position: string;
}

export default function TacticBadge({ position }: PositionBadgeProps) {
  const renamePosition = (posi: string): string => {
    const positionMap: Record<string, string> = {
      스트라이커: "ST",
      윙포워드: "WF",
      "센터 미드필더": "CM",
      "수비형 미드필더": "CDM",
      수비수: "CB",
      풀백: "FB",
      올라운더: "ALL",
    };

    return positionMap[posi] || "GK";
  };

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
    <span
      className={`absolute text-[10px] w-[22px] h-[22px] text-white
              flex items-center justify-center top-[-6px] right-[-6px]
          border-1 border-white rounded-[50%]
           ${getBadgeColor(position)}`}
    >
      {renamePosition(position)}
    </span>
  );
}
