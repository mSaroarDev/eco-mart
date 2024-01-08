import Spinner from "@/components/spinner/Spinner";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoggedRedirect() {
  // session
  const session = await getServerSession(authOptions);

  // get profile info
  const userInfo = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  // redirect
  if (!session) {
    redirect("/sign-in");
  } else if (userInfo?.role === "Buyer") {
    redirect("/users/dashboard");
  } else if (userInfo?.role === "Saler") {
    redirect("/saler/dashboard");
  }

  return (
    <>
      <Spinner />
    </>
  );
}
