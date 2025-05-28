import Logo from "@/_components/common/Logo";
import SearchBar from "@/_components/common/SearchBar";

export default function Home() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <div className="flex flex-col items-center justify-center mt-[40px] w-full">
        <Logo />
        <SearchBar />
        <ul className="grid grid-cols-3 gap-6 w-full">
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
        </ul>
      </div>
    </section>
  );
}
