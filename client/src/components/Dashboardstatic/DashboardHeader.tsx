

// const DashboardHeader = () => {
//   return (
//     <div>DashboardHeader</div>
//   )
// }

// const DashboardHeaderimport React, { FormEvent, useState } from "react";
// import Logo from "../components/Logo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/Ui/avatar";
// import { useUser } from "../hooks/useUser";
// import slugify from "../lib/slugify";
import { AlignLeft, ArrowUpRight, Bell, Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useSidebarStore } from "../store/sidebar-store";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  isTenant: boolean;
};

const DashboardHeader = ({ isTenant }: Props) => {
//   const { setIsOpen } = useSidebarStore();
  const navigate = useNavigate();
  const location = useLocation();
//   const { user } = useUser();


  return (
    <div className="h-[70px] w-full pr-[12px] pl-[12px] flex items-center justify-between">
      <button
        // onClick={() => setIsOpen(true)}
        className="h-[35px] w-[35px] flex lg:hidden items-center justify-center"
      >
        <AlignLeft />
      </button>

      {/* {user && ( */}
        <div className="flex items-center space-x-16">
          {location.pathname === "/dashboard/landlord" && (
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">
                Hello Godwin
              </h1>
              <p className="text-[14px]">
                Welcome to your dashboard ✨
              </p>
            </div>
          )}

          {location.pathname === "/dashboard/landlord/properties" && (
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">My Properties</h1>
              <p className="text-[14px]">Manage all your properties</p>
            </div>
          )}
        </div>
      {/* )} */}

      <div className="flex items-center space-x-6">
        <button
          type="button"
          className="h-[35px] w-[35px] hidden lg:flex items-center justify-center relative"
        >
          <Bell className="relative" />
          <span className="flex justify-center items-center absolute right-[-2px] top-[-2px] px-[7px] py-[2px] rounded-full bg-[#EDDFFF] text-brand text-xs">
            4
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/dashboard/tenant/support"
            className="text-black text-base font-medium leading-6 flex items-center"
          >
            Support
          </Link>
          <ArrowUpRight />
        </div>

        <button type="button" className="lg:hidden">
          <Search className="text-brand shrink-0" />
        </button>

        {/* {user && ( */}
          <div className="px-[10px] w-[150px] py-[12px] h-[45px] rounded-[10px] flex items-center justify-between border border-[#5C00B2]">
            <div className="w-[35px] h-[35px] relative items-center flex cursor-pointer">
              <Avatar
                onClick={() =>
                  navigate(
                    `/dashboard/${isTenant ? "tenant" : "landlord"}/settings`
                  )
                }
                className="w-[35px] h-[35px] shrink-0 p-0 relative cursor-pointer"
              >
                <AvatarImage
                  src=""
                  alt="User Avatar"
                  className="h-full w-full object-cover"
                />
                <AvatarFallback className="p-0">
                  <img
                    src="/default-avatar.jpg"
                    alt="Fallback Avatar"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover grayscale"
                  />
                </AvatarFallback>
              </Avatar>
              <h3 className="ml-[8px] text-[#5C00B2]">Godwin</h3>
              <IoIosArrowDown className="h-[20px]" />
              <div className="h-[10px] w-[10px] rounded-full bg-green-500 border-[1.5px] border-white absolute bottom-0 right-0"></div>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default DashboardHeader;