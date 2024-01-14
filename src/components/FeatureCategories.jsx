import prisma from "@/lib/db";
import AddFeaturedCategoryButton from "./AddFeaturedCategoryButton";
import FetauredCategoriesCard from "./FeaturedCategoryCard";

export default async function FeaturedCategories() {
  // fetch data
  const cards = await prisma.featured_categories.findMany({
    take: 5,
    orderBy: {
        order: "asc"
    }
  });

  return (
    <>
      <div className="p-5">
        <h1 className="text-lg font-bold text-black">Featured Categories</h1>
        <p className="text-gray-600 text-sm">
          Featured Categories of your homepage
        </p>

        {/* button */}
        {cards.length < 5 && <AddFeaturedCategoryButton />}
        
        <div className="mt-5 bg-slate-50 border-[1px] border-dotted border-slate-100 p-5 rounded-md">
          <div className="flex items-center gap-5">
            {cards
              ? cards.map((card, i) => <FetauredCategoriesCard key={i} data={card} />)
              : "No featured categories"}
          </div>
        </div>
      </div>
    </>
  );
}
