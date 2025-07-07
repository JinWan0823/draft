import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

interface IdProps {
  playerId: string;
}

export default function PlayerUpdateBtn({ playerId }: IdProps) {
  const router = useRouter();

  const handleLinkClick = () => {
    document.documentElement.classList.remove("modal-open");
    router.push(`/update/${playerId}`);
  };

  return (
    <button
      type="button"
      className="close-btn  text-sm bg-[#fff] font-bold py-[2px] px-[10px] rounded-[8px] flex items-center"
      onClick={handleLinkClick}
    >
      수정 <IoClose />
    </button>
  );
}
