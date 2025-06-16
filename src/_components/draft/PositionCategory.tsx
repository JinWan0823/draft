import { getBadgeColor, renamePosition } from "@/_utill/position";
import { PositionProps } from "@/_types/draftTypes";

export default function PositionCategory({
  position,
  handlePlayerSelect,
  isAlreadySelected,
  playerList,
}: PositionProps) {
  const positionPlayers = playerList.filter(
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
              <button
                onClick={() => handlePlayerSelect(p)}
                disabled={isAlreadySelected(p.name)}
                className="px-2 py-1 border-gray-300 border-1 rounded text-sm
                  disabled:bg-gray-400 disabled:text-white"
              >
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
