import { PlayerProps } from "@/_types/TierMakerTypes";
import PositionBadge from "../players/PositionBadge";

interface playerInfo {
  playerInfo: PlayerProps;
}

export default function TierCard({ playerInfo }: playerInfo) {
  const handleDrag = (e: React.DragEvent) => {
    console.log(playerInfo);
    e.dataTransfer.setData("application/json", JSON.stringify(playerInfo));
  };
  return (
    <>
      <div
        draggable
        className="w-[80px] bg-[#fff] rounded-[10px] overflow-hidden border-gray-200 border-1 shadow-lg cursor-pointer"
        onDragStart={handleDrag}
      >
        <div
          className="img-box w-full h-[80px] bg-cover bg-center"
          style={{ background: `url(${playerInfo.image})` }}
        ></div>
        <div className="relative text-center p-1 py-2 text-sm">
          <div className="absolute top-0 right-[2px] translate-y-[-50%]">
            <PositionBadge position={playerInfo.position} tier={true} />
          </div>
          <p>{playerInfo.name}</p>
        </div>
      </div>
    </>
  );
}
