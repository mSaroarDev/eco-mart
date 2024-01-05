"use client";
import { useState } from "react";
import TodayBestSalesProducts from "./TodayBestSaleProduct";
import CartItem from "./CartItem";
import Link from "next/link";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3 relative">
        <button
          onClick={() => setShowCart(true)}
          className="w-fit h-fit bg-white text-black p-2 rounded-full cursor-pointer relative"
        >
          <span className="bg-black text-white text-sm w-6 h-6 rounded-full leading-6 text-center absolute -top-2 -right-2">
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>

        {/* cart */}
        {showCart && (
          <div className={`__cart ${showCart ? "show" : ""}`}>
            <div className="bg-white w-[400px] h-auto p-5 rounded-md shadow-md z-10">
              <div className="flex items-center justify-between">
                <h5 className="font-medium text-base text-gray-600">
                  My Shopping Cart
                </h5>
                <button
                  onClick={() => setShowCart(false)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md"
                >
                  Close
                </button>
              </div>
              <hr className="my-5" />

              {/* cart items */}
              <div className="flex flex-col">
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
              <hr className="my-5" />

              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-gray-600">
                  Subtotal:
                </p>
                <p className="text-base text-gray-600">x3 items</p>
                <p className="text-base text-gray-600">$100.00</p>
              </div>

              <Link
                href={"/cart"}
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
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
