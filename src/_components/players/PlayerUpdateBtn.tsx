import { useRouter } from "next/navigation";
import { FaPencilAlt } from "react-icons/fa";

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
      className="close-btn  text-sm text-white bg-[#f37812] font-bold px-3 rounded-[8px] flex items-center"
      onClick={handleLinkClick}
    >
      수정 <FaPencilAlt className="ml-1" />
    </button>
  );
}
