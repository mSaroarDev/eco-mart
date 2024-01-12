import EditProductForm from "@/components/EditProductForm";
import NewProductForm from "@/components/NewProductForm";
import prisma from "@/lib/db";

export default async function EditProductPage({searchParams}) {

  // product id
  const product_id = searchParams.p_id;
  
  // product data fetch
  const product = await prisma.products.findUnique({
    where: {
      id: product_id
    }
  })



  // categories
  const categories = await prisma.categories.findMany();

  return (
    <>
      <div className="p-10">
        <h1 className="text-lg font-bold text-black">Edit Product</h1>
        <p className="text-gray-600 text-sm">Edit this product</p>
      </div>

      <div className="px-10">
        <EditProductForm categories={categories} product={product} />
      </div>
    </>
  );
}
