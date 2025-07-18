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
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  return (
    <li
      className="border-gray-200 rounded border-1 my-2 p-2 flex items-center cursor-pointer"
      draggable
      onDragStart={handleDragStart}
    >
      <div
        className="thumb w-[44px] h-[44px] rounded-full bg-[#333] mr-2 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div>
        <p className="text-sm">{item.name}</p>
        <PositionBadge position={item.position} />
      </div>
    </li>
  );
}
