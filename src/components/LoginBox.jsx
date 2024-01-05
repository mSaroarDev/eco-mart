"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginBox() {
  const [error, setError] = useState(false);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-[450px] bg-white p-10 rounded-lg shadow-md">
          <div className="mb-4 inline-block">
            <Link href={"/"} className="flex items-center gap-3">
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>

              <span>Back to Home</span>
            </Link>
          </div>
          <h3 className="my-3 text-lg font-semibold">Login Here to continue</h3>
          <form className="flex flex-col gap-5 login">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className={`login-input ${error ? "input-error" : "input-ok"}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                placeholder="******"
                className={`login-input ${error ? "input-error" : "input-ok"}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-brand rounded-md text-white w-full py-2"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-right underline my-2">
            <Link href={"/sign-up"}>Create new account</Link>
          </div>

          <div className="my-3 text-base text-center text-gray-500">OR</div>

          <button className="bg-slate-100 text-black py-2 w-full flex items-center justify-center gap-3 rounded-md">
            <Image src="/google.svg" height={20} width={20} alt="google" />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}
