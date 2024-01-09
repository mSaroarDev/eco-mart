import Image from "next/image";
import Link from "next/link";

export default function TodaysDeals() {
  return (
    <>
      <div className="__product px-10 py-3 flex flex-wrap lg:flex-nowrap items-center justify-start gap-5">
        <div className="__image min-w-[280px] h-[280px] relative mt-4 lg:mt-0">
          <div className="w-12 h-12 p-3 bg-brand text-white rounded-full flex items-center justify-center font-semibold absolute -top-3 -right-3 z-10">
            -13%
          </div>
          <Image
            src="/bag.jpg"
            fill
            alt="Bag"
            className="absolute inset-0 object-cover"
          />
        </div>

        <div className="p-3 lg:p-10">
          <h1 className="text-xl text-black font-semibold">
            <Link href={"/p_details"} className="hover:underline">
              Arctic Hunter Backpack
            </Link>
          </h1>
          <div className="text-brand flex mt-5 gap-1">
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
            <Image src="/favorite.png" height={13} width={13} alt="start" />
          </div>
          <hr className="my-3" />
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
          <div className="my-5 flex items-center justify-start gap-3">
            <div className="text-brand text-2xl font-semibold">$360.00</div>
            <div className="text-gray-400 text-base line-through">$480.00</div>
          </div>
          <button className="my-3 bg-brand text-white px-5 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
