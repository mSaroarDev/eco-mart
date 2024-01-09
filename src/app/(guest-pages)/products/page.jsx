import Appnav from "@/components/Appnav";
import Menubar from "@/components/MenuBar";
import ProductCard from "@/components/ProductCard";
import StickyMenu from "@/components/StickyMenu";
import Footer from "@/components/sections/Footer";
import Topbar from "@/components/sections/Topbar";
import prisma from "@/lib/db";

export default async function ProductsByCategoryPage({ searchParams }) {
  // products fetch
  const products = await prisma.products.findMany({
    where: {
      category_id: searchParams.category_id,
    },
    orderBy: {
      serial: "desc",
    },
    take: 12,
  });

  return (
    <>
      <Topbar />
      <Appnav />
      <Menubar />
      <div className="hidden lg:block">
        <StickyMenu />
      </div>

      <div className="py-14">
        <div className="w-full max-w-6xl mx-auto px-5">
          <div className="border-[1px] border-gray-300 bg-white">
            <div className="__heading ml-2 bg-brand text-white text-md font-semibold uppercase py-2 px-8 w-fit rounded-b-lg">
              Products in {`${searchParams.category}`}
            </div>

            <div className="__products w-full p-5">
              <div className="grid grid-cols-12">
                {products &&
                  products.map((product) => {
                    return <ProductCard key={product.serial} data={product} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
