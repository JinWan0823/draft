import Logo from "@/_components/common/Logo";
import TierCard from "@/_components/tiermaker/TierCard";
import TierIntro from "@/_components/tiermaker/TierIntro";
import TierLine from "@/_components/tiermaker/TierLine";

export default function TierMaker() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <TierIntro />
      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <TierLine />
        <TierLine />
        <TierLine />

        <div className="mt-8">
          <div className="flex items-center justify-between p-2 px-4 bg-[#333] font-bold text-white">
            <p>미분류 선수</p>
            <span className="rounded-[12px] px-2 bg-gray-600">109</span>
          </div>
          <div className="p-4 flex flex-wrap max-h-[420px] overflow-y-scroll gap-4 custom-scrollbar">
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
            <TierCard />
          </div>
        </div>
      </div>
    </section>
  );
}
