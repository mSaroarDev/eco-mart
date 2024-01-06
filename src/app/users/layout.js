import EditProfile from "@/components/user/EditProfile";
import LayoutForProfile from "@/components/user/Layout";
import MyProfile from "@/components/user/MyProfile";
import Sidenav from "@/components/user/Sidenav";

export default function Layout({ children }) {
  //profile action

  const editProfile = () => {};

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 p-4">
        <div className="rounded-xl flex gap-5">
          <Sidenav />
          {/* <MyProfile /> */}
          <LayoutForProfile />
          <div className="mx-[278px] bg-white shadow-md rounded-md w-full min-h-screen p-7">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
