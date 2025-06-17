import { getBadgeColor, renamePosition } from "@/_utill/position";

interface PositionBadgeProps {
  position: string;
  tier?: boolean;
}

export default function PositionBadge({ position, tier }: PositionBadgeProps) {
  return (
    <div
      className={`inline font-bold text-white py-[2px] px-[10px] rounded-[8px] ${getBadgeColor(position)} ${tier ? "text-sm" : ""}`}
    >
      {renamePosition(position)}
    </div>
  );
}
