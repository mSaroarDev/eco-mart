import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ data }) {
  return (
    <>
      <div className="w-1/2 lg:w-fit p-2">
        <div className="shadow-md hover:shadow-lg duration-150">
          <Link href={data?.category_link}>
            <div className="w-full lg:w-[200px] h-[240px] lg:h-[270px] bg-white relative">
              <Image
                src={data?.category_image}
                fill
                alt={data?.category_name}
                className="absolute inset-0 object-cover"
              />
            </div>
            <div className="w-full lg:w-[200px] h-[40px] bg-white flex items-center justify-center font-semibold uppercase">
              {data?.category_name}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
