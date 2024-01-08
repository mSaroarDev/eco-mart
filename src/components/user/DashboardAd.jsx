import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function DashboardGreetings() {
  // session
  const session = await getServerSession(authOptions);

  // profile data
  const data = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  return (
    <>
      <div className="w-full bg-brand/10 rounded-xl">
        <div className="grid grid-cols-12">
          <div className="col-span-5 px-3">
            <Image
              src="/man.png"
              width={200}
              height={250}
              alt="image"
              className="-mt-5 ml-16"
            />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <div className="p-7">
              <h2 className="text-xl font-bold text-black mb-4">
                Welcome, Mr. {data?.name}
              </h2>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
