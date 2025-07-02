import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <header className="flex justify-center">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={700} height={140} />
      </Link>
    </header>
  );
}
