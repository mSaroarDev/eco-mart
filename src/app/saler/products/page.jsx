import OrderCart from "@/components/OrderCart";
import Paggination from "@/components/Paggination";
import OrderCard from "@/components/saler/OrderCard";
import ProductCard from "@/components/saler/ProductCard";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-5">
          <div>
            <h1 className="text-lg font-bold text-black">Products</h1>
            <p className="text-gray-600 text-sm">
              Recent products of your panel
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 login">
                <label htmlFor="filter">Filter by</label>
                <select className="login-input">
                  <option value="">Category</option>
                  <option value="">Fashion</option>
                  <option value="">Sports</option>
                </select>
                <button className="bg-brand text-white px-4 py-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-brand text-white px-4 py-2 rounded-full flex items-center justify-center gap-2">
                <span className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                    />
                  </svg>
                </span>
                <span className="text-sm uppercase">Add New Product</span>
              </button>
            </div>
          </div>
        </div>

        {/* orders */}
        <div className="__orders">
          <div className="flex flex-col gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="p-5 border-t-[1px] border-gray-300 flex items-center justify-end">
          <Paggination count={100} nextLink={"/users/my-orders"} />
        </div>
      </div>
    </>
  );
}
