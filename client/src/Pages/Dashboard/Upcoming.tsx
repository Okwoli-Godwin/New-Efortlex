import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import img from '../../assets/joyce.png'

type Props = {}

export const UpcomingData = [
  {
    img: img,
    name: "Nduka Sabastine",
    apartmentName: "Zanibal Quarters",
    price: "122,000.00",
    status: "Overdue"
  },
  {
    img: img,
    name: "Federick",
    apartmentName: "Olodo House",
    price: "190,500.00",
    status: "Overdue"
  },
  {
    img: img,
    name: "Godwin Snr",
    apartmentName: "Alh Gado House",
    price: "150,000.00",
    status: "In 2 days"
  },
  {
    img: img,
    name: "Quwam GB",
    apartmentName: "Harmony Estate",
    price: "250,000.00",
    status: "Overdue"
  },
  {
    img: img,
    name: "Precious MK",
    apartmentName: "Idris Flat",
    price: "150,000.00",
    status: "In 2 weeks"
  },
]

const UpComing = () => {
  return (
    <div className='w-[37%] h-[350px] pb-[12px] border border-[#DCDCDC] rounded-[12px] flex-col flex'>
      <a href="/dashboard/landlord/up-coming" className='w-[100%] py-4 cursor-pointer pl-[15px] pr-[15px] flex items-center justify-between'>
        <h4 className='text-[14px] font-[600]'>Upcoming payments</h4>
        <IoIosArrowForward className='' />
      </a>
      <div className='w-[100%] h-[1px] bg-[#e9e8e8] '></div>

      <div className='w-[100%] h-[100%] flex justify-between flex-col mt-[15px] pl-[15px] pr-[15px]'>
        {UpcomingData.map((item, index) => (
          <div key={index} className='w-[100%] flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w-[33px] h-[33px] rounded-[100%]'>
                <img src={item.img} alt={item.name} className='w-full h-full rounded-full' />
              </div>
              <div className='flex flex-col ml-[12px]'>
                <p className='text-[13px] font-[500]'>{item.name}</p>
                <p className='text-[12px] font-[400]'>${item.price}</p>
              </div>
            </div>

            <div className={`w-[90px] h-[35px] rounded-[8px] flex justify-center items-center ${item.status === "Overdue" ? `bg-[#FFEFEE] text-[#FF0000]` : `bg-[#EDDFFF] text-[#5C00B2]`}`}>
              <p className='text-[11px] font-[600]'>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpComing
