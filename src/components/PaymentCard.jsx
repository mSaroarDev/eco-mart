import Image from "next/image";

export default function PaymentCard(){
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
            <p className="text-gray-500 text-sm">Payment Status</p>
            <p className="text-green-600 text-base font-bold">Paid</p>
        </div>
        <div className="w-1/4">
        <p className="text-gray-500 text-sm">Payment Date</p>
        <p className="text-black text-base font-bold">20 Dec, 2023</p>
        <p className="text-gray-500 text-sm mt-2">Payment Method</p>
        <p className="text-black text-base font-bold">Paypal</p>
        </div>
      </div>
      </>
    )
}