"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Appnav(){
  const path = usePathname()


    return (
      <>
        <div className="w-full px-10 hidden lg:block bg-white z-50">
          <nav className="flex items-center justify-between py-5 px-5">
            <div>
              <Logo />
            </div>
            <div>
              <ul className="flex items-center justify-end gap-4 uppercase font-openSans text-[14px] font-semibold">
                <li>
                  <Link href={"/"} className={`${path === "/" ? "text-brand" : ""}`}>Home</Link>
                </li>
                <li>
                  <Link href={"/"} className={`${path === "/blogs" ? "text-brand" : ""}`}>Blogs</Link>
                </li>
                <li>
                  <Link href={"/"} className={`${path === "/about" ? "text-brand" : ""}`}>About</Link>
                </li>
                <li>
                  <Link href={"/"} className={`${path === "/contact" ? "text-brand" : ""}`}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/"} className={`${path === "/terms" ? "text-brand" : ""}`}>Terms</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    )
}