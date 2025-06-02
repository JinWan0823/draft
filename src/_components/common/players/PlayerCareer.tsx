import { PiSoccerBallDuotone } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";

interface Achivement {
  tournament: string;
  result: string;
}

interface CareerProps {
  position: string;
  career: Achivement[];
}

export default function PlayerCareer({ position, career }: CareerProps) {
  return (
    <>
      <ul className="h-[90px] overflow-y-scroll mt-[10px] custom-scrollbar">
        <li>
          <p className="flex items-center">
            <span className="mr-[8px] text-[#f37812]">
              <PiSoccerBallDuotone />
            </span>
            {position}
          </p>
        </li>
        {career.map((item, idx) => (
          <li key={idx}>
            <p className="flex items-center">
              <span className="mr-[8px] text-[#f37812]">
                <GiTrophyCup />
              </span>
              {item.tournament} {item.result}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
