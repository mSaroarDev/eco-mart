import NewCategoryButton from "@/components/NewCategoryButton";
import Paggination from "@/components/Paggination";
import CategoryCard from "@/components/saler/CategoryCard";
import CustomerCard from "@/components/saler/Customers";
import prisma from "@/lib/db";

export default async function CategoriesPage({ searchParams }) {
  // grab page no
  const page = searchParams.page;

  // data
  const categories = await prisma.categories.findMany({
    skip: (page - 1) * 10,
    take: 10,
    orderBy: {
      serial: "desc",
    },
  });

  // category count
  const totalCategories = await prisma.categories.count();

  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-5">
          <div>
            <h1 className="text-lg font-bold text-black">Categories</h1>
            <p className="text-gray-600 text-sm">
              Active categories of your store
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <NewCategoryButton />
            </div>
          </div>
        </div>

        {/* orders */}
        <div className="__orders">
          <div className="flex flex-col gap-3">
            {categories &&
              categories.map((category) => {
                return <CategoryCard key={category.serial} data={category} />;
              })}
          </div>
        </div>
        <div className="p-5 border-t-[1px] border-gray-300 flex items-center justify-end">
          <Paggination count={totalCategories} nextLink={"/users/categories"} />
        </div>
      </div>
    </>
  );
}
