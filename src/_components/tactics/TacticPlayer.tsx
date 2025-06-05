import PositionBadge from "../players/PositionBadge";

interface TacticProps {
  item: PlayerInfo;
}

interface PlayerInfo {
  name: string;
  image: string;
  position: string;
}

export default function TacticPlayer({ item }: TacticProps) {
  return (
    <li className="border-gray-200 rounded border-1 my-2 p-2 flex items-center">
      <div className="thumb w-[44px] h-[44px] rounded-full bg-[#333] mr-2"></div>
      <div>
        <p className="text-sm">{item.name}</p>
        <PositionBadge position={item.position} />
      </div>
    </li>
  );
}
