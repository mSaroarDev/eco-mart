import Image from "next/image";

export default function ProductCard() {
  return (
    <>
      <div className="col-span-12 lg:col-span-3">
        <div className="border-[1px] border-gray-300 p-5 w-full">
          <div className="__image w-full h-[200px] relative">
            <div className="bg-brand text-white text-xs w-10 h-10 p-3 rounded-full absolute -top-2 -right-2 flex items-center justify-center z-10">
              -20%
            </div>
            <Image
              src="/fashion.jpg"
              fill
              alt="bag"
              className="absolute inset-0 object-cover"
            />
          </div>
          <h2 className="text-base font-medium text-gray-500 text-center my-1">
            Arctic Hunter Bag
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="text-brand font-medium">$360.00</div>
            <div className="text-gray-400 line-through text-xs">$480.00</div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              className="my-3 w-8 h-8 rounded-full border-[1px] border-[#292929] flex items-center justify-center"
              title="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="12"
                viewBox="0 0 512 512"
                fill="#000"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </button>

            <button
              className="my-3 py-1 px-5 bg-brand text-white border-[1px] border-brand rounded-full flex items-center justify-center hover:bg-white hover:text-brand duration-150"
              title="Add to cart"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg> */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
