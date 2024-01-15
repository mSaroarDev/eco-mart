"use client";
import { createCart } from "@/utils/createCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./spinner/Spinner";
import { useSession } from "next-auth/react";

export default function AllAddtoCart({ data }) {
  // session
  const session = useSession();

  // route
  const router = useRouter();

  // variable
  const productId = data?.id;
  const price = data?.price;

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false);

  // product Id
  // const productId = productId;
  const qty = 1;

  const addToCart = () => {
    if (!session) {
      alert("You are not logged in.");
    } else {
      setLoading(true);
      createCart(productId, qty, price)
        .then((data) => {
          setLoading(false);
          showSuccess("Product added to cart.");
          router.refresh();
        })
        .catch((err) => {
          setLoading(false);
          showError("Please sign in to buy product.");
          router.push("/sign-in");
        });
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <Toaster />
      <button
        onClick={addToCart}
        className="my-3 py-1 px-5 bg-brand text-white border-[1px] border-brand rounded-full flex items-center justify-center hover:bg-white hover:text-brand duration-150"
        title="Add to cart"
      >
        Add to Cart
      </button>
    </>
  );
}
