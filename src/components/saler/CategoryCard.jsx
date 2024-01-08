import prisma from "@/lib/db";
import formatDate from "@/lib/formatted-date";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryCard({data}) {

  // total products
  const totalProducts = await prisma.products.count({
    where: {
      category_id: data?.id
    }
  })

  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <div className="w-24 h-24 relative">
              <Image
                src={data?.category_image}
                fill
                alt="Bag"
                className="absolute inset-0 object-cover rounded-full ring-2 ring-brand z-10"
              />
            </div>
            <div>
              <h2 className="font-semibold text-black">
                <Link href={`/products?category=${data?.category_name}&category_id=${data?.id}`} className="hover:underline">
                  {data?.category_name}
                </Link>
              </h2>
              <p className="text-brand text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                  />
                </svg>

                <span className="font-bold">{totalProducts} Products</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Created By</p>
          <p className="text-brand text-sm font-bold mb-2">{data?.created_by}</p>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Created at</p>
          <p className="text-brand text-sm font-bold mb-2">
            {formatDate(data?.createdAt)}
          </p>
          
          <div className="flex items-center gap-3 mt-3">
            <button className="text-black text-sm font-bold underline">Edit</button>
            <button className="text-black text-sm font-bold underline">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
