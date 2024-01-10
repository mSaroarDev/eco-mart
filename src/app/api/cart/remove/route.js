import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  // req url
  const { searchParams } = new URL(req.url);
  const cartId = searchParams.get("cart_id");

  // product

  try {
    const product = await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });

    return NextResponse.json(
      { msg: "success", data: product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
