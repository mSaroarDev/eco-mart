import Image from "next/image";
import Link from "next/link";

export default function CategoryList({ data }) {
  return (
    <>
      <Link
        href={`/products?category=${data?.category_name}&category_id=${data?.id}`}
        className="flex items-center gap-3 px-5 hover:text-brand duration-300"
      >
        <Image
          src={data?.category_image}
          height={24}
          width={24}
          alt={data?.category_name}
        />

        <span className="border-b-[1px] border-gray-100 w-full py-3">
          {data?.category_name}
        </span>
      </Link>
    </>
  );
}
