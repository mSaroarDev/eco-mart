"use client";
import Spinner from "@/components/spinner/Spinner";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function TodayDealsProductChage() {
  // router
  const router = useRouter();

  // loading
  const [loading, setLoading] = useState(false);

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // today deals formik
  const toadayDealsForm = useFormik({
    initialValues: {
      product_id: ""
    },

    onSubmit: async (values) => {
      if(!values.product_id){
        showError("Please input a valid product id")
      }else{
        setLoading(true)
        const res = await fetch("/api/product/today-deals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })

        setLoading(false)
        if(res.status === 201) {
          showSuccess("Product pinned successfully");
          router.refresh();
        }else{
          showError("Product pin failed.")
        }
      }
    }
  })

  return (
    <>
    <Toaster />
      {loading && <Spinner />}
      <div className="p-5">
        <div>
          <h1 className="text-lg font-bold text-black">Settings</h1>
          <p className="text-gray-600 text-sm">
            Make little changes of your website
          </p>
        </div>

        <div className="w-full mt-10">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-6 p-5 rounded-lg bg-slate-50 border-[1px] border-slate-100 shadow-sm">
              <h1 className="my-3 font-bold text-black">
                Set Today Deals Product
              </h1>

              {/* today deals form */}
              <form onSubmit={toadayDealsForm.handleSubmit} className="flex items-center gap-3 login">
                <input
                  type="text"
                  id="product_id"
                  name="product_id"
                  value={toadayDealsForm.values.product_id}
                  onChange={toadayDealsForm.handleChange}
                  className="login-input flex-1 bg-white"
                  placeholder="Enter product id"
                />
                <button type="submit" className="bg-brand py-2 px-5 rounded-md text-white">
                  Set
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
