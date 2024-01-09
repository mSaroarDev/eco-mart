import prisma from "@/lib/db";
import { authOptions } from "@/utils/authoptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.json();
  const {
    product_name,
    ratings,
    short_des,
    regular_price,
    price,
    description,
    product_image,
    image_public_id,
    category_id,
    availability,
    status,
  } = formData;

  // session
  const session = await getServerSession(authOptions);

  // category name
  const category = await prisma.categories.findUnique({
    where: {
      id: category_id,
    },
  });

  try {
    await prisma.products.create({
      data: {
        product_name: product_name,
        ratings: parseInt(ratings),
        short_des: short_des,
        regular_price: regular_price,
        price: price,
        description: description,
        product_image: product_image,
        image_public_id: image_public_id,
        created_by: session?.user?.name,
        category_id: category_id,
        category_name: category.category_name,
        availability: availability,
        status: status,
        seo_keywords: `${product_name}, ${short_des}, ${description}, ${category.category_name}`,
      },
    });

    return NextResponse.json({ msg: "product created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { msg: "product create failed", data: error },
      { status: 500 }
    );
  }
}
