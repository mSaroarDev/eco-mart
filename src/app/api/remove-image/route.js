import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImage = async (publicId) => {
  try {
    await cloudinary.v2.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const p_id = searchParams.get("p_id");
  await removeImage(p_id);
  return NextResponse.json({ msg: "success" });
}
