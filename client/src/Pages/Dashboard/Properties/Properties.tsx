import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
  } from "@tanstack/react-query";
  import  { Fragment } from "react";
import OverviewCard from "./OverviewCard";
import PropertiesTable from "./PropertiesTable";
  
  
  
  const Properties = () => {
  
    const queryClient = new QueryClient();
    
  
    return (
      <Fragment>
  
        <OverviewCard />
  
        <HydrationBoundary state={dehydrate(queryClient)}>
          <PropertiesTable  />
        </HydrationBoundary>
      </Fragment>
    );
  }
  
export default Properties