import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const res = await prisma.featured_categories.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
