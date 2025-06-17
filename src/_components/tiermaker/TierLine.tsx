import TierCard from "./TierCard";

export default function TierLine() {
  return (
    <div className="tier-line w-full flex min-h-[140px] mt-2 rounded-[16px] overflow-hidden border-gray-200 border-1">
      <div className="flex items-center justify-center bg-[#ff7f7f] w-[100px]">
        <span className="font-bold text-6xl text-white">S</span>
      </div>
      <div className="bg-[#fff] p-2 flex gap-2 mr-[80px] items-center flex-wrap">
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
  );
}
