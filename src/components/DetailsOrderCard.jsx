import Image from "next/image";

export default function MyOrderItemList({ data }) {
  return (
    <>
        <div className="__items__list flex items-center gap-3 border-b-[1px] border-gray-300 py-3">
          <div className="w-3/6">
            <div className="w-full flex items-center gap-3">
              <Image
                src="/bag.jpg"
                height={80}
                width={80}
                alt="Bag"
              />
              <div>
                <p className="text-gray-800 font-medium">
                  Bag
                </p>

                
              </div>
            </div>
          </div>
          <div className="w-1/6">$500.00</div>
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

            <div className="w-fit h-fit flex items-center gap-1">
              
              <span>1</span>
              
            </div>
          </div>
          <div className="w-1/6 text-right pr-7">
            $500.00
          </div>
        </div>
    </>
  );
}
