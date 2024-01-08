"use client";
import { useState } from "react";
import ProfileEditPopup from "./ProfileEditPopup";
import Spinner from "./spinner/Spinner";
import NewCategoryPopup from "./NewCategoryForm";

export default function NewCategoryButton() {
  // popup
  const [open, setOpen] = useState(false);

  const closeAction = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <NewCategoryPopup action={closeAction} />
      )}

      <button onClick={()=> setOpen(true)} className="bg-brand text-white px-4 py-2 rounded-full flex items-center justify-center gap-2">
        <span className="text-white">
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
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </span>
        <span className="text-sm uppercase">Add New Category</span>
      </button>
    </>
  );
}
