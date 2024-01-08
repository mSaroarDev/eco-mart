import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authoptions";
import prisma from "@/lib/db";
import MyProfileForm from "../MyProfileData";

export default async function MyProfileUser() {
  // // loading
  // const [loading, setLoading] = useState(false);

  // session
  const session = await getServerSession(authOptions);

  // profile data
  const profileData = await prisma.users.findUnique({
    where: {
      email: session?.user?.email
    }
  })

  if (!session) {
    setLoading(true);
    redirect("/sign-in");
  }




  return (
    <>
      <MyProfileForm profileData={profileData} />
    </>
  );
}
