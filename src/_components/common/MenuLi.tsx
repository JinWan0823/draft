import Link from "next/link";

interface MenuProps {
  handleMenuTab: () => void;
  menu: string;
}

export default function MenuLi({ handleMenuTab, menu }: MenuProps) {
  const menuMap: Record<string, string> = {
    홈: "",
    선수목록: "players",
    전술보드: "tactics",
    드래프트: "draft",
    "선수 티어메이커": "tiermaker",
  };

  const path = menuMap[menu] || "/";

  return (
    <li className="mt-[10px]">
      <Link
        href={path}
        className="block p-[10px] hover:bg-[#ffffff36] rounded"
        onClick={() => handleMenuTab()}
      >
        {menu}
      </Link>
    </li>
  );
}
