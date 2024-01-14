import Image from "next/image";
import Link from "next/link";

export default function TodayBestSalesProducts({ data }) {
  return (
    <>
      <div className="__product flex items-center gap-3 my-2">
        <div className="w-24 h-16 relative">
          <Image
            src={data?.product_image}
            fill
            alt={data?.product_name}
            className="absolute inset-0 object-contain"
          />
        </div>
        <div className="p-1 w-full">
          <Link href={`/p_details?p_=${data?.product_name}&p_id=${data?.id}`}>
            <h2 className="text-sm font-medium hover:underline hover:text-brand">
              {data?.product_name}
            </h2>
          </Link>
          <div className="text-brand text-xs flex gap-1 my-1">
            {`Ratings: ${data?.ratings}/5`}
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="text-brand font-medium text-sm">${data?.price}.00</div>
            {!data?.regular_price == "" && <div className="text-gray-400 line-through text-xs">
              ${data?.regular_price}.00
            </div>}
            
          </div>
        </div>
      </div>
    </>
  );
}
