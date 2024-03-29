import EditProfileButton from "./EditProfileButton";

export default function MyProfileForm({profileData}) {
  
  return (
    <>
      <div className="w-[250px] bg-white fixed right-4 top-4 bottom-4 shadow-md rounded-md p-3 z-10">
        <div className="flex flex-col items-start justify-between h-full w-full">
          <form className="w-full">
            <h2 className="text-base font-semibold">My Profile</h2>
            <div className="flex flex-col items-center justify-center mt-7 rounded-full">
              
                <img
                  src={profileData.profile_image}
                  className="object-cover rounded-full h-24 w-24  ring-2 ring-brand"
                />
              

              <h2 className="font-bold mt-5">{profileData?.name}</h2>
              <span className="text-xs">{profileData?.email}</span>
            </div>

            <div className="__info text-sm mt-7 p-4">
              <div className="flex items-center gap-3 my-3">
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Full Name</p>
                  <p className="font-medium text-black">{profileData?.name}</p>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center gap-3 my-3">
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center">
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
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Email</p>
                  <p className="font-medium text-black mb-3">
                    {`${profileData?.email.slice(0, 10)}...`}
                  </p>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center gap-3 my-3">
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Address</p>
                  <p className="font-medium text-black mb-3">
                    {`${profileData?.address.slice(0, 15)}...`}
                  </p>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center gap-3 my-3">
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-500">Contact No</p>
                  <p className="font-medium text-black mb-3">
                    {profileData?.contact_no}
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="w-full">
            <EditProfileButton profileData={profileData} />
          </div>
        </div>
      </div>
    </>
  );
}
