import { DashboardHeader, Sidebar } from "../Dashboardstatic"
import { Outlet } from "react-router-dom"
import { useState } from "react"

const DashHomeLauout = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)

    const handleSidebarCollapseChange = (collapsed: boolean) => {
        setSidebarCollapsed(collapsed)
    }
  return (
    <div className="h-full flex overflow-hidden w-full">
        {/* <div className="w-[30%] bg-[red] flex h-full overflow-hidden"> */}
            <Sidebar onCollapseChange={handleSidebarCollapseChange}/>
        {/* </div> */}
        <div
        //  className="flex-1 w-[100%] h-[100%] bg-[red]" 
            className={`w-[100%] bg-[#fff] transition-all duration-300 ${isSidebarCollapsed ? 'w-[90%] pl-[30px] pr-[20px]' : 'w-[80%] pl-[30px] pr-[30px]'}`}
        >
            <DashboardHeader isTenant={true}/>
            <Outlet />
        </div>
    </div>
  )
}

export default DashHomeLauout