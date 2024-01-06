import Image from "next/image";
import Link from "next/link";

export default function CustomerCard() {
  return (
    <>
      <div className="p-3 flex items-center gap-3 w-full border-t-[1px] border-gray-300">
        <div className="w-2/4">
          <div className="w-full flex items-center justify-start gap-4">
            <div className="w-24 h-24 relative">
                <Image src="/pro-pic.jpeg" fill alt="Bag" className="absolute inset-0 object-cover rounded-full ring-2 ring-brand" />
            </div>
            <div>
              <h2 className="font-semibold text-black">
                Customer Name
              </h2>
              <p className="text-brand text-sm flex items-center gap-2">
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <span className="font-bold">Active</span>
              </p>
              {/* <div className="flex items-center gap-4 mt-4">
                <button className="flex items-center gap-1 text-red-500">
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                  <span className="text-sm">Remove</span>
                </button>

                <button className="flex items-center gap-1 text-green-600">
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>

                  <span className="text-sm">Edit</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">City</p>
          <p className="text-brand text-sm font-bold mb-2">Rajshahi</p>
          <p className="text-gray-500 text-xs">State</p>
          <p className="text-brand text-sm font-bold">Bangladesh</p>
        </div>
        <div className="w-1/4">
          <p className="text-gray-500 text-xs">Registered at</p>
          <p className="text-brand text-sm font-bold mb-2">
            20 Oct, 2023 at 04.00pm
          </p>
          <p className="text-gray-500 text-xs">Availability</p>
          <p className="text-brand text-sm font-bold mb-2">Available</p>
        </div>
      </div>
    </>
  );
}
