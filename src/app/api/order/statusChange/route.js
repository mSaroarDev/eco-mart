import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formdata = await req.json();
  const { searchParams } = new URL(req.url);
  const order_id = searchParams.get("order_id");

  try {
    const res = await prisma.orders.update({
      where: {
        id: order_id,
      },
      data: {
        status: formdata.status,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
