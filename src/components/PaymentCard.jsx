import Image from "next/image";
import Link from "next/link";

export default function PaymentCard() {
  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <Image src="/bag.jpg" height={100} width={100} alt="Bag" />
            <div>
              <h2 className="font-semibold text-black">
                #12345678
              </h2>
              <p className="text-brand text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span className="font-bold">$500.00</span>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <button className="flex items-center gap-1 text-black">
                  <Link href={"/saler/orders/summary"} className="text-sm underline">Order Details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Status</p>
          <p className="text-brand text-sm font-bold mb-2">Paid</p>
          <p className="text-gray-500 text-xs">Payment method</p>
          <p className="text-brand text-sm font-bold">Visa</p>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Paid at</p>
          <p className="text-brand text-sm font-bold mb-2">
            20 Oct, 2023 at 04.00pm
          </p>
          <p className="text-gray-500 text-xs">Paid By</p>
          <p className="text-brand text-sm font-bold mb-2">example@email.com</p>
        </div>
      </div>
    </>
  );
}
