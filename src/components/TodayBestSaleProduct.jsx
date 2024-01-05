import Image from "next/image";
import Link from "next/link";

export default function TodayBestSalesProducts() {
  return (
    <>
      <div className="__product flex items-center gap-3 my-3">
        <div className="w-14 h-14 relative">
          <Image
            src="/bag.jpg"
            fill
            alt="image"
            className="absolute inset-0 object-cover"
          />
        </div>
        <div className="p-2">
          <Link href={"/"}>
            <h2 className="text-sm font-medium hover:underline hover:text-brand">
              Artic Hunter Bag
            </h2>
          </Link>
          <div className="text-brand flex gap-1 my-1">
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="text-brand font-medium">$360.00</div>
            <div className="text-gray-400 line-through text-xs">$480.00</div>
          </div>
        </div>
      </div>
    </>
  );
}
