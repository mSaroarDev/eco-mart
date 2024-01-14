import ShippingForm from "@/components/user/ShippingForm";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";

export default async function ShippingPage(){

  // user
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email
    }
  })

  // shipping data
  // const data = await prisma.shipping.findFirst({
  //   where: 
  // })

    return (
      <>
        <div>
            <h1 className="text-lg font-bold text-black">Shipping Adress</h1>
            <p className="text-gray-600 text-sm">The shipping address for product delivery</p>
          </div>

          {/* shipping form */}
          <div className="mt-10">
            <ShippingForm />
          </div>
      </>
    )
}