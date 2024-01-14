import Image from "next/image";
import Spinner from "./spinner/Spinner";
import Link from "next/link";
import formatDate from "@/lib/formatted-date";

export default function OrderCart({data}) {

  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <span className="text-2xl text-brand font-bold">#</span>
            {/* <Image src="/bag.jpg" height={100} width={100} alt="Bag" /> */}
            <div>
              <Link href={`/users/my-orders/details?order=${data?.id}`} title="Order Details">
              <h2 className="font-semibold text-black hover:underline hover:text-brand">
                Order ID: {data?.serial}
              </h2>
              </Link>
              <p className="text-gray-500 text-sm">Items: {data?.items?.length}, Amount: ${parseInt(data?.gross).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
            <p className="text-gray-500 text-xs">Payment Status</p>
            <p className="text-brand text-sm font-bold">{data?.isPaid == true ? "Paid" : "Not Paid"}</p>
        </div>
        <div className="w-1/4">
        <p className="text-gray-500 text-xs">Ordered at</p>
            <p className="text-brand text-sm font-bold">{formatDate(data?.createdAt)}</p>
             <p className="text-gray-500 text-xs mt-2">Order Status</p>
            <p className="text-brand text-sm font-bold">{data?.status}</p>
        </div>
      </div>
    </>
  );
}
