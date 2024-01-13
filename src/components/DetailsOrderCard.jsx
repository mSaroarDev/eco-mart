import prisma from "@/lib/db";
import Image from "next/image";

export default async function MyOrderItemList({ data }) {

  console.log(data);

  // product fetch
  const productInfo = await prisma.products.findUnique({
    where: {
      id: data?.product_id
    }
  })


  return (
    <>
        <div className="__items__list flex items-center gap-3 border-b-[1px] border-gray-300 py-3">
          <div className="w-3/6">
            <div className="w-full flex items-center gap-3">
              <Image
                src={productInfo?.product_image}
                height={80}
                width={80}
                alt={productInfo?.product_name}
              />
              <div>
                <p className="text-gray-800 font-medium">
                {productInfo?.product_name}
                </p>

                
              </div>
            </div>
          </div>
          <div className="w-1/6">${parseInt(productInfo?.price).toFixed(2)}</div>
          <div className="w-1/6 flex items-center gap-2">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <div className="w-fit h-fit flex items-center gap-1">
              
              <span>{data?.quantity}</span>
              
            </div>
          </div>
          <div className="w-1/6 text-right pr-7">
            ${parseInt(data?.total_price).toFixed(2)}
          </div>
        </div>
    </>
  );
}
