import prisma from "@/lib/db";
import CategoryList from "../CategorieList";
import CategoryCard from "../CategoryCard";

export default async function FeturedCategoriesSection() {

  // categories
  const categories = await prisma.featured_categories.findMany({
    take: 5,
    orderBy: {
      order: "asc"
  }
  })
  return (
    <>
      <div className="bg-gray-100 py-14">
        <div className="w-full max-w-6xl mx-auto px-5">
          <div className="__heading relative">
            <h2 className="text-xl font-bold uppercase">Featured Categories</h2>
            <div className="w-[100px] h-[3px] mt-1 bg-brand"></div>
          </div>

          {/* category cards */}
          <div className="category__cards mt-7">
            <div className="flex flex-wrap items-center justify-between">
              {categories ? categories.map(category=> <CategoryCard key={category?.order} data={category} />) : "No Categories pinned. Pinn now from settings"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
