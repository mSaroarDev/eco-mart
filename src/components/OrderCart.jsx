import Image from "next/image";
import Spinner from "./spinner/Spinner";
import Link from "next/link";

export default function OrderCart({data}) {

  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <span className="text-2xl text-brand font-bold">#</span>
            {/* <Image src="/bag.jpg" height={100} width={100} alt="Bag" /> */}
            <div>
              <Link href={`/users/my-orders/details?transaction_id=${data?.id}`} title="Order Details">
              <h2 className="font-semibold text-black hover:underline hover:text-brand">
                Order ID: {data?.serial}
              </h2>
              </Link>
              <p className="text-gray-500 text-sm">Items: {data?.items?.length}, Amount: ${data?.subtotal}</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
            <p className="text-gray-500 text-xs">Payment Status</p>
            <p className="text-brand text-sm font-bold">{data?.isPaid == true ? "Paid" : "Not Paid"}</p>
        </div>
        <div className="w-1/4">
             <p className="text-gray-500 text-xs">Order Status</p>
            <p className="text-brand text-sm font-bold">Processing</p>
        </div>
      </div>
    </>
  );
}
