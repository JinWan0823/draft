"use client";

import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginPage() {
  const [viewPwd, setViewPwd] = useState(false);

  return (
    <section className="w-full h-full min-h-[100vh] flex items-center justify-center">
      <div className="p-4 py-8 w-[98%] max-w-[450px] rounded-[12px] bg-[#fff] shadow-xl">
        <Image src={"/logo.png"} alt="logo" width={700} height={140} />
        <form className="mt-4">
          <div>
            <input
              type="text"
              className="border-1 border-gray-300 w-full mt-2 p-2 outline-[#f37812]"
              name=""
              id=""
            />
          </div>
          <div className="relative mt-2">
            <input
              type={`${viewPwd ? "text" : "password"}`}
              className="border-1 border-gray-300 w-full p-2 outline-[#f37812]"
            />
            <button
              type="button"
              className="none absolute top-1/2 right-2 -translate-y-1/2 text-lg text-[#f37812]"
              onClick={() => setViewPwd((prev) => !prev)}
            >
              {viewPwd ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center mt-1">
            <input type="checkbox" name="" id="save-id" />
            <label htmlFor="save-id" className="text-sm ml-1 text-gray-400">
              아이디 저장
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#f37812] py-2 text-white font-bold  mt-8"
          >
            로그인
          </button>
        </form>
      </div>
    </section>
  );
}
