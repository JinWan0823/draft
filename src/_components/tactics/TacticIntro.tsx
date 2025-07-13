import { FaRegClipboard } from "react-icons/fa6";

export default function TacticIntro() {
  return (
    <div className="p-4 w-full bg-[#fff] shadow-lg rounded items-center sm:felx">
      <div className="mr-4">
        <FaRegClipboard className="text-3xl text-[#f37812] sm:text-6xl" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-[#f37812]">전술보드</h2>
        <p className="break-keep">
          선수들의 전술을 짜보세요. 선수를 <b className="text-lg">드래그</b>하여
          자유롭게 배치하고 이동할 수 있습니다. 선수를 제거하려면{" "}
          <b className="text-lg">선수 제거 버튼</b>을 클릭한 후 제거할 선수를
          선택하세요. 선수목록에서 <b className="text-lg">포지션을 검색</b>하여
          포지션별로 선수확인 가능합니다.
        </p>
      </div>
    </div>
  );
}
