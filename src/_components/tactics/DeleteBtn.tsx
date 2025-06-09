import { IoClose } from "react-icons/io5";

interface DeleteBtnProps {
  onClick: () => void;
}

export default function DeleteBtn({ onClick }: DeleteBtnProps) {
  return (
    <button
      type="button"
      className="absolute text-xl w-[22px] h-[22px] text-white
                flex items-center justify-center top-[-6px] left-[-6px]
                border-1 border-white rounded-[50%] bg-red-700"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <IoClose />
    </button>
  );
}
