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

export default function TacticsClient() {
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
    dimensions,
    setDimensions,
  } = useTactics();

  return (
    <section className="max-w-[1100px] w-[95%] mx-auto py-[120px] pb-[250px] md:pb-[120px]">
      <Logo />
      <div className="max-w-[95%] fixed items-center z-9999 right-1/2 bottom-[20px] translate-x-1/2 block md:max-w-[180px] md:right-[20px] md:bottom-1/2 md:translate-x-0 md:translate-y-1/2">
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
      <TacticList />
      <div
        className="p-2 mt-6 w-full bg-white relative mx-auto shadow-lg rounded sm:p-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Board dimensions={dimensions} setDimensions={setDimensions} />
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
