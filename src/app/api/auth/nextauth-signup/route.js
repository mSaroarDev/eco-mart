import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  const {
    name,
    email,
    password,
    role,
    address,
    contact_no,
    profile_image,
    image_public_id,
  } = formData;

  try {
    const ifExistEmail = await prisma.users.count({
      where: {
        email: email,
      },
    });

    if (ifExistEmail) {
      return NextResponse.json({ msg: "Welcome Back" });
    } else {
      const userData = await prisma.users.create({
        data: {
          name,
          email,
          password,
          role,
          address,
          contact_no,
          profile_image,
          image_public_id,
        },
      });
      return NextResponse.json(
        { msg: "success", data: userData },
        { status: 201 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { msg: "server error", data: err },
      { status: 500 }
    );
  }
}
