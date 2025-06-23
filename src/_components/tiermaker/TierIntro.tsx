import { ImTrophy } from "react-icons/im";

export default function TierIntro() {
  return (
    <div className="p-4 w-full bg-[#fff] shadow-lg rounded flex items-center">
      <div className="mr-4">
        <ImTrophy className="text-6xl text-[#f37812]" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-[#f37812]">선수 티어 메이커</h2>
        <p className="break-keep">
          드래프트 도구를 사용하여 팀을 구성하세요.{" "}
          <b className="text-lg">먼저 감독을 추가</b>하고, 선수들을 각
          포지션별로 선택하면 됩니다. <b className="text-lg">더블클릭</b>으로
          선수목록에서 선수를 제외할 수 있습니다. 필요한 선수는 포지션과 이름을
          입력해 추가해 참여 가능합니다. 사이트를 나갔다와도 티어표는 그대로
          유지됩니다.
        </p>
      </div>
    </div>
  );
}
