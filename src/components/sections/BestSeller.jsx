import Image from "next/image";
import TodaysDeals from "../TodaysDeals";
import RelatedTodayProduct from "../RelatedTodayProduct";
import Link from "next/link";
import TodayBestSalesProducts from "../TodayBestSaleProduct";

export default function BestSellerSection() {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 border-[1px] border-gray-300">
            <div className="w-full">
              <div className="__heading ml-2 bg-brand text-white text-md font-semibold uppercase py-2 px-8 w-fit rounded-b-lg">
                Today Deals
              </div>

              {/* todays deals card */}
              <TodaysDeals />

              <hr className="m-3" />

              {/* related products */}
              <div className="__related_products px-10 py-2">
                <div className="grid grid-cols-12 gap-3">
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 border-[1px] border-gray-300 bg-white">
            <div className="bg-gray-200 p-3 text-left uppercase text-base font-medium">
              Best Sales Today
            </div>

            {/* products */}
            <div className="flex flex-col gap-3">
              <div className="w-full p-4">
                <TodayBestSalesProducts />
                <TodayBestSalesProducts />
                <TodayBestSalesProducts />
                <TodayBestSalesProducts />
                <TodayBestSalesProducts />
                <TodayBestSalesProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
