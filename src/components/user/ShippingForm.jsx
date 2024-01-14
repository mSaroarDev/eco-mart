"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../spinner/Spinner";

export default function ShippingForm({data, tid}) {
  // loading
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  // toast
  const showSucces = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // data
  const formik = useFormik({
    initialValues: {
      customerName: data?.name,
      email: data?.email,
      phone: "",
      postCode: "",
      address: "",
      city: "",
      state: "",
    },
    onSubmit: async (values) => {
      if (
        !values.phone ||
        !values.postCode ||
        !values.address ||
        !values.city ||
        !values.state
      ) {
        showError("All fields required");
      } else {
        setLoading(true);
        const res = await fetch(`/api/shipping/create?tid=${tid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        setLoading(false);
        if (!res.ok) {
          showError("Failed to place order");
        } else if (res.ok) {
          showSucces("Order in Quee...");
          router.refresh();
          router.push(`/payment?transaction_id=${tid}&token=jglkaoikladskfk30ugaklg14gajfd`)
        }
      }
    },
  });

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-5 login">
          <div className="col-span-12">
            <h2 className="text-2xl font-bold text-black">Add Shipping Info</h2>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="CustomerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formik.values.customerName}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: John Doe"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="CustomerEmail">Customer Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="login-input w-full text-gray-500 pointer-events-none"
              placeholder="eg: example@mail.com"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="PhoneNo">Phone No</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: +1234567890"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="Postcode">Post Code</label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              value={formik.values.postCode}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: 62105"
            />
          </div>

          <div className="col-span-12">
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: New York, United States"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="City">City/Town</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: New York"
            />
          </div>

          <div className="col-span-12 lg:col-span-6">
            <label htmlFor="State">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              className="login-input w-full"
              placeholder="eg: United States"
            />
          </div>

          <div className="col-span-12">
            <button
              type="submit"
              className="bg-brand text-white py-2 w-full rounded-md"
            >
              Save Address & Deliver Here
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
