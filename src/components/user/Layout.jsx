"use client"
import { useState } from "react"
import EditProfileUser from "./EditProfile";
import MyProfileUser from "./MyProfile";

export default function LayoutForProfile(){

    // const [edit, setEdit] = useState(false);

    // const editProfile = () => {
    //     setEdit(true)
    // }

    // const updateProfile = () => {
    //     setEdit(false)
    // }
    
    return (
      <>
        {edit ? <EditProfileUser action={updateProfile} /> : <MyProfileUser action={editProfile} />}
      </>
    )
}