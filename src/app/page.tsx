import Logo from "@/_components/common/Logo";
import MenuList from "@/_components/common/MenuList";
import SearchBar from "@/_components/common/SearchBar";

export default function Home() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <div className="flex flex-col items-center justify-center mt-[40px] w-full">
        <Logo />
        <SearchBar />
        <ul className="grid grid-cols-3 gap-8 w-full mt-[20px]">
          <MenuList category={"선수 목록"} />
          <MenuList category={"전술보드"} />
          <MenuList category={"드래프트"} />
          <MenuList category={"선수 티어메이커"} />
        </ul>
      </div>
    </section>
  );
}
