import Image from "next/image";

export default function CartItemList() {
  return (
    <>
      <div className="__items__list flex items-center gap-3 border-b-[1px] border-gray-300 py-3">
        <div className="w-3/6">
          <div className="w-full flex items-center gap-3">
            <Image src="/bag.jpg" height={100} width={100} alt="Bag" />
            <div>
              <p className="text-gray-800 font-medium">
                Arctic Hunter Backpack for Travells & college
              </p>

              <button className="bg-red-500 px-2 text-white rounded-md mt-2 text-xs">
                Remove Item
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/6">$100.00</div>
        <div className="w-1/6 flex items-center gap-2">
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

          <input
            type="text"
            className="max-w-[50px] border-[1px] border-gray-300 focus:outline-0 text-center"
          />
        </div>
        <div className="w-1/6 text-right pr-7">$200.00</div>
      </div>
    </>
  );
}
