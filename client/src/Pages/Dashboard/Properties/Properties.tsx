import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
  } from "@tanstack/react-query";
  import { Plus } from "lucide-react";
//   import Link from "next/link";
  import  { Fragment } from "react";
//   import { TitleCard } from "../../tenant/feature";
//   import { fetchLandlordProperties } from "../services/fetch-properties";
//   import { OverviewCard, PropertiesTable } from "./feature";
  
  type Props = {
    params: {};
    searchParams: {
      page: string;
    };
  };
  
  const limit = 10;
  
  const Properties = () => {
    // const {
    //   searchParams: { page = "1" },
    // } = props;
  
    // const offset = limit * (Number(page) - 1);
  
    const queryClient = new QueryClient();
    // await queryClient.prefetchQuery({
    //   queryKey: ["properties", `page=${page}`],
    //   queryFn: async () => {
    //     const data = await fetchLandlordProperties({ offset, limit });
    //     return data;
    //   },
    // });
  
    return (
      <Fragment>
        {/* <TitleCard
          title="My Properties"
          subtitle="Manage all your properties."
          rightComponent={
            <Link href="/dashboard/landlord/properties/new" className="hidden lg:block">
              <button className="border border-subtle-dark flex items-center gap-2 py-[12px] px-[20px] rounded-[10px]">
                <Plus />
                Add new property
              </button>
            </Link>
          }
        /> */}
  
        {/* <OverviewCard /> */}
  
        {/* <Link href="/dashboard/landlord/properties/new" className="lg:hidden"> */}
          <button className="border border-subtle-dark flex items-center justify-center gap-2 py-[8px] px-[20px] rounded-[10px] w-full mt-5">
            <Plus />
            Add new property
          </button>
        {/* </Link> */}
  
        <HydrationBoundary state={dehydrate(queryClient)}>
          {/* <PropertiesTable page={Number(page)} offset={offset} limit={limit} /> */}
        </HydrationBoundary>
      </Fragment>
    );
  }
  
export default Properties