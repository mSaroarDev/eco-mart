export default function FeaturesSection() {
  return (
    <>
      <div className="bg-brand text-white py-3">
        <div className="w-full max-w-6xl mx-auto">
          <div className="px-5 grid grid-cols-12 gap-5">
            <div className="col-span-6 lg:col-span-3 flex items-center gap-3 border-r-[0.5px] border-gray-50/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="40"
                viewBox="0 0 640 512"
                fill="#fff"
              >
                <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
              </svg>
              <div>
                <span className="uppercase text-base font-medium">
                  Free Delivery
                </span>
                <p className="text-xs">From 275 AED</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 flex items-center gap-3 lg:border-r-[0.5px] border-gray-50/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="36"
                viewBox="0 0 576 512"
                fill="#fff"
              >
                <path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z" />
              </svg>
              <div>
                <span className="uppercase text-base font-medium">
                  Cash on Delivery
                </span>
                <p className="text-xs">From 275 AED</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 flex items-center gap-3 border-r-[0.5px] border-gray-50/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
              </svg>
              <div>
                <span className="uppercase text-base font-medium">
                  Free Gift Box
                </span>
                <p className="text-xs">and gift note</p>
              </div>
            </div>

            <div className="col-span-6 lg:col-span-3 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="40"
                viewBox="0 0 640 512"
                fill="#fff"
              >
                <path d="M640 0V400c0 61.9-50.1 112-112 112c-61 0-110.5-48.7-112-109.3L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64H640zM576 400a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3 46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2L103.7 384.9c-17.1 4.6-34.6-5.6-39.2-22.6L23.1 207.7z" />
              </svg>
              <div>
                <span className="uppercase text-base font-medium">
                  Super Fast Delivery
                </span>
                <p className="text-xs">to whole country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
