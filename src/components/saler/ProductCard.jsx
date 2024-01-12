import formatDate from "@/lib/formatted-date";
import Image from "next/image";
import Link from "next/link";
import ProductDeleteButton from "../ProductDeleteButton";

export default function ProductCard({data}) {
  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <Image src={data?.product_image} height={100} width={100} alt="Bag" />
            <div>
              <h2 className="font-semibold text-black">
                <Link href={`/p_details?p_=${data?.product_name}&p_id=${data?.id}`} className="hover:underline">
                  {data?.product_name}
                </Link>
              </h2>
              <p className="text-brand text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span className="font-bold">${data?.price}</span>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <ProductDeleteButton data={data} />

                <Link href={`/saler/products/edit?p_=${data?.product_name}&p_id=${data?.id}`} className="flex items-center gap-1 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <span className="text-sm">Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Status</p>
          <p className="text-brand text-sm font-bold mb-2">{data?.status}</p>
          <p className="text-gray-500 text-xs">Category</p>
          <p className="text-brand text-sm font-bold">{data?.category_name}</p>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Published at</p>
          <p className="text-brand text-sm font-bold mb-2">
            {formatDate(data?.createdAt)}
          </p>
          <p className="text-gray-500 text-xs">Availability</p>
          <p className="text-brand text-sm font-bold mb-2">{data?.availability}</p>
        </div>
      </div>
    </>
  );
}
