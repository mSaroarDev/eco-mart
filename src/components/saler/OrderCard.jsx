import Image from "next/image";
import Link from "next/link";

export default function OrderCard() {
  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <Image src="/bag.jpg" height={100} width={100} alt="Bag" />
            <div>
              <h2 className="font-semibold text-black">
                Arctic Hunter Backpack
              </h2>
              <p className="text-gray-500 text-sm">Qty: 1, Price: $500.00</p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
            <p className="text-gray-500 text-xs">Status</p>
            <p className="text-brand text-sm font-bold mb-2">Processing</p>
            <p className="text-gray-500 text-xs">Payment Status</p>
            <p className="text-brand text-sm font-bold">Paid</p>
        </div>
        <div className="w-1/4">
            <p className="text-gray-500 text-xs">Ordred at</p>
            <p className="text-brand text-sm font-bold mb-2">20 Oct, 2023 at 04.00pm</p>
            <p className="text-gray-500 text-xs">Details</p>
            <Link href={"/saler/orders/summary?order=1"} className="text-brand text-sm font-bold underline cursor-pointer">View Order Summary</Link>
        </div>
      </div>
    </>
  );
}
