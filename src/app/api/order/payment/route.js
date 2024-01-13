import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const trxId = searchParams.get("order_id");

  try {
    const createOrder = await prisma.orders.update({
      where: {
        id: trxId,
      },
      data: {
        isPaid: true,
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
