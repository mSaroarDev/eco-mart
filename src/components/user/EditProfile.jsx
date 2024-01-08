import { getServerSession } from "next-auth";
import EditProfileForm from "../EditProfileForm";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";

export default async function EditProfileUser({action}) {

  // session
  const session = await getServerSession(authOptions);


  // profile data fetch
  const profileData = await prisma.users.findUnique({
    where: {
      email: session?.user?.email
    }
  })

  
  return (
    <>
      <EditProfileForm data={profileData} />
    </>
  );
}
