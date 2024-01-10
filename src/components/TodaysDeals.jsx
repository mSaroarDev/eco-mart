import Image from "next/image";
import Link from "next/link";
import Ratings from "./Ratings";
import TodayDealsAddtoCartButton from "./TodayDealsAddtoCartButton";

export default function TodaysDeals({ data }) {
  return (
    <>
      <div className="__product px-10 py-3 flex flex-wrap lg:flex-nowrap items-center justify-start gap-5">
        <div className="__image min-w-[280px] h-[280px] relative mt-4 lg:mt-0">
          <div className="w-12 h-12 p-3 bg-brand text-white rounded-full flex items-center justify-center font-semibold absolute -top-3 -right-3 z-10">
            -{data?.discount}%
          </div>
          <Image
            src={data?.product_image}
            fill
            alt="Bag"
            className="absolute inset-0 object-cover"
          />
        </div>

        <div className="p-3 lg:p-10">
          <h1 className="text-xl text-black font-semibold">
            <Link
              href={`/p_details?p_=${data?.product_name}&p_id=${data?.id}`}
              className="hover:underline"
            >
              {data?.product_name}
            </Link>
          </h1>
          <p className="text-gray-600 mt-5">Ratings: {data?.ratings}/5</p>
          <hr className="my-3" />
          <p className="text-gray-400 text-sm">{data?.short_des.slice(0, 250)}...</p>
          <div className="my-5 flex items-center justify-start gap-3">
            <div className="text-brand text-2xl font-semibold">
              ${data?.price}.00
            </div>
            {!data?.regular_price == "" && (
              <div className="text-gray-400 text-base line-through">
                ${data?.regular_price}.00
              </div>
            )}
          </div>
          <TodayDealsAddtoCartButton productId={data?.id} />
        </div>
      </div>
    </>
  );
}
