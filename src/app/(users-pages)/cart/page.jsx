import Appnav from "@/components/Appnav";
import CartItemList from "@/components/CartItemList";
import Menubar from "@/components/MenuBar";
import StickyMenu from "@/components/StickyMenu";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function CartPage() {

  // user info
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email
    }
  })

  // cart data fetch
  const cartItems = await prisma.cart.findMany({
    where: {
      created_by: user?.id,
    },
    orderBy: {
      serial: "desc"
    }
  })

  // total calculation
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, currentValue) => {
      const itemTotal = parseInt(currentValue.total_price) || 0;
      return total + itemTotal;
    }, 0);
  }




  return (
    <>
      <Appnav />
      <Menubar />
      <div className="hidden lg:block">
        <StickyMenu />
      </div>

      {/* cart start */}
      <div className="max-w-6xl mx-auto">
        <div className="p-10">
          <div className="text-center">
            <h2 className="text-xl font-medium">
              Your Shopping Cart ({cartItems.length} items)
            </h2>
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
            {cartItems && cartItems.map((item)=> {
              return <CartItemList key={item.serial} data={item} />
            })}

            {/* total calculation */}
            <div className="grid grid-cols-12 bg-white p-7">
              <div className="col-span-12 hidden lg:block lg:col-span-6"></div>
              <div className="col-span-12 lg:col-span-6 w-full flex flex-col">
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                  <p className="text-gray-800 font-medium">Subtotal</p>
                  <p className="text-black text-sm">${calculateTotalPrice()}.00</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                  <p className="text-gray-800 font-medium">Vat (2%)</p>
                  <p className="text-black text-sm">$2.00</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                  <p className="text-gray-800 font-medium">Discount</p>
                  <p className="text-black text-sm">$0.00</p>
                </div>

                <div className="flex items-center justify-between mt-5 py-2">
                  <p className="text-gray-800 font-bold text-lg">Gross Total</p>
                  <p className="text-black font-bold text-lg">${calculateTotalPrice() + calculateTotalPrice() * (2/100)}</p>
                </div>

                <Link
                  href={"/payment"}
                  className="w-full bg-brand text-white p-2 text-center flex items-center justify-center gap-3 mt-5"
                >
                  <span>Checkout</span>
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
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
