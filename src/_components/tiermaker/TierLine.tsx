import { PlayerProps } from "@/_types/TierMakerTypes";
import TierCard from "./TierCard";

interface LinePlayerProps {
  players: PlayerProps[];
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export default function TierLine({
  players,
  onDrop,
  onDragOver,
}: LinePlayerProps) {
  return (
    <div className="tier-line w-full flex min-h-[140px] mt-2 rounded-[16px] overflow-hidden border-gray-200 border-1">
      <div className="flex items-center justify-center bg-[#ff7f7f] w-[100px]">
        <span className="font-bold text-6xl text-white">S</span>
      </div>
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="w-full bg-[#fff] p-2 flex gap-2 mr-[80px] items-center flex-wrap"
      >
        {players.map((p, idx) => (
          <TierCard key={idx} playerInfo={p} />
        ))}
      </div>
    </div>
  );
}
