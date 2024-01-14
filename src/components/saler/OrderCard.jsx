import formatDate from "@/lib/formatted-date";
import Link from "next/link";

export default function OrderCard({ data }) {
  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <span className="bg-brand w-10 h-10 rounded-full text-xl font-bold text-white leading-10 text-center">
              {data?.serial}
            </span>
            <div>
              <h2 className="font-semibold text-black text-sm">
                Trx: {data?.id}
              </h2>
              <p className="text-gray-500 text-sm">
                Products Qty: {data?.items.length}, Amount: $
                {parseInt(data.gross).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Order Status</p>
          <p className={`text-sm font-bold mb-2 ${data?.status == "Delivered" ? "text-green-600" : data?.status == "Canceled" ? "text-red-600" : "text-brand" }`}>{data?.status}</p>
          <p className="text-gray-500 text-xs">Payment Status</p>
          <p className="text-brand text-sm font-bold">
            {data?.isPaid == true ? "Paid" : "Not Paid"}
          </p>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Ordred at</p>
          <p className="text-brand text-sm font-bold mb-2">
            {formatDate(data?.createdAt)}
          </p>
          <p className="text-gray-500 text-xs">Details</p>
          <Link
            href={`/saler/orders/summary?order=${data?.id}`}
            className="text-brand text-sm font-bold underline cursor-pointer"
          >
            View Order Summary
          </Link>
        </div>
      </div>
    </>
  );
}
