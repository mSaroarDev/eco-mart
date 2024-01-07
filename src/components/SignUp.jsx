"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./spinner/Spinner";

export default function SignUp() {
  const [error, setError] = useState(false);

  // router
  const router = useRouter();

  // loading
  const [loading, setLoading] = useState(false);

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "",
      address: "",
      contact_no: "",
      profile_image: "",
      image_public_id: "",
    },

    onSubmit: async (values, { resetForm }) => {
      if (
        !values.name ||
        !values.email ||
        !values.password ||
        !values.password2 ||
        !values.role
      ) {
        setError(true);
        showError("All fields are required");
      } else if (values.password !== values.password2) {
        setError(true);
        showError("Password and Confirm Password did not match.");
      } else {
        try {
          setError(false);
          setLoading(true);
          const res = await fetch("/api/auth/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          setLoading(false);
          if (res.status === 201) {
            showSuccess("SignUp successfull.");
            resetForm();
            router.refresh();
            router.push("/sign-in");
          } else {
            showError("Registration Failed.");
          }
        } catch (error) {
          showError("Internal server error.");
        }
      }
    },
  });

  return (
    <>
      <Toaster />
      {loading && <Spinner />}
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="w-full max-w-[900px] bg-white p-10 rounded-lg shadow-md">
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
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-12 gap-5 login"
          >
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="John Doe"
                  className={`login-input ${
                    error ? "input-error" : "input-ok"
                  }`}
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="example@email.com"
                  className={`login-input ${
                    error ? "input-error" : "input-ok"
                  }`}
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="******"
                  className={`login-input ${
                    error ? "input-error" : "input-ok"
                  }`}
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={formik.values.password2}
                  onChange={formik.handleChange}
                  placeholder="******"
                  className={`login-input ${
                    error ? "input-error" : "input-ok"
                  }`}
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Account Type</label>
                <select
                  id="role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  className={`login-input appearance-none ${
                    error ? "input-error" : "input-ok"
                  }`}
                >
                  <option value="">Select</option>
                  <option value="Buyer">Buyer</option>
                </select>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6"></div>

            <div className="col-span-12 lg:col-span-6">
              <button
                type="submit"
                className="bg-brand rounded-md text-white w-full py-2"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-right underline my-2">
            <Link href={"/sign-in"}>Login existing account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
