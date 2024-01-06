"use client";
import { useEffect, useState } from "react";
import HomeSearch from "./SearchHome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartButton from "./CartButton";
import Logo from "./Logo";

export default function StickyMenu() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const path = usePathname();

  return (
    <>
      <div className={`w-full fixed top-0 ${isActive ? "menu-active z-40" : "hidden-menu -z-10"}`}>
        {/* appnav */}
        <div className={`w-full px-10 bg-white`}>
          <nav className="flex items-center justify-between py-5 px-5">
            <div>
              <Logo />
            </div>
            <div>
              <ul className="flex items-center justify-end gap-4 uppercase font-openSans text-[14px] font-semibold">
                <li>
                  <Link
                    href={"/"}
                    className={`${path === "/" ? "text-brand" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={`${path === "/blogs" ? "text-brand" : ""}`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={`${path === "/about" ? "text-brand" : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={`${path === "/contact" ? "text-brand" : ""}`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={`${path === "/terms" ? "text-brand" : ""}`}
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* menubar */}
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
            <CartButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
