import { useAlert } from "@/_context/AlertContext";
import { Achivement, PlayerInfoProps } from "@/_types/playerTypes";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function usePlayerCreate(mode: "create" | "edit") {
  const [selectedPosition, setSelectedPosition] = useState("포지션 선택");
  const [selectedSubPosition, setSelectedSubPosition] = useState("포지션 선택");
  const [careerArr, setCareerArr] = useState<Achivement[]>([
    {
      tournament: "",
      result: "",
    },
  ]);
  const [playerName, setPlayerName] = useState("");
  const [playerInfo, setPlayerInfo] = useState("");

  const [imageFile, setImageFile] = useState<File>();
  const [preview, setPreview] = useState<string>("/team1.png");
  const [existingImgUrl, setExistingImgUrl] = useState("");

  const { showAlert } = useAlert();
  const router = useRouter();
  const { id } = useParams();

  const { data: session } = useSession();

  const addCareerInput = () => {
    setCareerArr((prev) => [...prev, { tournament: "", result: "" }]);
  };

  const removeCareerInput = () => {
    if (careerArr.length > 1) {
      setCareerArr((prev) => [...prev].slice(0, -1));
    }
  };

  const handleTournamentChange = (idx: number, value: string) => {
    const newArr = [...careerArr];
    newArr[idx].tournament = value;
    setCareerArr(newArr);
  };

  const handleCareerRsultChange = (idx: number, value: string) => {
    const newArr = [...careerArr];
    newArr[idx].result = value;
    setCareerArr(newArr);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  useEffect(() => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const handlePlayerCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user) {
      showAlert("유저 정보가 없습니다.");
      return;
    }

    if (!playerName || selectedPosition === "포지션 선택") {
      showAlert("선수이름과 포지션은 필수입니다!");
      return;
    }

    const formData = new FormData();
    if (imageFile) {
      formData.append("image", imageFile);
    }
    formData.append("name", playerName);
    formData.append("position", selectedPosition);
    formData.append("subPosition", selectedSubPosition);
    formData.append("note", playerInfo);
    formData.append("achievements", JSON.stringify(careerArr));

    try {
      const response = await fetch("/api/player", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        showAlert(error.message);
        setExistingImgUrl("");
        return;
      }
      const data = await response.json();
      console.log("선수 등록", data);
      showAlert("선수 등록 성공!");
      router.push("/players");
    } catch (err) {
      console.error("선수 데이터 등록 실패", err);
      showAlert("서버에 오류가 있습니다.");
    }
  };

  //수정모드
  const setInitialData = (playerData: PlayerInfoProps) => {
    setPlayerName(playerData.name);
    setSelectedPosition(playerData.position);
    setSelectedSubPosition(playerData.subPosition);
    setPlayerInfo(playerData.note);
    setCareerArr(playerData.achievements);
    setPreview(playerData.image);
    setExistingImgUrl(playerData.image);
  };

  //수정모드 데이터 조회
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const res = await fetch(`/api/player/id/${id}`);
        const data = await res.json();
        setInitialData(data);
      } catch (err) {
        console.error("선수 데이터 조회 실패", err);
        showAlert("선수 정보를 불러오지 못했습니다.");
      }
    };

    if (mode === "edit") {
      fetchPlayerData();
    }
  }, []);

  //수정모드 폼 전송
  const handlePlayerUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session?.user) {
      showAlert("유저 정보가 없습니다.");
      return;
    }

    if (!playerName || selectedPosition === "포지션 선택") {
      showAlert("선수이름과 포지션은 필수입니다!");
      return;
    }

    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (existingImgUrl) {
      formData.append("existingImageUrl", existingImgUrl);
    }

    formData.append("_id", id as string);
    formData.append("name", playerName);
    formData.append("position", selectedPosition);
    formData.append("subPosition", selectedSubPosition);
    formData.append("note", playerInfo);
    formData.append("achievements", JSON.stringify(careerArr));

    try {
      const response = await fetch("/api/player", {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        showAlert(error.message);
        return;
      }

      const data = await response.json();
      console.log("선수 수정 완료", data);
      showAlert("선수 정보가 수정되었습니다.");
      router.push("/players");
    } catch (err) {
      console.error("선수 데이터 수정 실패", err);
      showAlert("서버에 오류가 있습니다.");
    }
  };

  return {
    selectedPosition,
    setSelectedPosition,
    selectedSubPosition,
    setSelectedSubPosition,
    careerArr,
    addCareerInput,
    removeCareerInput,
    handleTournamentChange,
    handleCareerRsultChange,
    playerName,
    setPlayerName,
    playerInfo,
    setPlayerInfo,
    handlePlayerCreate,
    handleChangeFile,
    preview,
    handlePlayerUpdate,
  };
}
