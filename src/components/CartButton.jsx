"use client";
import { useEffect, useState } from "react";
import TodayBestSalesProducts from "./TodayBestSaleProduct";
import CartItem from "./CartItem";
import Link from "next/link";
import { getCartItems } from "@/utils/getCartItems";
import { useRouter } from "next/navigation";
import priceFixed from "@/utils/priceFixed";
import { removeCart } from "@/utils/removeCart";
import toast from "react-hot-toast";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [batchItemCount, setBatchItemCount] = useState(0);

  // prev cart


  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false)

  // data
  const [items, setItems] = useState();

  // total price
  const [totalPrice, setTotalPrice] = useState(0)

  // data fetch
  const fetchCartItems = () => {
    getCartItems()
      .then((data) => {
        setItems(data);
        setCartItemCount(data.length);
        setBatchItemCount(data.length);

        const totalPrice = data.reduce((total, currentValue) => {
          const itemTotal = parseInt(currentValue.total_price) || 0;
          return total + itemTotal;
        }, 0);

        setTotalPrice(totalPrice)
      })
      .catch((err) => console.log(err));
  };

  // refresh
  const router = useRouter()
  useEffect(() => {
    fetchCartItems();
  }, [showCart]);

  // remove cart
  const removeItem = (cartId) => {
    setLoading(true);
    removeCart(cartId)
      .then((data) => {
        setLoading(false);
        showSuccess("Product removed from cart.");
        router.refresh();
      })
      .catch((err) => {
        setLoading(false);
        showError("Product remove failed.");
      });

      fetchCartItems()
  };

  return (
    <>
      <div className="flex items-center gap-3 relative">
        <button
          onClick={() => setShowCart(true)}
          className="w-fit h-fit bg-white text-black p-2 rounded-full cursor-pointer relative"
        >
          <span className="bg-black text-white text-sm w-6 h-6 rounded-full leading-6 text-center absolute -top-2 -right-2">
            {batchItemCount}
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
                {items == undefined ? <p>Loading...</p> : items.map((item)=> {
                  return <CartItem key={item.serial} data={item} removeAction={() => removeItem(item?.id)} />
                })}
              </div>
              <hr className="my-5" />

              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-gray-600">
                  Subtotal:
                </p>
                <p className="text-base text-gray-600">x{cartItemCount} items</p>
                <p className="text-base text-gray-600">{priceFixed(totalPrice)}</p>
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
