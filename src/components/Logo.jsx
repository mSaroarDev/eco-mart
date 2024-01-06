import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <Image src="/LOGO.png" height={150} width={220} alt="Logo" />
      </Link>
    </>
  );
}
