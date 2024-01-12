import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // session
  const session = await getServerSession(authOptions);

  // user
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  // req url
  const { searchParams } = new URL(req.url);
  const product_id = searchParams.get("p_id");
  const qty = searchParams.get("p_qty");
  const price = searchParams.get("price");

  // total
  const total = parseInt(price) * parseInt(qty);

  try {
    const product = await prisma.cart.create({
      data: {
        created_by: user?.id,
        product_id: product_id,
        quantity: qty,
        total_price: total,
      },
    });

    return NextResponse.json(
      { msg: "success", data: product },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
