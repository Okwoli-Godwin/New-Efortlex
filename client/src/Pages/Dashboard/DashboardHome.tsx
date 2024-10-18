import React, { useEffect, useState } from 'react';
import { useQuery, QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import DashboardTable from './DashboardTable';
import UpComing from './Upcoming';

interface DataItem {
  label: string;
  value: number;
  color: string;
}

const data: DataItem[] = [
  { label: 'Total Properties', value: 16, color: 'linear-gradient(to right, #5C00B2, #CF5FDB)' },
  { label: 'Vacant Properties', value: 5, color: 'linear-gradient(to right, #5C00B2, #CF5FDB)' },
  { label: 'Occupied Properties', value: 11, color: 'linear-gradient(to right, #5C00B2, #CF5FDB)' },
  { label: 'No. of Tenants', value: 40, color: 'linear-gradient(to right, #5C00B2, #CF5FDB)' },
];

const limit = 10;

type Props = {
  params: {};
  searchParams: {
    page: string;
  };
};

const fetchProperties = async (offset: number, limit: number) => {
  // Simulate fetching properties, replace with real API call
  // const response = await fetchLandlordProperties({ offset, limit });
  // return response.data;
  return data;
};

const DashboardHome = () => {
  // const [queryClient] = useState(() => new QueryClient());
  
  // const {
  //   searchParams: { page = "1" },
  // } = props;

  // const offset = limit * (Number(page) - 1);

  // Using useQuery to fetch data
//   const { data: propertiesData, error, isLoading } = useQuery(
    // ["properties", page],
    // () => fetchProperties(offset, limit)
//   );

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="flex flex-col space-y-5 pb-15 mt-10 w-[100%] transition-all duration-300">
      <div className="flex justify-between w-full">
        <div className="flex flex-col w-full lg:w-[60%] border border-gray-300 rounded-lg p-5">
          <h3 className="font-bold text-lg">Property Overview</h3>
          <p className="text-sm">Overview of all properties</p>
          <div className="h-px bg-gray-200 my-5"></div>

          <div className="space-y-[30px]">
            {data.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1/3">{item.label}</div>
                <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${(item.value / maxValue) * 100}%`,
                      background: item.color,
                    }}
                  ></div>
                </div>
                <div className="w-16 text-left ml-5">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <UpComing />
      </div>

      <div className="flex flex-col mt-12">
        <h3 className="font-bold text-lg">My Properties</h3>

        <div className="w-full mt-5">
          {/* <HydrationBoundary state={dehydrate(queryClient)}>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error loading properties</p>
            ) : ( */}
              <div><DashboardTable  /></div>
            {/* )}
          </HydrationBoundary> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
