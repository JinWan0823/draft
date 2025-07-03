"use client";

import Logo from "@/_components/common/Logo";
import Ball from "@/_components/tactics/Ball";
import Board from "@/_components/tactics/Board";
import DraggablePlayer from "@/_components/tactics/DraggablePlayer";
import DrawingCanvas from "@/_components/tactics/DrawingCanvas";
import DrawTool from "@/_components/tactics/DrawTool";
import DummyPlayer from "@/_components/tactics/DummyPlayer";
import TacticIntro from "@/_components/tactics/TacticIntro";
import TacticList from "@/_components/tactics/TacticList";
import ToolList from "@/_components/tactics/ToolList";
import useTactics from "@/_hooks/useTactics";

export default function Tactice() {
  const {
    players,
    ball,
    setBall,
    dummyPlayers,
    deleteMode,
    redPen,
    setRedPen,
    bluePen,
    setBluePen,
    drawing,
    setDrawing,
    handleDrop,
    handleDummyPlayer,
    handleDragOver,
    handleDeleteMode,
    handleDeleteDummyPlayer,
    handleDeletePlayer,
  } = useTactics();

  return (
    <section className="w-[1100px] mx-auto py-[120px]">
      <Logo />
      <TacticList />
      <div className="fixed right-[20px] top-1/2 -translate-y-1/2">
        <ToolList
          handleDummyPlayer={handleDummyPlayer}
          setBall={setBall}
          ball={ball}
          handleDeleteMode={handleDeleteMode}
          deleteMode={deleteMode}
        />
        <DrawTool
          redPen={redPen}
          bluePen={bluePen}
          setRedPen={setRedPen}
          setBluePen={setBluePen}
          setDrawing={setDrawing}
        />
      </div>
      <TacticIntro />
      <div
        className="p-[20px] mt-6 w-full bg-white relative mx-auto shadow-lg rounded"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Board />
        {drawing && <DrawingCanvas redPen={redPen} />}
        {players.map((player) => (
          <DraggablePlayer
            key={player.name}
            {...player}
            deleteMode={deleteMode}
            onDelete={() => handleDeletePlayer(player.name)}
          />
        ))}
        {dummyPlayers.map((player) => (
          <DummyPlayer
            key={player.id}
            {...player}
            deleteMode={deleteMode}
            onDelete={() => handleDeleteDummyPlayer(player.id)}
          />
        ))}
        {ball && <Ball x={528} y={278} />}
      </div>
    </section>
  );
}
