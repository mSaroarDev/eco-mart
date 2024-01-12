"use client";
import prisma from "@/lib/db";
import { getProductDetails } from "@/utils/getProductDetails";
import priceFixed from "@/utils/priceFixed";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./spinner/Spinner";
import { removeCart } from "@/utils/removeCart";

export default function CartItem({data, removeAction}) {
  // item
  const [item, setItem] = useState()

  // router
  const router = useRouter()

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false)

  // product fethc
  useEffect(()=> {
    getProductDetails(data?.product_id)
    .then(data=> setItem(data))
  }, [data])

  // remove
  const cartId = data?.id
  // const removeItem = () => {
  //   setLoading(true);
  //   removeCart(cartId)
  //     .then((data) => {
  //       setLoading(false);
  //       showSuccess("Product removed from cart.");
  //       router.refresh();
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       showError("Product remove failed.");
  //     });
  // };



  return (
    <>
      <div className="__product flex items-center justify-between gap-3">
        <div className="flex items-center justify-start gap-3">
          <div className="w-16 h-16 relative">
            <Image
              src={item?.product_image}
              fill
              alt="image"
              className="absolute inset-0 object-cover"
            />
          </div>
          <div className="p-2">
            
              <h2 className="font-medium hover:underline hover:text-brand">
                {item?.product_name}
              </h2>
          
            {/* <div className="text-brand flex gap-1 my-1">
              <Image src="/favorite.png" height={13} width={13} alt="start" />
              <Image src="/favorite.png" height={13} width={13} alt="start" />
              <Image src="/favorite.png" height={13} width={13} alt="start" />
              <Image src="/favorite.png" height={13} width={13} alt="start" />
              <Image src="/favorite.png" height={13} width={13} alt="start" />
            </div> */}
            <div className="flex items-center justify-start gap-3">
              <div className="text-brand font-medium text-sm">{priceFixed(item?.price)}</div>
              <div className="text-gray-400 line-through text-xs">{priceFixed(item?.regular_price)}</div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={removeAction} className="bg-red-500 h-fit w-fit text-white rounded-full p-1">
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
          </button>
        </div>
      </div>
    </>
  );
}
