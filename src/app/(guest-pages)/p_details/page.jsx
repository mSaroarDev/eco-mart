import Appnav from "@/components/Appnav";
import Menubar from "@/components/MenuBar";
import ProductCard from "@/components/ProductCard";
import StickyMenu from "@/components/StickyMenu";
import TodayBestSalesProducts from "@/components/TodayBestSaleProduct";
import TodaysDeals from "@/components/TodaysDeals";
import Footer from "@/components/sections/Footer";
import Topbar from "@/components/sections/Topbar";
import prisma from "@/lib/db";

export default async function ProductDetailsPage({ searchParams }) {

  // grab the id
  const product_id = searchParams.p_id;

  // product data fetch
  const productDetails = await prisma.products.findUnique({
    where: {
      id: product_id,
    },
  });

  // products fetch
  const recentProducts = await prisma.products.findMany({
    where: {
      category_id: productDetails?.category_id
    },
    take: 4,
    orderBy: {
      serial: "desc"
    }
  })

  // related product
  const relatedProducts = await prisma.products.findMany({
    orderBy: {
      serial: "desc"
    }
  });
  const productsToShow = relatedProducts.slice(0, 8)

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
              <TodaysDeals data={productDetails} />

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
                <h3 className="text-lg font-bold underline mb-5">
                  Description
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: productDetails?.description,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 border-[1px] border-gray-300 bg-white h-fit">
            <div className="bg-gray-200 p-3 text-left uppercase text-base font-medium">
              Best Sales Today
            </div>

            {/* products */}
            <div className="flex flex-col gap-3">
              <div className="w-full p-4">
              {productsToShow && productsToShow.map((product)=> {
                  return <TodayBestSalesProducts key={product?.id} data={product} />
                })}
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
                  {recentProducts && recentProducts.map((product)=> {
                    return <ProductCard key={product?.serial} data={product} />
                  })}
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
