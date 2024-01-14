import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    category_name,
    category_image,
    image_public_id,
    order,
    category_link,
  } = await req.json();

  // order check
  const existingOrder = await prisma.featured_categories.findFirst({
    where: {
      order: parseInt(order),
    },
  });

  try {
    if (existingOrder) {
      return NextResponse.json(
        { msg: "error", data: "dupplicate reques" },
        { status: 406 }
      );
    } else {
      const newCategory = await prisma.featured_categories.create({
        data: {
          order: parseInt(order),
          category_name: category_name,
          category_image: category_image,
          category_link: category_link,
          image_public_id: image_public_id,
        },
      });

      return NextResponse.json(
        { msg: "category created", data: newCategory },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "category create failed", data: error },
      { status: 500 }
    );
  }
}
