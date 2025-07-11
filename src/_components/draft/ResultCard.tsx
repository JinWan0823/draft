import { CoachProps } from "@/_types/draftTypes";
import PositionBadge from "../players/PositionBadge";

interface ResultCardProps {
  coach: CoachProps;
}

export default function ResultCard({ coach }: ResultCardProps) {
  return (
    <li
      className={`shadow-xl relative px-2 py-4 rounded-[16px] border-1 border-gray-200 w-full bg-white font-bold sm:w-[45%] md:w-[31%]`}
      style={{
        borderTop: `6px solid ${coach.color}`,
      }}
    >
      <div style={{ color: coach.color }}>
        <p className="text-center text-xl pb-2 border-b-1 border-gray-300">
          {coach.name}팀
          <span className="ml-2 text-sm text-[#333]">
            {coach.teamPlayer.length}명
          </span>
        </p>
        <ul className="mt-2">
          {coach.teamPlayer.length === 0 ? (
            <li className="mt-1 text-center p-2 rounded text-sm text-gray-500">
              ( 선수 없음 )
            </li>
          ) : (
            <>
              {coach.teamPlayer.map((player, idx) => (
                <li
                  key={idx}
                  className="mt-2 border-1 border-gray-300 p-2 rounded-[8px] text-sm text-[#333] flex items-center justify-between"
                  style={{
                    borderLeft: `3px solid ${coach.color}`,
                  }}
                >
                  <span>{player.name}</span>
                  <PositionBadge position={player.position} />
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </li>
  );
}
