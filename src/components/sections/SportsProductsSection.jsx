import prisma from "@/lib/db";
import ProductCard from "../ProductCard";

export default async function SportsProductsSection() {

  // products fetch
  const products = await prisma.products.findMany({
    where: {
      category_name: {
        contains: "Sport"
      }
    },
    orderBy: {
      serial: "desc"
    },
    take: 8
  })


  return (
    <>
      <div className="py-14">
        <div className="w-full max-w-6xl mx-auto px-5">
          <div className="border-[1px] border-gray-300 bg-white">
            <div className="__heading ml-2 bg-brand text-white text-md font-semibold uppercase py-2 px-8 w-fit rounded-b-lg">
              Sports Products
            </div>

            <div className="__products w-full p-5">
              <div className="grid grid-cols-12">
              {products && products.map((product)=> {
                  return <ProductCard key={product.serial} data={product} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
