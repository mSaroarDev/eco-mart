"use client";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Spinner from "./spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";

export default function NewProductForm({ categories }) {

  // loading
  const [loading, setLoading] = useState(false);

  // router 
  const router = useRouter();

  // toast
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // cloudinary image
  const [imgUrl, setImgUrl] = useState();
  const [publicId, setPublicId] = useState();

  const handleImageUpload = function (result) {
    const info = result?.info;

    if ("secure_url" in info && "public_id" in info) {
      const public_id = info.public_id;
      const imgUrl = info.secure_url;
      setPublicId(public_id);
      setImgUrl(imgUrl);
      formik.setFieldValue("product_image", imgUrl);
      formik.setFieldValue("image_public_id", public_id);
    }
  };

  // remove image
  const removeImage = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/remove-image?p_id=" + publicId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        setLoading(false);
        showError("Image Delete Failed");
      } else if (res.ok) {
        setLoading(false);
        showSuccess("Image deleted");
        setImgUrl("");
        setPublicId("");
        formik.setFieldValue("product_image", "");
        formik.setFieldValue("image_public_id", "");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  // description value
  const [description, setDescription] = useState("");

  // formik
  const formik = useFormik({
    initialValues: {
      product_name: "",
      ratings: "",
      short_des: "",
      regular_price: "",
      price: "",
      discount: "",
      description: "",
      product_image: "",
      image_public_id: "",
      category_id: "",
      category_name: "",
      availability: "",
      status: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const {product_name,
        ratings,
        short_des,
        regular_price,
        price,
        discount,
        description,
        product_image,
        image_public_id,
        category_id,
        availability,
        status} = values;

      if(!product_name || !ratings || !short_des || !price || !description || !product_image || !image_public_id || !category_id || !availability || !status){
        showError("All fields required.")
      } else {
        setLoading(true);
        const res = await fetch("/api/product/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })

        setLoading(false);
        if(res.status === 201){
          showSuccess("New product added.");
          router.refresh();
          setTimeout(() => {
            router.push("/saler/products?page=1")
          }, 1500);
        }else{
          showError("Failed to add product.")
        }
      }
      console.log(values);
    },
  });

  return (
    <>
    {loading && <Spinner />}
    <Toaster />
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 login w-full">
            <label htmlFor="product_name">
              Product Name <span className="text-xs text-red-500">*</span>
            </label>{" "}
            <br />
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={formik.values.product_name}
              onChange={formik.handleChange}
              className="login-input w-full"
            />
          </div>

          <div className="col-span-3 login w-full">
            <label htmlFor="product_name">Regular Price</label> <br />
            <input
              type="text"
              id="regular_price"
              name="regular_price"
              value={formik.values.regular_price}
              onChange={formik.handleChange}
              className="login-input w-full"
            />
          </div>

          <div className="col-span-3 login w-full">
            <label htmlFor="product_name">
              Offer Price <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <input
              type="text"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="login-input w-full"
            />
          </div>

          <div className="col-span-3 login w-full">
            <label htmlFor="product_name">Discount (%) <span className="text-xs text-red-500"> *</span></label> <br />
            <input
              type="text"
              id="discount"
              name="discount"
              value={formik.values.discount}
              onChange={formik.handleChange}
              className="login-input w-full"
            />
          </div>

          <div className="col-span-3 login w-full">
            <label htmlFor="product_name">
              Ratings <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <select
              id="ratings"
              name="ratings"
              value={formik.values.ratings}
              onChange={formik.handleChange}
              className="login-input w-full"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-span-12 login w-full">
            <label htmlFor="product_name">
              Short Description <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <textarea
              type="text"
              id="short_des"
              name="short_des"
              onChange={formik.handleChange}
              value={formik.values.short_des}
              className="login-input w-full resize-none">
            </textarea>
          </div>

          <div className="col-span-12 login w-full">
            <label htmlFor="product_name">
              Product Description{" "}
              <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <ReactQuill
              theme="snow"
              value={description}
              onChange={(value) => {
                setDescription(value);
                formik.setFieldValue("description", value); // Update Formik value
              }}
              className="h-40 rounded-md"
            />
          </div>

          <div className="col-span-4 login w-full mt-12">
            <label htmlFor="product_name">
              Category <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <select
              id="category_id"
              name="category_id"
              value={formik.values.category_id}
              onChange={formik.handleChange}
              className="login-input w-full"
            >
              <option value="">Select</option>
              {categories &&
                categories.map((category) => {
                  return (
                    <option key={category.serial} value={category?.id}>
                      {category?.category_name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="col-span-4 login w-full mt-12">
            <label htmlFor="product_name">
              Availability <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <select
              id="availability"
              name="availability"
              value={formik.values.availability}
              onChange={formik.handleChange}
              className="login-input w-full"
            >
              <option value="">Select</option>

              <option value="In Stock">In Stock</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Stock Out">Stock Out</option>
            </select>
          </div>

          <div className="col-span-4 login w-full mt-12">
            <label htmlFor="product_name">
              Status <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <select
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              className="login-input w-full"
            >
              <option value="">Select</option>
              <option value="Draft">Draft</option>
              <option value="Trashed">Trashed</option>
              <option value="Published">Published</option>
              <option value="Archive">Archive</option>
            </select>
          </div>

          <div className="col-span-12">
            <label
              className="text-gray-700 font-semibold mb-3 mt-5 inline-block"
              htmlFor="product_name"
            >
              Product Image <span className="text-xs text-red-500"> *</span>
            </label>{" "}
            <br />
            <CldUploadButton
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              options={{
                sources: ["local", "google_drive"],
              }}
              onUpload={handleImageUpload}
              className={`w-full h-52 flex items-center justify-center border-[1px] border-slate-100 bg-slate-50 rounded-md relative z-10 ${
                imgUrl ? "pointer-events-none" : ""
              }`}
            >
              {imgUrl ? (
                <Image
                  src={imgUrl}
                  fill
                  alt="image"
                  className="absolute inset-0 object-contain rounded-md z-10"
                />
              ) : (
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
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              )}
            </CldUploadButton>
          </div>
          <div className="col-span-12">
            {imgUrl && (
              <button
                onClick={removeImage}
                className="bg-red-500 text-white rounded-md p-2 z-30"
              >
                Remove Image
              </button>
            )}
          </div>

          <div className="col-span-12 login w-full mt-5">
            <button
              type="submit"
              className="bg-brand p-2 w-full rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
