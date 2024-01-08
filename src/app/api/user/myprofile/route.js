import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   const { searchParams } = new URL(req.url);
  //   const email = searchParams.get("p_email");

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  try {
    const profile = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    return NextResponse.json({ msg: "success", data: profile });
  } catch (error) {
    return NextResponse.json({ msg: "success", data: profile });
  }
}
