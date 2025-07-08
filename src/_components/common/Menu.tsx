import { motion } from "framer-motion";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import MenuLi from "./MenuLi";
import { useSession } from "next-auth/react";

interface MenuProps {
  handleMenuTab: () => void;
}

const menuList = ["홈", "선수목록", "전술보드", "드래프트", "선수 티어메이커"];

export default function Menu({ handleMenuTab }: MenuProps) {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#000000bf]"
      onClick={() => handleMenuTab()}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 60 }}
        className="absolute w-[360px] h-full bg-[#fdb980] py-[80px] top-0 left-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="w-[40px] h-[40px] bg-[#dfdfdf] absolute top-[10px] right-[10px] inset-shadow-sm inset-shadow-indigo-500/50 rounded-full cursor-pointer flex items-center justify-center"
          onClick={handleMenuTab}
        >
          <IoClose className="text-[#f37812]" />
        </button>
        <Logo />
        <ul className="text-[#fff] text-xl p-[10px] font-bold">
          {menuList.map((item, idx) => (
            <MenuLi key={idx} handleMenuTab={handleMenuTab} menu={item} />
          ))}

          {session?.user ? (
            <MenuLi handleMenuTab={handleMenuTab} menu={"선수등록"} />
          ) : (
            ""
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
}
