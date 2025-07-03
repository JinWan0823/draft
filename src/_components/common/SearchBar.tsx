"use client";

import { MdOutlineSearch } from "react-icons/md";
import PlayerDetail from "../players/PlayerDetail";
import { useState } from "react";
import { PlayerInfoProps } from "@/_types/playerTypes";
import { useAlert } from "@/_context/AlertContext";

export default function SearchBar() {
  const [modal, setModal] = useState(false);
  const [playerInfo, setPlayerInfo] = useState<PlayerInfoProps>();
  const [searchText, setSearchText] = useState("");

  const { showAlert } = useAlert();

  const handleModal = () => {
    setModal(false);
    document.documentElement.classList.remove("modal-open");
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/player/${searchText}`);
      if (!res.ok) {
        showAlert("해당하는 선수를 찾을 수 없습니다.");
        throw new Error("선수 로딩 실패");
      }

      const data = await res.json();
      setPlayerInfo(data);
      setModal(true);
      setSearchText("");
      document.documentElement.classList.add("modal-open");
    } catch (error) {
      console.error("선수 데이터 로딩 실패", error);
    }
  };

  return (
    <>
      <div className="my-[20px] border-[#f37812] border-3 mx-auto mb-6 w-full max-w-[800px] rounded-full px-[16px] py-[10px]">
        <form onSubmit={handleSearch} className="w-full flex">
          <input
            type="text"
            className="w-full outline-none text-xl"
            placeholder="선수 검색"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer text-[#f37812] text-4xl  ml-[4px] text-center"
          >
            <MdOutlineSearch />
          </button>
        </form>
      </div>
      {modal && playerInfo && (
        <PlayerDetail info={playerInfo} handleModal={handleModal} />
      )}
    </>
  );
}
