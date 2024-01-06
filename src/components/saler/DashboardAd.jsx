import Image from "next/image";

export default function DashboardGreetings() {
  return (
    <>
      <div className="w-full bg-brand/10 rounded-xl">
        <div className="grid grid-cols-12">
          <div className="col-span-5 px-3">
            <Image
              src="/man.png"
              width={200}
              height={250}
              alt="image"
              className="-mt-10 ml-16"
            />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            <div className="p-7">
              <h2 className="text-xl font-bold text-black mb-4">
                Welcome, Mr. Saroar Jahan
              </h2>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
