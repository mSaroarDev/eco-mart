import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // formdata
  const formdata = await req.json();
  const { name, address, contact_no, profile_image, image_public_id } =
    formdata;

  // session
  const session = await getServerSession(authOptions);

  try {
    const data = await prisma.users.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        name: name,
        address: address,
        contact_no: contact_no,
        profile_image: profile_image,
        image_public_id: image_public_id,
      },
    });

    return NextResponse.json(
      { msg: "profile updated", data: data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "profile update failed", data: error },
      { status: 500 }
    );
  }
}
