import Logo from "@/_components/common/Logo";
import CoachCard from "@/_components/draft/CoachCard";
import DraftIntro from "@/_components/draft/DraftIntro";
import { FaCheckCircle, FaRandom } from "react-icons/fa";
import { FaUserMinus, FaUserTie } from "react-icons/fa6";

export default function Draft() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <DraftIntro />

      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <h2 className="text-[#f37812] py-4 border-b-1 border-gray-300 flex items-center text-xl font-bold">
          <FaUserTie className="text-2xl mr-2" /> 감독 관리
        </h2>
        <form action="" className="flex mt-6 gap-2">
          <input
            type="text"
            className="p-2 flex-1 rounded text-lg border-1 border-gray-300"
            placeholder="감독 이름 입력"
          />
          <button type="button" className="bg-[#f37812] p-4 text-white rounded">
            + 감독 추가
          </button>
        </form>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <button className="flex items-center mr-2 bg-[#f37812] p-2 text-white rounded">
              <FaRandom className="mr-2" /> 랜덤 감독 선택
            </button>
            <button className="flex items-center bg-[#333] p-2 text-white rounded">
              <FaUserMinus className="mr-2" /> 초기화
            </button>
          </div>
          <button className="flex items-center bg-[#7aadb3] p-2 text-white rounded">
            <FaCheckCircle className="mr-2" />
            최종 팀 확정
          </button>
        </div>
        <ul className="flex flex-wrap items-start justify-center mt-4 gap-5">
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
          <CoachCard />
        </ul>
      </div>
    </section>
  );
}
