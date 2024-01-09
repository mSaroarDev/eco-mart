import prisma from "@/lib/db";
import CategoryList from "./CategorieList";

export default async function CategoryListAll() {
  // categories
  const categories = await prisma.categories.findMany({
    orderBy: {
      id: "desc",
    },
    take: 11,
  });

  return (
    <>
      <div className="bg-white w-full max-w-[240px] shadow-md h-fit hidden lg:block">
        <ul className="w-full">
          {categories &&
            categories.map((category) => {
              return (
                <li key={category?.serial}>
                  <CategoryList data={category} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
