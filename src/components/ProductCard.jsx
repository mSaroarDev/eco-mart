import Image from "next/image";
import Link from "next/link";
import AllAddtoCart from "./AllAddToCart";
import priceFixed from "@/utils/priceFixed";

export default function ProductCard({ data }) {
  return (
    <>
      <div className="col-span-12 lg:col-span-3">
        <div className="border-[1px] border-gray-300 p-5 w-full h-[380px]">
          <div className="flex flex-col justify-between h-full w-full">

            <div className="__image w-full h-[200px] relative">
              <div className="bg-brand text-white text-xs w-10 h-10 p-3 rounded-full absolute -top-2 -right-2 flex items-center justify-center z-10">
                -{data?.discount}%
              </div>
              <Image
                src={data?.product_image}
                fill
                alt={data?.product_name}
                className="absolute inset-0 object-cover"
              />
            </div>

            <div>
              <h2 className="text-base font-medium text-gray-500 text-center my-1">
                <Link
                  href={`/p_details?p_=${data?.product_name}&p_id=${data?.id}`}
                  className="hover:underline text-black"
                >
                  {data?.product_name}
                </Link>
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="text-brand font-medium">{priceFixed(data?.price)}</div>
                <div className="text-gray-400 line-through text-xs">
                  {priceFixed(data?.regular_price)}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                className="my-3 w-8 h-8 rounded-full border-[1px] border-[#292929] flex items-center justify-center"
                title="Add to wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 512 512"
                  fill="#000"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </button>

              <AllAddtoCart data={data}  />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
