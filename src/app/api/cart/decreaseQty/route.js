import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const qty = searchParams.get("qty");
  const pid = searchParams.get("pid");
  const cid = searchParams.get("cid");

  console.log("cid", cid);
  console.log("pid", pid);
  console.log("qty", qty);

  try {
    const res = await prisma.cart.update({
      where: {
        id: cid,
      },
      data: {
        product_id: pid,
        quantity: qty,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  }
}
