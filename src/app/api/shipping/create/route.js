import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // tid
  const { searchParams } = new URL(req.url);
  const tid = searchParams.get("tid");
  // console.log("tid", tid);

  // user
  const session = await getServerSession(authOptions);
  const user = await prisma.users.findUnique({
    where: {
      email: session?.user?.email,
    },
  });
  console.log("user", user);

  // formdata

  const formdata = await req.json();
  const { customerName, phone, postCode, address, city, state } = formdata;
  console.log("formdata", formdata);

  try {
    const res = await prisma.shipping.create({
      data: {
        orderId: tid,
        customerName: customerName,
        email: user?.email,
        phone: phone.toString(),
        postCode: postCode.toString(),
        address: address,
        city: city,
        state: state,
      },
    });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error }, { status: 500 });
  }
}
