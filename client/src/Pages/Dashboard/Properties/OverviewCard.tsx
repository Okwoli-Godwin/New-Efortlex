import { Building, Home, Building2, Users } from "lucide-react";


const OverviewCard = () => {
  const items = [
    {
      name: "Total properties",
      value: "16",
      Icon: Building,
      color: "#5C00B2",
      bg: "#EDDFFF",
    },
    {
      name: "Rented properties",
      value: "10",
      Icon: Home,
      color: "#B42318",
      bg: "#FFF5F4",
    },
    {
      name: "Available properties",
      value: "6",
      Icon: Building2,
      color: "#027A48",
      bg: "#ECFDF3",
    },
    {
      name: "Total occupants",
      value: "12",
      Icon: Users,
      color: "#FF5F00",
      bg: "#FFEEE5",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-[24px]">
      {items.map(({ Icon, name, value, bg, color }, index) => (
        <div
          key={index}
          className="flex items-center border border-subtle-light rounded-xl py-[15px] px-[20px] "
        >
          <div
            className="flex items-center justify-center shrink-0 h-[40px] w-[40px] rounded-full bg-[#EDDFFF]"
            style={{ backgroundColor: bg }}
          >
            <Icon className="h-[20px] w-[20px]" style={{ color }} />
          </div>

          <div className="ml-2">
            <p className="text-natural-dark text-2xl">{value}</p>
            <p className="text-subtle-dark text-sm whitespace-nowrap">{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;