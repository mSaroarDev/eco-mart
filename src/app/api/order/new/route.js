import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST() {
  // session
  const session = await getServerSession(authOptions);

  // user Id
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  const created_by = user?.id;

  // cart by this user
  const cart = await prisma.cart.findMany({
    where: {
      created_by: created_by,
    },
  });

  // subtotal
  const subtotal = cart.reduce((total, currentItems) => {
    return total + parseInt(currentItems.total_price) || 0;
  }, 0);

  // gross total
  const grossTotal = parseInt(subtotal) + parseInt(subtotal) * (2 / 100);

  // console.log(subtotal);

  try {
    const createOrder = await prisma.orders.create({
      data: {
        isPaid: false,
        created_by: created_by,
        subtotal: subtotal.toString(),
        gross: grossTotal.toString(),
        status: "Order Placed",
        items: cart,
      },
    });

    return NextResponse.json(
      { msg: "success", data: createOrder },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error", data: err }, { status: 500 });
  }
}
