import { getBadgeColor, renamePosition } from "@/_utill/position";
import { dummyPlayers } from "../../../dumy";

interface PositionProps {
  position: string;
}

export default function PositionCategory({ position }: PositionProps) {
  const positionPlayers = dummyPlayers.filter(
    (item) => item.position === position
  );

  return (
    <div className="border-gray-200 border-1 p-2 w-[24%]">
      <div>
        <p>
          <span
            className={`px-2 py-1 text-white rounded ${getBadgeColor(position)}`}
          >
            {renamePosition(position)}
          </span>{" "}
          ({positionPlayers.length})
        </p>
        <ul className="flex flex-wrap mt-3 gap-2">
          {positionPlayers.map((p, idx) => (
            <li key={idx}>
              <button className="px-2 py-1 border-gray-300 border-1 rounded text-sm">
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
