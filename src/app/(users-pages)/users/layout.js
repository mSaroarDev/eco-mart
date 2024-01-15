import EditProfile from "@/components/user/EditProfile";
import LayoutForProfile from "@/components/user/Layout";
import MyProfileUser from "@/components/user/MyProfile";
import Sidenav from "@/components/user/Sidenav";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  // user redirection
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (!session) {
    redirect("/sign-in");
  } else if (user?.role == "Saler") {
    redirect("/saler/dashboard");
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 p-4">
        <div className="rounded-xl flex gap-5">
          <Sidenav />
          <MyProfileUser />
          {/* <LayoutForProfile /> */}
          <div className="mx-[278px] bg-white shadow-md rounded-md w-full min-h-screen p-7">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
