import Logo from "@/_components/common/Logo";
import Board from "@/_components/tactics/Board";

export default function Tactice() {
  return (
    <section className="w-[1100px] mx-auto py-[120px]">
      <Logo />
      <div className="p-[20px] w-auto bg-white relative mx-auto shadow-lg rounded">
        <Board />
      </div>
    </section>
  );
}
