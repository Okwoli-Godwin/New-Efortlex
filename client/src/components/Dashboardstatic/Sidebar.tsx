import { useState, useRef, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/Ui/avatar";
import { cn } from "../../lib/utils";
// import truncate from "../../lib/truncate";
import {
  LayoutDashboard,
  Building2,
  Users,
  Wrench,
  Wallet,
  CreditCard,
  HeadphonesIcon,
  Settings,
  ChevronRight,
  ChevronLeft,
  LogOut
} from "lucide-react";

const basePath = "/dashboard/landlord";

const navigation = [
  {
    name: "MENU",
    items: [
      { name: "Dashboard", Icon: LayoutDashboard, href: `${basePath}` },
      { name: "My Properties", Icon: Building2, href: `${basePath}/properties` },
      { name: "Tenants", Icon: Users, href: `${basePath}/tenant` },
      { name: "Maintenance", Icon: Wrench, href: `${basePath}/maintenance` },
      { name: "Wallet", Icon: Wallet, href: `${basePath}/wallet` },
      { name: "Payments", Icon: CreditCard, href: `${basePath}/payments` },
    ],
  },
  {
    name: "ACCOUNT MANAGEMENT",
    items: [
      { name: "Support", Icon: HeadphonesIcon, href: `${basePath}/support` },
      { name: "Settings", Icon: Settings, href: `${basePath}/settings` },
    ],
  },
];

const Sidebar = ({ onCollapseChange }: { onCollapseChange: (isCollapsed: boolean) => void }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => {
      const newCollapseState = !prev;
      onCollapseChange(newCollapseState);
      return newCollapseState;
    });
  };

  return (
    <Fragment>
      <MobileWrapper isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div
        className={cn(
          "col-span-2 border-r-[1.5px] border-slate-100 bg-brand h-full hidden lg:block transition-all duration-300",
          isCollapsed ? "w-[100px]" : "w-[20%]"
        )}
      >
        <Content isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>
    </Fragment>
  );
};

export default Sidebar;

const MobileWrapper = ({ isCollapsed, toggleSidebar }: { isCollapsed: boolean; toggleSidebar: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const screen = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => {
    if (screen && screen.width < 1024) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (screen && screen.width > 1024) {
      setIsOpen(false);
    }
  }, [screen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed top-0 left-0 z-50 w-full h-full bg-black/40"
        >
          <motion.div
            ref={ref}
            className={cn(
              "h-screen overflow-y-scroll bg-brand transition-all duration-300",
              isCollapsed ? "w-[100px]" : "w-[70%]"
            )}
            initial={{ marginLeft: "-70%" }}
            animate={{ marginLeft: "0%" }}
            exit={{ marginLeft: "-70%" }}
          >
            <Content isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Content = ({ isCollapsed, toggleSidebar }: { isCollapsed: boolean; toggleSidebar: () => void }) => {
  const user = {
    name: "Okwoli Godwin",
    email: "okwolig60@gmail.com",
    avatarUrl: "/default-avatar.jpg",
  };

  return (
    <div className={cn("bg-[#5C00B2] fixed overflow-y-scroll h-full p-5 transition-all duration-300", isCollapsed ? "w-[100px]" : "w-[250px]")}>
      <div className="w-full flex items-center justify-between mb-[30px]">
        <div className="w-[40px] h-[40px] bg-white flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Efortlex logo icon"
            className="h-[20px] w-auto object-contain"
          />
        </div>
        {!isCollapsed && (
          <p className="text-xl lg:text-2xl font-semibold text-white ml-[-15px]">
            efortlex
          </p>
        )}
        <div onClick={toggleSidebar} className="cursor-pointer">
          {isCollapsed ? (
            <ChevronRight className="text-white" size={24} />
          ) : (
            <ChevronLeft className="text-white" size={24} />
          )}
        </div>
      </div>

      {navigation.map(({ items, name }, index) => (
        <div key={index} className="py-[10px]">
          {!isCollapsed && (
            <p className="text-white font-medium leading-6 text-base">
              {name}
            </p>
          )}
          <div className="pt-5 space-y-5">
            {items.map((item, inx) => (
              <Card key={inx} {...item} isCollapsed={isCollapsed} />
            ))}
          </div>
        </div>
      ))}

      <Fragment>
        <hr className="h-[1px] border-0 w-full bg-[#EAECF0] my-5" />
        <div className="flex items-center justify-between p-2 overflow-hidden">
          <div className="flex items-center gap-2">
            <Avatar className="w-[35px] h-[35px] shrink-0 p-0 relative">
              <AvatarImage
                src={user.avatarUrl}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
              <AvatarFallback>
                <img
                  src="/default-avatar.jpg"
                  alt="Fallback Avatar"
                  className="h-full w-full object-cover"
                />
              </AvatarFallback>
            </Avatar>

            {!isCollapsed && (
              <div>
                <p className="text-white text-xs font-semibold">{user.name}</p>
                <p className="text-white text-xs font-normal">{user.email}</p>
              </div>
            )}
          </div>

          <LogOut className="shrink-0 cursor-pointer text-white" size={20} />
        </div>
      </Fragment>
    </div>
  );
};

const Card = ({ name, Icon, href, isCollapsed }: { name: string; href: string; Icon: any; isCollapsed: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === href;

  return (
    <div
      onClick={() => navigate(href)}
      className={cn(
        "flex items-center gap-3 p-2 rounded-md cursor-pointer",
        isActive ? "bg-[#EDDFFF]" : "group hover:bg-[#EAECF0]"
      )}
    >
      <Icon
        size={24}
        className={cn(
          isActive ? "text-brand" : "group-hover:text-brand text-white"
        )}
      />
      {!isCollapsed && (
        <p
          className={cn(
            "text-base leading-6",
            isActive
              ? "text-brand font-medium"
              : "group-hover:text-brand text-white"
          )}
        >
          {name}
        </p>
      )}
    </div>
  );
};
