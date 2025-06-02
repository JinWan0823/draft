import { GiTrophyCup } from "react-icons/gi";

interface CareerProps {
  career: Achivement;
}

interface Achivement {
  tournament: string;
  result: string;
}

export default function CareerList({ career }: CareerProps) {
  const trophyColor = (color: string) => {
    const colorMap: Record<string, string> = {
      우승: "#FFD700",
      준우승: "#C0C0C0",
      "3위": "#CD7F32",
    };

    return colorMap[color] || "#f37812";
  };

  return (
    <li
      className={`w-full p-4 border-l-6 rounded-[12px] bg-gradient-to-r from-white via-white to-[${trophyColor(career.result)}] flex items-center`}
      style={{ borderColor: trophyColor(career.result) }}
    >
      <GiTrophyCup
        className={`text-xl mr-3 text-[${trophyColor(career.result)}]`}
      />
      {career.tournament} - {career.result}
    </li>
  );
}
