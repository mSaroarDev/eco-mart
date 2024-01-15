import Sidenav from "@/components/saler/Sidenav";
import LayoutForProfile from "@/components/user/Layout";
import MyProfileUser from "@/components/user/MyProfile";
import MyProfile from "@/components/user/MyProfile";
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
  } else if (user?.role == "Buyer") {
    redirect("/users/dashboard");
  }

  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 p-4">
        <div className="rounded-xl flex gap-5">
          <Sidenav />
          <MyProfileUser />
          <div className="mx-[278px] bg-white shadow-md rounded-md w-full min-h-screen p-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
