import { motion } from "framer-motion";

interface MenuProps {
  handleMenuTab: () => void;
}

export default function Menu({ handleMenuTab }: MenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#333333bf]"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 60 }}
        className="absolute w-[200px] h-full bg-[#fdb980] top-0 left-0"
      >
        <button onClick={handleMenuTab}>X</button>
      </motion.div>
    </motion.div>
  );
}
