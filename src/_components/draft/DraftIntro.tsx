import { FaInfoCircle } from "react-icons/fa";

export default function DraftIntro() {
  return (
    <div className="p-4 w-full bg-[#fff] shadow-lg rounded flex items-center">
      <div className="mr-4">
        <FaInfoCircle className="text-6xl text-[#f37812]" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-[#f37812]">드래프트</h2>
        <p className="break-keep">
          드래프트 도구를 사용하여 팀을 구성하세요.{" "}
          <b className="text-lg">먼저 감독을 추가</b>하고, 선수들을 각
          포지션별로 선택하면 됩니다. <b className="text-lg">더블클릭</b>으로
          선수목록에서 선수를 제외 가능합니다.
        </p>
      </div>
    </div>
  );
}
