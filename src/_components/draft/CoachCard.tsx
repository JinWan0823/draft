export default function CoachCard() {
  return (
    <li className="shadow-xl p-4 py-8 rounded-[16px] border-gray-300 border-1 border-t-6 w-[23.5%] bg-white">
      <div className="img-box w-[110px] h-[110px] mx-auto border-1 rounded-full bg-[#333]"></div>
      <h4 className="font-bold text-center text-lg mt-4">감스트</h4>
      <div className="mt-4 rounded-[16px] border-t-2 py-4 p-2">
        <p className="text-center">감스트팀 선수 목록 (0명)</p>
        <ul className="mt-2">
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            (선수 없음)
          </li>
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            감스트
          </li>
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            감스트
          </li>
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            감스트
          </li>
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            감스트
          </li>
          <li className="mt-1 border-1 border-gray-200 p-2 rounded text-sm">
            감스트
          </li>
        </ul>
      </div>
    </li>
  );
}
