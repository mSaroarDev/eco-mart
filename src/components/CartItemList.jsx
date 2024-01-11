"use client";
import { getProductDetails } from "@/utils/getProductDetails";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { removeCart } from "@/utils/removeCart";
import { useFormik } from "formik";
import { increaseQty } from "@/utils/increaseQty";

export default function CartItemList({ data }) {
  // product id
  const cartId = data?.id;

  // useEffect
  useEffect(()=> {
    setCount(parseInt(data?.quantity))
  }, [])

  // route
  const router = useRouter();

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false);

  // state
  const [product, setProduct] = useState();

  // quantity
  const [count, setCount] = useState("1");

  // useEffect
  useEffect(() => {
    getProductDetails(data?.product_id)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [data?.product_id]);

  // remove
  const removeItem = () => {
    setLoading(true);
    removeCart(cartId)
      .then((data) => {
        setLoading(false);
        showSuccess("Product removed from cart.");
        router.refresh();
        console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        showError("Product remove failed.");
      });
  };

  // product increase
  const IncreaseProduct = async () => {
    setCount(parseInt(count) + parseInt(1));
      const res = await fetch(`/api/cart/increaseQty?cid=${cartId}&pid=${data?.product_id}&qty=${parseInt(count) + 1}`, {
        method: "POST"
      });

      if(!res.status == 200){
        showError("Something error")
      }else if(res.status === 200){
        router.refresh()
      }
  };

  // product decrease
  const DecreaseProduct = async () => {
    setCount(parseInt(count) - parseInt(1));
      const res = await fetch(`/api/cart/decreaseQty?cid=${cartId}&pid=${data?.product_id}&qty=${parseInt(count) - 1}`, {
        method: "POST"
      });

      if(!res.status == 200){
        showError("Something error")
      }else if(res.status === 200){
        router.refresh()
      }
  };

  return (
    <>
      <Toaster />
      {loading && <Spinner />}
      {product == undefined ? (
        <Spinner />
      ) : (
        <div className="__items__list flex items-center gap-3 border-b-[1px] border-gray-300 py-3">
          <div className="w-3/6">
            <div className="w-full flex items-center gap-3">
              <Image
                src={product?.product_image}
                height={100}
                width={100}
                alt="Bag"
              />
              <div>
                <p className="text-gray-800 font-medium">
                  {product?.product_name}
                </p>

                <button
                  onClick={removeItem}
                  className="bg-red-500 px-2 text-white rounded-md mt-2 text-xs"
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/6">${product?.price}.00</div>
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
              <button
              onClick={DecreaseProduct}
                className={`bg-brand text-white w-5 h-6 grid place-items-center ${
                  count === parseInt(1) && "pointer-events-none"
                }`}
              >
                -
              </button>
              <input
                type="text"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="max-w-[50px] border-[1px] border-gray-300 focus:outline-0 text-center pointer-events-none"
              />
              <button
                onClick={IncreaseProduct}
                className="bg-brand text-white w-5 h-6 grid place-items-center"
              >
                +
              </button>
            </div>
          </div>
          <div className="w-1/6 text-right pr-7">
            ${parseInt(product?.price) * parseInt(count)}.00
          </div>
        </div>
      )}
    </>
  );
}
