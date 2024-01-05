import Image from "next/image";

export default function RelatedTodayProduct() {
  return (
    <>
      <div className="col-span-6 lg:col-span-3 gap-3 cursor-pointer">
        <div className="h-[110px] w-full border-[1px] border-gray-300 p-5 flex items-center justify-center rounded-lg bg-white">
          <Image src="/bag.jpg" height={100} width={80} alt="Image" />
        </div>
        <h3 className="text-center my-2 text-gray-600">Backpack</h3>
      </div>
    </>
  );
}
