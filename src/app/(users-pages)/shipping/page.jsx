import ShippingForm from "@/components/user/ShippingForm";
import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";

export default async function ShippingPage({searchParams}){

  // pid
  const tid = searchParams.transaction_id;

  // user
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email
    }
  })

    return (
      <div className="bg-slate-50 w-full max-w-3xl mx-auto p-10">
        <div className="bg-white p-10 shadow-md">
        <div>
            <h1 className="text-lg font-bold text-black">Shipping Adress</h1>
            <p className="text-gray-600 text-sm">The shipping address for product delivery</p>
          </div>

          {/* shipping form */}
          <div className="mt-5">
            <ShippingForm data={user} tid={tid} />
          </div>
        </div>
        
      </div>
    )
}