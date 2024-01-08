import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // session
  const session = await getServerSession(authOptions);

  const { category_name, category_image, image_public_id } = await req.json();

  try {
    const newCategory = await prisma.categories.create({
      data: {
        category_name: category_name,
        created_by: session?.user?.name,
        category_image: category_image,
        image_public_id: image_public_id,
      },
    });

    return NextResponse.json(
      { msg: "category created", data: newCategory },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "category create failed", data: error },
      { status: 500 }
    );
  }
}
