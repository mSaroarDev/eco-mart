import MyProfile from "@/components/user/MyProfile";
import Sidenav from "@/components/user/Sidenav";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 p-4">
        <div className="rounded-xl flex gap-5">
          <Sidenav />
          <MyProfile />
          <div className="mx-[278px] bg-white shadow-md rounded-md w-full min-h-screen p-7">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
