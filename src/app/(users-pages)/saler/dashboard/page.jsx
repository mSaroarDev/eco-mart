import DashboardGreetings from "@/components/user/DashboardAd";

export default function DashboardPage(){
    return (
      <div className="w-full">
        <div className="mb-10">
          <h1 className="text-lg font-bold text-black">Admin Dashboard</h1>
          <p className="text-gray-600 text-sm">05 Aug, 2023</p>
        </div>
        <DashboardGreetings />
      </div>
    )
}