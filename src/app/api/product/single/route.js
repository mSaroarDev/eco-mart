import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  // param
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const product = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { msg: "success", data: product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
