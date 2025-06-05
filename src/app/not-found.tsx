import Logo from "@/_components/common/Logo";
import Image from "next/image";

export default function notFount() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <Logo />
      <div className="w-full p-[20px] py-[60px] mt-[20px] bg-gray-200 shadow-lg rounded-[20px] bg-[#fff]">
        <Image
          src={"/4040.png"}
          alt="404-error-img"
          width={500}
          height={360}
          className="mx-auto"
        />
        <p className="text-center text-xl text-[#f37812]">
          페이지를 찾을 수 없습니다!
        </p>
      </div>
    </section>
  );
}
