
import Dashboard from "@/sections/SuperAdmin/DashBoard";
import Sidebar from "@/sections/SuperAdmin/sideBar";

export default function SuperAdmin() {
    return (
        <>
            <div className="w-full flex h-full animate__animated animate__fadeIn bg-kuduLightGray">
                <Sidebar mobile />

                <div className="w-full lg:ml-[25%] md:mx-4 flex flex-col gap-5 md:ml-[25%] h-full">
                    <Dashboard />
                </div>
            </div>        </>

    )
}