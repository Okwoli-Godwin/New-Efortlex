import React, { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { MoonLoader } from 'react-spinners'

type Props = {
  offset: number
  limit: number
  page: number
}

const DashboardTable = () => {
//   const { limit, offset, page } = props;
  const [modal, setModal] = useState<{ open: boolean }>({ open: false });
  const [updateModal, setUpdateModal] = useState<{ open: boolean }>({ open: false });

  const isPending = false; // Placeholder for loading state
  const data = []; // Placeholder for fetched data

  if (isPending)
    return (
      <div className="h-[400px] w-full flex items-center justify-center">
        <MoonLoader size={70} color="#5C00B2" />
      </div>
    );

  return (
    <>
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr className='bg-gray-200'>
            <th className="py-3 pr-6 pl-3 text-[12px]">PROPERTY NAME</th>
            <th className="py-3 pr-6 text-[12px]">APARTMENT LOCATION</th>
            <th className="py-3 pr-6 text-[12px]">APARTMENT TYPE</th>
            <th className="py-3 pr-6 text-[12px]">RENT AMOUNT</th>
            <th className="py-3 pr-6 text-[12px]">STATUS</th>
            <th className="py-3 pr-6 text-[12px]">TENANTS</th>
            <th className="py-3 pr-9 text-[12px]"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {/* Placeholder rows */}
          <tr>
            <td className="pr-6 pl-3 py-4 whitespace-nowrap font-[600]">Sample Property</td>
            <td className="pr-6 py-4 whitespace-nowrap">Sample Location</td>
            <td className="pr-6 py-4 whitespace-nowrap">Apartment Type</td>
            <td className="pr-6 py-4 whitespace-nowrap">₦ 100,000</td>
            <td className="pr-6 py-4 whitespace-nowrap">Available</td>
            <td className="pr-6 py-4 whitespace-nowrap">3</td>
            <td className="text-right whitespace-nowrap">
              <a href="#" onClick={() => setModal({ open: true })} className="py-1.5 px-3 ">
                <HiOutlineDotsHorizontal className='text-[18px]' />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default DashboardTable
