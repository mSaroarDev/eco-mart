"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./spinner/Spinner";

export default function OrderStatusChangeButton({ data }) {
  // loading
  const [loading, setLoading] = useState(false);

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // router
  const router = useRouter();

  // formik
  const formik = useFormik({
    initialValues: {
      status: data?.status,
    },
    onSubmit: async (values) => {
      setLoading(true);
      const res = await fetch(`/api/order/statusChange?order_id=${data?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      setLoading(false);
      if (!res.ok) {
        showError("Order status changing error");
      } else if (res.ok) {
        showSuccess("Order status changed");
        router.refresh();
      }
    },
  });
  return (
    <>
      {loading && <Spinner />}
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center gap-3 login"
      >
        <label htmlFor="change" className="mt-2">
          Current Status
        </label>
        <select
          id="status"
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          className="login-input appearance-none"
        >
          <option value="">Select</option>
          <option value="Order Placed">Order Placed</option>
          <option value="Order Recieved">Order Recieved</option>
          <option value="Order Processing">Order Processing</option>
          <option value="On The Way">On The Way</option>
          <option value="Delivered">Delivered</option>
          <option value="Canceled">Cancel Order</option>
        </select>
        <button
          type="submit"
          className="bg-brand text-white px-3 py-2 rounded-md"
        >
          Update
        </button>
      </form>
    </>
  );
}
