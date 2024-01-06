"use client"
import { useState } from "react"
import EditProfile from "./EditProfile";
import MyProfile from "./MyProfile";

export default function LayoutForProfile(){

    const [edit, setEdit] = useState(false);

    const editProfile = () => {
        setEdit(true)
    }

    const updateProfile = () => {
        setEdit(false)
    }
    return (
      <>
        {edit ? <EditProfile action={updateProfile} /> : <MyProfile action={editProfile} />}
      </>
    )
}