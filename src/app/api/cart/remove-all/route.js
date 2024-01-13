import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE() {
  // user
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  try {
    const res = await prisma.cart.deleteMany({
      where: {
        created_by: user?.id,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "success", data: error }, { status: 500 });
  }
}
