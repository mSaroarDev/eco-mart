"use client"
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./spinner/Spinner";
import { useRouter } from "next/navigation";

export default function CheckOutButton(cartItems, totalPrice, grossPrice) {
  // loading
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  // toast
  const showError = (m) => toast.error(m);

  const formik = useFormik({
    initialValues: {
      isPaid: "false"
    },
    onSubmit: async (values) => {
      setLoading(true);
      const res = await fetch("/api/order/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setLoading(false);
      if (!res.ok) {
        showError("Failed");
      } else if (res.ok) {
        const data = await res.json()
        console.log(data?.data);
        router.push(`/payment?transaction=visa&transaction_id=${data?.data?.id}&token=haklonaeohkvnlad093489uafo982y38hvai3oa09u09ajaioy0gaj`);

      }
    },
  });


  return (
    <>
    {loading && <Spinner />}
      <form onSubmit={formik.handleSubmit} className="w-full">
        <button
          type="submit"
          className="w-full bg-brand text-white p-2 text-center flex items-center justify-center gap-3 mt-5"
        >
          <span>Checkout</span>
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
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
