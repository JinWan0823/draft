interface CareerProps {
  idx: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CareerInput({ idx, value, onChange }: CareerProps) {
  return (
    <div className="flex items-center mt-1">
      <span className="w-[24px] h-[24px] mr-2 rounded-full bg-[#f37812] font-bold text-sm text-white flex items-center justify-center">
        {idx + 1}
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="flex-1 px-2 border-1 p-1 border-gray-300 rounded outline-[#f37812]"
      />
    </div>
  );
}
