import { PiSoccerBallDuotone } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";

export default function PlayerCareer() {
  return (
    <>
      {" "}
      <ul className="h-[90px] overflow-y-scroll mt-[10px] custom-scrollbar">
        <li>
          <p className="flex items-center">
            <span className="mr-[8px] text-[#f37812]">
              <PiSoccerBallDuotone />
            </span>{" "}
            스트라이커
          </p>
        </li>
        <li>
          <p className="flex items-center">
            <span className="mr-[8px] text-[#f37812]">
              <GiTrophyCup />
            </span>{" "}
            감드컵 시즌1 우승
          </p>
        </li>
        <li>
          <p className="flex items-center">
            <span className="mr-[8px] text-[#f37812]">
              <GiTrophyCup />
            </span>{" "}
            감드컵 시즌2 준우승
          </p>
        </li>
      </ul>
    </>
  );
}
