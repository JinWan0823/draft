import { PlayerInfoProps } from "@/_types/playerTypes";
import { useEffect, useState } from "react";

export default function useAllPlayers() {
  const [allPlayers, setAllPlayers] = useState<PlayerInfoProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch("/api/player");
        if (!res.ok) throw new Error("서버 응답 실패");
        const data = await res.json();
        setAllPlayers(data);
      } catch (error) {
        console.error("선수 데이터 로딩 실패", error);
        setError("선수 데이터 로딩 실패");
      } finally {
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  return { allPlayers, setAllPlayers, loading, error };
}
