import Image from "next/image";
import Link from "next/link";

export default function CartItem() {
  return (
    <>
      <div className="__product flex items-center justify-between gap-3">
        <div className="flex items-center justify-start gap-3">
          <div className="w-16 h-16 relative">
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
        <div>
          <button className="bg-red-500 h-fit w-fit text-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
