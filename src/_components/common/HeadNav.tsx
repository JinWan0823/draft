export default function HeadNav() {
  return (
    <header className="h-[60px] bg-[#333]">
      <div className="inner w-[1240px] h-[60px] mx-auto flex justify-between items-center">
        <p>DRAFT</p>

        <nav>
          <ul className="flex">
            <li className="font-bold">리더등록</li>
            <li className="font-bold">선수등록</li>
            <li className="font-bold">드래프트</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
