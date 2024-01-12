import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const qty = searchParams.get("qty");
  const pid = searchParams.get("pid");
  const cid = searchParams.get("cid");
  const price = searchParams.get("price");

  // total
  const total = parseInt(price) * parseInt(qty);

  try {
    const res = await prisma.cart.update({
      where: {
        id: cid,
      },
      data: {
        product_id: pid,
        quantity: qty,
        total_price: total,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  }
}
