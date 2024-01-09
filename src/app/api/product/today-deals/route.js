import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { product_id } = await req.json();

  try {
    const todayDeals = await prisma.today_deals.create({
      data: {
        product_id: product_id,
      },
    });

    return NextResponse.json(
      { msg: "product pinned", data: todayDeals },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "product pin failed", data: error },
      { status: 500 }
    );
  }
}
