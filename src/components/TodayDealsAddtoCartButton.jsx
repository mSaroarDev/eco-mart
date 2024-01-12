"use client";
import { createCart } from "@/utils/createCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./spinner/Spinner";

export default function TodayDealsAddtoCartButton({productId, price}){

  // route
  const router = useRouter()

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false);


  // product Id
  // const productId = productId;
  const qty = 1

  const addToCart = () => {
    setLoading(true);
    createCart(productId, qty, price)
    .then((data)=> {
      setLoading(false);
      showSuccess("Product added to cart.")
      router.refresh()
    })
    .catch(err => {
      setLoading(false);
      showSuccess("Product adding failed.")
    })
  }

    return (
      <>
      {loading && <Spinner />}
      <Toaster />
        <button onClick={addToCart} className="my-3 bg-brand text-white px-5 py-2">
            Add to Cart
          </button>
      </>
    )
}