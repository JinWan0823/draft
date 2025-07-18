import { PlayerProps } from "@/_types/TierMakerTypes";
import TierCard from "./TierCard";

interface LinePlayerProps {
  players: PlayerProps[];
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  tier: string;
  bg: string;
}

export default function TierLine({
  players,
  onDrop,
  onDragOver,
  tier,
  bg,
}: LinePlayerProps) {
  return (
    <div className="tier-line w-full min-h-[140px] mt-2 rounded-[16px] overflow-hidden border-gray-200 border-1 sm:flex">
      <div
        style={{ backgroundColor: bg }}
        className={`flex items-center justify-center w-full sm:w-[100px]`}
      >
        <span className="font-bold text-2xl text-white sm:text-6xl">
          {tier}
        </span>
      </div>
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="w-full min-h-[100px] bg-[#fff] p-2 flex gap-2 mr-[80px] items-center flex-wrap"
      >
        {players.map((p, idx) => (
          <TierCard key={idx} playerInfo={p} />
        ))}
      </div>
    </div>
  );
}
