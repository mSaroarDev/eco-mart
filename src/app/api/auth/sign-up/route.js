import prisma from "@/lib/db";
import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  const { name, email, password, role } = formData;

  const existUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  try {
    if (existUser) {
      return NextResponse.json({ msg: "user exist" }, { status: 406 });
    }

    if (!existUser) {
      const newUser = await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: md5(password),
          role: role,
          address: "",
          contact_no: "",
          profile_image: "",
          image_public_id: "",
          shipping: {
            create: {
              customerName: name,
              email: email,
              phone: "contact_no",
              postCode: "Input here",
              address: "Input here",
              city: "Input here",
              state: "Input here",
            },
          },
        },
      });

      return NextResponse.json(
        { msg: "account created", data: newUser },
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
