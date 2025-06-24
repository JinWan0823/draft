import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={700}
          height={140}
          className="mx-auto"
        />
      </Link>
    </>
  );
}
