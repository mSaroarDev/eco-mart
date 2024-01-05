import Image from "next/image";
import Link from "next/link";

export default function CategoryCard() {
  return (
    <>
      <div className="w-1/2 lg:w-fit p-2">
        <div className="shadow-md hover:shadow-lg duration-150">
        <Link href={"/"}>
          <div className="w-full lg:w-[200px] h-[240px] lg:h-[270px] bg-white relative">
            <Image
              src="/cate1.jpg"
              fill
              alt="Picture"
              className="absolute inset-0 object-cover"
            />
          </div>
          <div className="w-full lg:w-[200px] h-[40px] bg-white flex items-center justify-center font-semibold uppercase">
            Watches
          </div>
        </Link>
        </div>
      </div>
    </>
  );
}
