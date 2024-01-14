"use client";
import { useFormik } from "formik";
import Spinner from "./spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export default function NewCategoryPopup({ action }) {
  // toast
  const showError = (m) => toast.error(m);
  const showSuccess = (m) => toast.success(m);

  // router
  const router = useRouter();

  // loading
  const [loading, setLoading] = useState(false);

  //   // useEffect
  //   useEffect(() => {
  //     setPublicId(profileData.image_public_id);
  //     setImgUrl(profileData.profile_image);
  //   }, [profileData]);

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
      formik.setFieldValue("category_image", imgUrl);
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
        formik.setFieldValue("category_image", "");
        formik.setFieldValue("image_public_id", "");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  //  formik
  const formik = useFormik({
    initialValues: {
      category_name: "",
      category_image: "",
      image_public_id: "",
    },

    onSubmit: async (values) => {
      if (
        !values.category_name ||
        !values.category_image ||
        !values.image_public_id
      ) {
        showError("All fields required");
      } else {
        setLoading(true);
        const res = await fetch("/api/category/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        setLoading(false);
        if (res.status === 201) {
          showSuccess("Category Created.");
          router.refresh();
          setTimeout(() => {
            action();
          }, 1500);
        } else {
          showError("Internal Server Error");
        }
      }
    },
  });

  return (
    <>
      <Toaster />
      <div className="popup-overlay">
        <div className="h-screen w-full flex items-center justify-center">
          <div className="popup-box w-[600px]">
            {loading && <Spinner />}
            <form className="flex items-start justify-end p-2">
              <button
                onClick={action}
                className="bg-red-500 text-white p-2 rounded-full"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
            <div className="w-full">
              {/* main content */}
              <div className="p-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4">
                    <div className="__image w-28 h-28 relative">
                      <Image
                        src={imgUrl ? imgUrl : "/no-image.avif"}
                        fill
                        className="absolute inset-0 object-cover z-10"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="col-span-8">
                    {/* upload button */}
                    <CldUploadButton
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                      }
                      options={{
                        sources: ["local", "google_drive"],
                      }}
                      onUpload={handleImageUpload}
                    >
                      <span
                        className={`flex items-center gap-2 text-sm text-green-600 mt-4 underline w-fit h-fit ${
                          imgUrl && "hidden"
                        }`}
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
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                          />
                        </svg>
                        <span>Upload</span>
                      </span>
                    </CldUploadButton>

                    {/* delete button */}
                    {imgUrl && (
                      <button
                        onClick={removeImage}
                        className="flex items-center gap-2 text-sm text-red-500 mt-4 underline"
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
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>

                        <span>Change</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-full mt-5">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="grid grid-cols-12 gap-5"
                  >
                    <div className="col-span-12 mt-4">
                      <div className="w-full flex flex-col login">
                        <label htmlFor="name">Category Name</label>
                        <input
                          type="text"
                          id="category_name"
                          name="category_name"
                          value={formik.values.category_name}
                          onChange={formik.handleChange}
                          className="login-input"
                        />
                      </div>
                    </div>

                    <div className="col-span-6">
                      <div className="w-full flex flex-col login">
                        <button
                          type="submit"
                          className="bg-brand px-4 py-2 rounded-md text-white"
                        >
                          Create Category
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
