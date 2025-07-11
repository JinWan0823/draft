interface SelectOptProps {
  opt: string;
  isSelected: boolean;
  onClick?: () => void;
}

export default function SelectOpt({
  opt,
  isSelected,
  onClick,
}: SelectOptProps) {
  return (
    <div
      className={`cursor-pointer px-[10px] py-[4px] rounded mx-[4px] ${
        isSelected ? "bg-[#f37812] text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {opt}
    </div>
  );
}
