import { useAlert } from "@/_context/AlertContext";
import { useSession } from "next-auth/react";
import { FaRegTrashAlt } from "react-icons/fa";

interface IdProps {
  playerId: string;
  handleModal: () => void;
  fetchPlayers: () => void;
}

export default function PlayerDeleteBtn({
  playerId,
  handleModal,
  fetchPlayers,
}: IdProps) {
  const { showAlert } = useAlert();
  const { data: session } = useSession();

  const handleDeleteClick = async () => {
    if (!session?.user) {
      showAlert("유저 정보가 없습니다.");
      return;
    }

    if (!confirm("정말로 이 선수를 삭제하시겠습니까?")) return;

    try {
      const response = await fetch(`/api/player?_id=${playerId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log("선수 삭제 성공", data);
      if (response.ok) {
        showAlert("선수 삭제를 완료했습니다.");
        await fetchPlayers();
        handleModal();
      }
    } catch (err) {
      showAlert("서버에 오류가 있습니다.");
      console.error(err);
    }
  };

  return (
    <button
      type="button"
      className="close-btn text-sm bg-red-600 text-white font-bold px-3 py-1 rounded-[8px] flex items-center"
      onClick={handleDeleteClick}
    >
      삭제 <FaRegTrashAlt className="ml-1" />
    </button>
  );
}
