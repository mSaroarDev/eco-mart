import NewProductForm from "@/components/NewProductForm";
import prisma from "@/lib/db";

export default async function NewProductPage() {

    // categories
    const categories = await prisma.categories.findMany();

  return (
    <>
      <div className="p-10">
        <h1 className="text-lg font-bold text-black">New Product</h1>
        <p className="text-gray-600 text-sm">
          Add new products to increase your sells
        </p>
      </div>

      <div className="px-10">
        <NewProductForm categories={categories} />
      </div>
    </>
  );
}
