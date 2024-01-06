import Appnav from "@/components/Appnav";
import Menubar from "@/components/MenuBar";
import ProductCard from "@/components/ProductCard";
import RelatedTodayProduct from "@/components/RelatedTodayProduct";
import StickyMenu from "@/components/StickyMenu";
import TodayBestSalesProducts from "@/components/TodayBestSaleProduct";
import TodaysDeals from "@/components/TodaysDeals";
import Footer from "@/components/sections/Footer";
import Topbar from "@/components/sections/Topbar";

export default function ProductDetailsPage() {
  return (
    <>
      <Topbar />
      <Appnav />
      <Menubar />
      <div className="hidden lg:block">
        <StickyMenu />
      </div>
      <div className="py-5 bg-brand/5 text-xl font-bold text-center">
        Product Details
      </div>
      {/* main content */}
      <div className="w-full max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 border-[1px] border-gray-300">
            <div className="w-full">
              {/* todays deals card */}
              <TodaysDeals />

              <hr className="m-3" />

              {/* related products */}
              {/* <div className="__related_products px-10 py-2">
                <div className="grid grid-cols-12 gap-3">
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                  <RelatedTodayProduct />
                </div>
              </div> */}

              {/* datails */}
              <div className="p-10">
                <h3 className="text-lg font-bold underline mb-5">Description</h3>
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here,
                content here, making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for lorem ipsum will
                uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
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

        {/* related products */}
        <div className="py-14">
        <div className="w-full max-w-6xl mx-auto">
          <div className="border-[1px] border-gray-300 bg-white">
            <div className="__heading ml-2 bg-brand text-white text-md font-semibold uppercase py-2 px-8 w-fit rounded-b-lg">
              Related Products
            </div>

            <div className="__products w-full p-5">
              <div className="grid grid-cols-12">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
