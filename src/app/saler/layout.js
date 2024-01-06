import Sidenav from "@/components/saler/Sidenav";
import MyProfile from "@/components/user/MyProfile";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 p-4">
        <div className="rounded-xl flex gap-5">
          <Sidenav />
          <MyProfile />
          <div className="mx-[278px] bg-white shadow-md rounded-md w-full min-h-screen p-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
