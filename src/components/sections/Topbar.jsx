"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Topbar() {

    // session
    const session = useSession();

  return (
    <>
      <div className="bg-gray-100 px-5 py-2 hidden lg:block">
        <div className="w-full px-10 flex items-center justify-between">
          <div>
            <h1 className="text-gray-600 font-openSans">
              Get <strong className="text-black">20% of Discount</strong> in all
              products.
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 items-center font-bebas">
              {session ? <li>
                <Link
                  className="flex items-center gap-1 hover:underline text-black"
                  href={"/logged"}
                >
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <span className="text-gray-500">My Profile</span>
                </Link>
              </li> : <li>
                <Link
                  className="flex items-center gap-1 hover:underline text-black"
                  href={"/sign-in"}
                >
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <span className="text-gray-500">Sign In</span>
                </Link>
              </li> } {" "}
              
              |
              <li className="flex items-center gap-1 hover:underline">
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +123 456 789
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
