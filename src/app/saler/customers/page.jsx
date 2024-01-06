import OrderCart from "@/components/OrderCart";
import Paggination from "@/components/Paggination";
import CustomerCard from "@/components/saler/Customers";
import OrderCard from "@/components/saler/OrderCard";
import ProductCard from "@/components/saler/ProductCard";
import Image from "next/image";

export default function CustomersPage() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-5">
          <div>
            <h1 className="text-lg font-bold text-black">Customers</h1>
            <p className="text-gray-600 text-sm">
            All customers that purchasing from Eco-Mart
            </p>
          </div>
          <div>
            
          </div>
        </div>

        {/* orders */}
        <div className="__orders">
          <div className="flex flex-col gap-3">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
          </div>
        </div>
        <div className="p-5 border-t-[1px] border-gray-300 flex items-center justify-end">
          <Paggination count={100} nextLink={"/users/my-orders"} />
        </div>
      </div>
    </>
  );
}
