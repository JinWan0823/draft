"use client";

import { AnimatePresence, motion } from "framer-motion";

interface MessageProps {
  message: string;
}

export default function AlertMessage({ message }: MessageProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 600, damping: 60 }}
        className="fixed z-[9999] bottom-[20px] left-1/2 translate-x-[-50%] rounded-full text-lg w-[90%] max-w-[400px] font-bold text-white p-2 bg-[#4178cd] border-2 border-[#f37812]"
      >
        <p className="text-center">{message}</p>
      </motion.div>
    </AnimatePresence>
  );
}
