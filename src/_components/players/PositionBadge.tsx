import { getBadgeColor, renamePosition } from "@/_utill/position";

interface PositionBadgeProps {
  position: string;
}

export default function PositionBadge({ position }: PositionBadgeProps) {
  return (
    <div
      className={`inline font-bold text-white py-[2px] px-[10px] rounded-[8px] ${getBadgeColor(position)}`}
    >
      {renamePosition(position)}
    </div>
  );
}
