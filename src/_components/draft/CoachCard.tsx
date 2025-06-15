import { CoachProps } from "@/app/(route)/draft/page";

interface CoachInfo {
  coach: CoachProps;
}

export default function CoachCard({ coach }: CoachInfo) {
  return (
    <li
      className="shadow-xl relative p-4 py-8 rounded-[16px] border-1 border-gray-200 w-[23.5%] bg-white"
      style={{
        borderTop: `6px solid ${coach.color}`,
      }}
    >
      <span className="absolute top-[10px] left-[10px] text-xl">
        {coach.order ? coach.order : ""}
      </span>
      <div
        className={`img-box w-[110px] h-[110px] mx-auto border-1 rounded-full bg-[#333] bg-center bg-cover`}
        style={{ backgroundImage: `url(${coach.image})` }}
      ></div>
      <h4
        className="font-bold text-center text-lg mt-4"
        style={{ color: coach.color }}
      >
        {coach.name}
      </h4>
      <div
        className="mt-4 rounded-[16px] border-t-2 py-4 p-2"
        style={{ color: coach.color }}
      >
        <p className="text-center">
          {coach.name}팀 선수 목록 ({coach.teamPlayer.length}명)
        </p>
        <ul className="mt-2">
          {coach.teamPlayer.length === 0 ? (
            <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm text-gray-500">
              (선수 없음)
            </li>
          ) : (
            <>
              {coach.teamPlayer.map((player, idx) => (
                <li
                  key={idx}
                  className="mt-1 border-1 border-gray-200 p-2 rounded text-sm text-gray-500"
                >
                  {player.name}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </li>
  );
}
