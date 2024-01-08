import Paggination from "@/components/Paggination";
import CustomerCard from "@/components/saler/Customers";
import prisma from "@/lib/db";

export default async function CustomersPage({searchParams}) {

  // grab page no
  const page = searchParams.page;

  // customers
  const customers = await prisma.users.findMany({
    skip: (page - 1 ) * 10,
    take: 10,
    where: {
      role: "Buyer"
    }
  })

  // total db customer
  const totalCustomers = await prisma.users.count({
    where: {
      role: "Buyer"
    }
  })

  return (
    <>
      <div>
        <div className="flex items-center justify-between pb-5">
          <div>
            <h1 className="text-lg font-bold text-black">Customers</h1>
            <p className="text-gray-600 text-sm">
            All customers that purchasing from Eco-Mart
            </p>
          </div>
          <div>
            
          </div>
        </div>

        {/* orders */}
        <div className="__orders">
          <div className="flex flex-col gap-3">
            {customers && customers.map((customer) => {
              return <CustomerCard key={customer.serial} data={customer} />
            })}

          </div>
        </div>
        <div className="p-5 border-t-[1px] border-gray-300 flex items-center justify-end">
          <Paggination count={totalCustomers} nextLink={"/users/customers"} />
        </div>
      </div>
    </>
  );
}
