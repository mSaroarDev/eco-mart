import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // session
  const session = await getServerSession(authOptions);

  // user Id
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  const created_by = user?.id;

  try {
    const createOrder = await prisma.orders.create({
      data: {
        created_by: created_by,
        subtotal: "",
        vat: "",
        discount: "",
        gross: "",
      },
    });

    return NextResponse.json(
      { msg: "success", data: createCart },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ msg: "error", data: err }, { status: 500 });
  }
}
