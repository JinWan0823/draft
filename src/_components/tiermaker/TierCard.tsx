import PositionBadge from "../players/PositionBadge";

export default function TierCard() {
  return (
    <>
      <div
        draggable
        className="w-[80px] bg-[#fff] rounded-[10px] overflow-hidden border-gray-200 border-1 shadow-lg "
      >
        <div className="img-box w-full h-[80px] bg-[#333]"></div>
        <div className="relative text-center p-1 py-2 text-sm">
          <div className="absolute top-0 right-[2px] translate-y-[-50%]">
            <PositionBadge position="스트라이커" tier={true} />
          </div>
          <p>이름</p>
        </div>
      </div>
    </>
  );
}
