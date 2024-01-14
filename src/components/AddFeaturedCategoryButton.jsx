"use client";
import { useState } from "react";
import FeaturedCategoryPopup from "./FeaturedCategoryForm";

export default function AddFeaturedCategoryButton() {

    // popup
  const [open, setOpen] = useState(false);

  const closeAction = () => {
    setOpen(false);
  };


  return (
    <>
     {open && (
        <FeaturedCategoryPopup action={closeAction} />
      )}
     <button onClick={()=> setOpen(true)} className="bg-brand text-white px-3 py-2 rounded-md my-4 inline-block">Add Featured Category</button>
    </>
  );
}
