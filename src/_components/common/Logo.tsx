import Image from "next/image";
export default function Logo() {
  return (
    <>
      <Image
        src={"/logo_light.webp"}
        alt="logo"
        width={700}
        height={140}
        className="mx-auto"
      />
    </>
  );
}
