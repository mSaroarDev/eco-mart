import Paggination from "@/components/Paggination";
import OrderCard from "@/components/saler/OrderCard";
import prisma from "@/lib/db";

export default async function MyOrdersPage({ searchParams }) {
  // page
  const pageNo = searchParams.page;

  // orders
  const totalOrders = await prisma.orders.count();
  const orders = await prisma.orders.findMany({
    where: {
      isPaid: true,
    },
    skip: (pageNo - 1) * 10,
    take: 10,
    orderBy: {
      serial: "desc",
    },
  });

  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-5">
          <div>
            <h1 className="text-lg font-bold text-black">Orders</h1>
            <p className="text-gray-600 text-sm">Recent orders of your store</p>
          </div>
          <div>
            <button className="bg-brand text-white px-4 py-2 rounded-full flex items-center justify-center gap-2">
              <span className="text-white">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <span className="text-sm uppercase">Track Order</span>
            </button>
          </div>
        </div>

        {/* orders */}
        <div className="__orders">
          <div className="flex flex-col gap-3">
            {orders &&
              orders.map((order) => {
                return <OrderCard key={order.serial} data={order} />;
              })}
          </div>
        </div>
        <div className="p-5 border-t-[1px] border-gray-300 flex items-center justify-end">
          <Paggination count={totalOrders} nextLink={"/saler/orders"} />
        </div>
      </div>
    </>
  );
}
