import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <>
      <div className="my-[20px] border-[#f37812] border-3 mx-auto mb-6 w-full max-w-[800px] rounded-full px-[16px] py-[10px] flex">
        <input
          type="text"
          className="w-full outline-none text-xl"
          placeholder="선수 검색"
        />
        <button
          type="button"
          className="cursor-pointer text-[#f37812] text-4xl  ml-[4px] text-center"
        >
          <MdOutlineSearch />
        </button>
      </div>
    </>
  );
}
