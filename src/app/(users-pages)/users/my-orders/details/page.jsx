import CartItemList from "@/components/CartItemList";
import MyOrderItemList from "@/components/DetailsOrderCard";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function OrderSummaryPage({searchParams}) {

  // product fecth
  const id = searchParams.order;
  const data = await prisma.orders.findUnique({
    where: {
      id: id
    }
  })


  return (
    <>
      <div>
        {/* cart start */}
        <div className="max-w-6xl mx-auto">
          <div className="p-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">Order Summary</h2>
              
            </div>

            <div className="bg-white mt-10 w-full">
              {/* items heading */}
              <div className="__headings flex items-center gap-3 border-b-[1px] border-gray-300 p-5 bg-slate-50">
                <div className="w-3/6">Item Name</div>
                <div className="w-1/6">Unit Price</div>
                <div className="w-1/6">Quantity</div>
                <div className="w-1/6 text-right">Total Price</div>
              </div>

              {/* items list */}

              {data?.items && data?.items.map((item, i)=> {
                return <MyOrderItemList key={i} data={item} />
              })}

              {/* total calculation */}
              <div className="grid grid-cols-12 bg-white p-7">
                <div className="col-span-12 hidden lg:block lg:col-span-6"></div>
                <div className="col-span-12 lg:col-span-6 w-full flex flex-col">
                  <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                    <p className="text-gray-800 font-medium">Subtotal</p>
                    <p className="text-black text-sm">${parseInt(data?.subtotal).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                    <p className="text-gray-800 font-medium">Vat (2%)</p>
                    <p className="text-black text-sm">${(parseInt(data?.subtotal) * (2/100)).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                    <p className="text-gray-800 font-medium">Discount</p>
                    <p className="text-black text-sm">$0.00</p>
                  </div>

                  <div className="flex items-center justify-between mt-5 py-2">
                    <p className="text-gray-800 font-bold text-lg">
                      Gross Total
                    </p>
                    <p className="text-black font-bold text-lg">${data?.gross}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* customer details */}
            
            <div className="w-full bg-brand/10 rounded-xl p-10">
            <div className="text-center mb-5">
              <h2 className="text-xl font-medium">Shipping Details</h2>
            </div>

            <div className="text-center">
                Customer Name: Sarowar Jahan, Email: msaroar.dev@gmail.com <br />
                Darusha, Paba, Rajshahi <br />
                Rajshahi, Bangladesh <br />
                Post Code: 6210, Contact: +123456789
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
