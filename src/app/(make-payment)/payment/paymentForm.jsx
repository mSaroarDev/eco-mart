"use client";
import Spinner from "@/components/spinner/Spinner";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PaymentForm() {
  // params
  const params = useSearchParams();
  const trxId = params.get("transaction_id");

  // loading
  const [loading, setLoading] = useState(false);

  // router
  const router = useRouter();

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // formik
  const formik = useFormik({
    initialValues: {
      isPaid: false,
    },
    onSubmit: async (values) => {
      setLoading(true);

      // place order
      const res = await fetch(`/api/order/payment?order_id=${trxId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (res.ok) {
        // delete cart
        await fetch("/api/cart/remove-all", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        showSuccess("Order Placed Successfully.");
        router.push(`/payment-success?via=visa&transaction_number=${trxId}`);
      } else if (!res.ok) {
        showError("Payment Failed");
      }
    },
  });

  return (
    <>
    {loading && <Spinner />}
      <div className="h-screen w-full bg-black/10 flex items-center justify-center">
        <div className="bg-white w-[400px] h-auto shadow-lg p-10 rounded-md">
          <div className="flex items-center justify-center">
            <Image src="/visa-logo.png" width={80} height={50} alt="Visa" />
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-12 gap-4 login mt-10 uppercase text-sm"
          >
            <div className="col-span-8">
              <label htmlFor="card no">Card No</label> <br />
              <input type="text" className="login-input w-full" />
            </div>
            <div className="col-span-4">
              <label htmlFor="card no">CVC</label> <br />
              <input type="text" className="login-input w-full" />
            </div>
            <div className="col-span-12">
              <label htmlFor="card no">Cardholder Name</label> <br />
              <input type="text" className="login-input w-full" />
            </div>

            <div className="col-span-12 -mb-3">
              <label htmlFor="date">Expiration Date</label>
            </div>
            <div className="col-span-4">
              <select className="login-input w-full appearance-none">
                <option value="Date">Select Date</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>

            <div className="col-span-4">
              <select className="login-input w-full appearance-none">
                <option value="select">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="col-span-4">
              <input
                type="text"
                className="login-input w-full"
                placeholder="eg: 2018"
              />
            </div>

            <div className="col-span-12">
              <button
                type="submit"
                className="bg-[#005C9D] py-3 w-full uppercase text-white rounded-md mt-3 text-center"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}