"use client";

import Logo from "@/_components/common/Logo";
import DraftIntro from "@/_components/draft/DraftIntro";
import CoachCard from "@/_components/draft/CoachCard";
import PositionCategory from "@/_components/draft/PositionCategory";
import BtnWrap from "@/_components/draft/BtnWrap";
import { FaPlus, FaUserTie } from "react-icons/fa6";

import useDraft from "@/_hooks/useDraft";
import CustomSelect from "@/_components/players/CustomSelect";
import DraftResult from "@/_components/draft/DraftResult";
import useAllPlayers from "@/_hooks/useAllPlayer";
import { positionMenu } from "../../../dumy";

export default function DraftClient() {
  const {
    inputValue,
    setInputValue,
    coachList,
    handleSubmit,
    handleCoachReset,
    handleRandomSelect,
    handlePlayerSelect,
    isAlreadySelected,
    handlePlayerDelete,
    handleAddPlayer,
    currentOrder,
    selectedPosition,
    setSelectedPosition,
    addPlayer,
    setAddPlayer,
    draftResult,
    setDraftResult,
    handleCopyResult,
  } = useDraft();

  const { allPlayers } = useAllPlayers();

  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <DraftIntro />
      {draftResult && (
        <DraftResult
          coachList={coachList}
          setDraftResult={setDraftResult}
          handleCopyResult={handleCopyResult}
        />
      )}

      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <h2 className="text-[#f37812] py-4 border-b-1 border-gray-300 flex items-center text-xl font-bold">
          <FaUserTie className="text-2xl mr-2" /> 감독 관리
        </h2>
        <form className="flex mt-6 gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 flex-1 rounded text-lg border-1 border-gray-300"
            placeholder="감독 이름 입력"
          />
          <button
            type="submit"
            className="flex items-center bg-[#f37812] p-4 text-white rounded"
          >
            <FaPlus className="mr-2" /> 감독 추가
          </button>
        </form>
        <BtnWrap
          handleCoachReset={handleCoachReset}
          handleRandomSelect={handleRandomSelect}
          setDraftResult={setDraftResult}
        />
        <ul className="flex flex-wrap items-start justify-center mt-4 gap-5">
          {coachList.map((coach, idx) => (
            <CoachCard
              key={idx}
              coach={coach}
              handlePlayerDelete={handlePlayerDelete}
              currentOrder={currentOrder}
            />
          ))}
        </ul>
      </div>

      <div className="p-4 mt-8 bg-white rounded shadow-xl">
        <h2 className="text-[#f37812] py-4 border-b-1 border-gray-300 flex items-center text-xl font-bold">
          <FaUserTie className="text-2xl mr-2" /> 선수 관리
        </h2>

        <form className="mt-6" onSubmit={handleAddPlayer}>
          <textarea
            className="w-full h-[120px] p-2 rounded border-1 border-gray-300"
            placeholder="선수를 입력해주세요. 쉼표(,)를 이용해 여러명의 선수를 한번에 입력할 수 있습니다."
            value={addPlayer}
            onChange={(e) => setAddPlayer(e.target.value)}
          />
          <div className="flex items-center">
            <div className="w-[220px] mx-[4px]">
              <CustomSelect
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
              />
            </div>
            <button
              type="submit"
              className="flex items-center bg-[#f37812] p-2 text-white rounded"
            >
              <FaPlus className="mr-2" /> 선수 생성
            </button>
          </div>
        </form>

        <div className="flex flex-wrap items-start gap-4 my-4">
          {positionMenu.map((posi, idx) =>
            idx === 0 ? (
              ""
            ) : (
              <PositionCategory
                key={idx}
                position={posi}
                handlePlayerSelect={handlePlayerSelect}
                isAlreadySelected={isAlreadySelected}
                playerList={allPlayers}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
