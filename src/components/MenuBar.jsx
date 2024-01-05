"use client";
import { useState } from "react";
import CategoryList from "./CategorieList";
import CategoryListAll from "./CategoryList";
import CategoryListAllMobile from "./MobileCategories";
import HomeSearch from "./SearchHome";

export default function Menubar() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="bg-brand font-openSans hidden lg:block">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="bg-[#292929] text-white py-5 px-2 flex items-center justify-between w-[320px]">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>

                <span>All Categories</span>
              </div>
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
                  d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
            <div className="w-full px-10">
              <HomeSearch />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-fit h-fit bg-white text-black p-2 rounded-full cursor-pointer relative">
                <div className="bg-black text-white text-sm w-6 h-6 rounded-full leading-6 text-center absolute -top-2 -right-2">
                  0
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="block lg:hidden">
        <div className="bg-gray-200 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={()=> setShowMobileMenu(true)} className="bg-brand w-10 h-10 rounded-md text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-semibold font-bebas text-brand">
                Echo Shop
              </h2>
            </div>

            <div className="w-fit h-fit bg-white text-black p-2 rounded-full cursor-pointer relative">
              <div className="bg-black text-white text-sm w-6 h-6 rounded-full leading-6 text-center absolute -top-2 -right-2">
                0
              </div>
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
            </div>
          </div>
        </div>

        {/* mobile search */}
        <div className="bg-white p-2">
          <HomeSearch />
        </div>

        {/* mobile category menu */}
        {showMobileMenu && <div className="absolute top-1 right-1 bottom-1 left-10 rounded-md overflow-hidden z-50 duration-300">
          <div className="bg-white flex items-center justify-between  p-5">
            <h3 className="font-semibold text-lg">Main Menu</h3>
            <button onClick={()=> setShowMobileMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <CategoryListAllMobile />
        </div>}
      </div>
    </>
  );
}
