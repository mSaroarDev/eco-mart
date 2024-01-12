import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  // session
  const session = await getServerSession(authOptions);

  // user
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  try {
    const res = await prisma.cart.findMany({
      where: {
        created_by: user?.id,
      },
      orderBy: {
        serial: "desc",
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
