export default function HomeSearch() {
  return (
    <>
      <form>
        <div className="w-full flex items-center font-openSans py-3">
          <input
            type="text"
            className="flex-1 rounded-l-full bg-white py-3 px-7 text-sm border-[1px] border-brand focus:outline-0 h-10 text-gray-500"
            placeholder="Search Anyting..."
          />
          <button className="h-10 py-2 px-7 rounded-r-full bg-[#292929] text-gray-300 text-sm border-[1px] border-[#292929]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
