import img from "../../assets/featured1.png"
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import img2 from "../../assets/badge.png"
import img3 from "../../assets/featured2.png"
import img4 from "../../assets/featured3.png"
import img5 from "../../assets/featured4.png"

const Featured = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[60px]">
        <div className="w-[87%] flex flex-col items-center justify-center">
            <h1 className="text-[25px] font-[600]">
                Featured Properties
            </h1>
            <p className="text-[16px] mt-[5px] font-[500]">
                Search confidently for your trusted Source of homes for sale or rent
            </p>
            <div className="w-[70%] h-[50px] justify-between border border-[#DCDCDC] bg-[#fff] mt-[20px] rounded-md p-[8px] flex items-center">
                    <input placeholder="Enter an address, neighborhood, City or Zip code" type="text" className="w-[70%] h-[100%] pl-[10px] outline-none"/>
                    <button className="w-[110px] h-[100%] bg-[#5C00B2] rounded-md flex justify-center items-center text-[#fff]">
                     Search
                    </button>
            </div>

            <div className="w-[100%] flex justify-between flex-wrap mt-[25px]">
                <div className="w-[22%] p-[20px] bg-[#fff] shadow-lg rounded-lg">
                    <div className="w-[100%] h-[180px] overflow-hidden rounded-lg relative">
                        <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <FaRegHeart className="text-[#fff] text-[20px] absolute top-[15px] right-[15px]"/>
                    </div>
                    <h4 className="text-[14px] font-[600] mt-[10px]">
                        Gulf Estate, Port Harcourt
                    </h4>
                    <div className="w-[100%] flex items-center mt-[8px]">
                        <IoLocationOutline className="text-[17px]"/>
                        <p className="text-[12px] ml-[8px]">
                            Transamadi industrial layout, Port Harcourt
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center justify-between mt-[10px]">
                        <div className="flex items-center">
                            <IoBedOutline className="text-[17px] text-[#5C00B2]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                3 bedrooms
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="text-[17px] text-[#FAAA32]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                4.3
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10px] w-[100%] flex">
                        <h4 className="text-[13px] font-[600]">
                            N80,000 <span className="ml-[5px] text-[11px]">monthly</span>
                        </h4>
                    </div>
                </div>
                
                <div className="w-[22%] p-[20px] bg-[#fff] shadow-lg rounded-lg">
                    <div className="w-[100%] h-[180px] overflow-hidden rounded-lg relative">
                        <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <FaRegHeart className="text-[#fff] text-[20px] absolute top-[15px] right-[15px]"/>
                    </div>
                    <h4 className="text-[14px] w-[100%] justify-between flex items-center font-[600] mt-[10px]">
                        Conkain Estate, P.H
                        <img src={img2} alt="" className="h-[15px]"/>
                    </h4>
                    <div className="w-[100%] flex items-center mt-[8px]">
                        <IoLocationOutline className="text-[17px]"/>
                        <p className="text-[12px] ml-[8px]">
                            Conkain Estate, Rumuogba, Port Harcourt
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center justify-between mt-[10px]">
                        <div className="flex items-center">
                            <IoBedOutline className="text-[17px] text-[#5C00B2]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                3 bedrooms
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="text-[17px] text-[#FAAA32]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                4.3
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10px] w-[100%] flex">
                        <h4 className="text-[13px] font-[600]">
                            N80,000 <span className="ml-[5px] text-[11px]">monthly</span>
                        </h4>
                    </div>
                </div>
                
                <div className="w-[22%] p-[20px] bg-[#fff] shadow-lg rounded-lg">
                    <div className="w-[100%] h-[180px] overflow-hidden rounded-lg relative">
                        <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <FaRegHeart className="text-[#fff] text-[20px] absolute top-[15px] right-[15px]"/>
                    </div>
                    <h4 className="text-[14px] w-[100%] justify-between flex items-center font-[600] mt-[10px]">
                        New Haven
                        <img src={img2} alt="" className="h-[15px]"/>
                    </h4>
                    <div className="w-[100%] flex items-center mt-[8px]">
                        <IoLocationOutline className="text-[17px]"/>
                        <p className="text-[12px] ml-[8px]">
                            Azikwe Close, off Madueke Road, New Haven, Enugu
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center justify-between mt-[10px]">
                        <div className="flex items-center">
                            <IoBedOutline className="text-[17px] text-[#5C00B2]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                3 bedrooms
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="text-[17px] text-[#FAAA32]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                4.3
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10px] w-[100%] flex">
                        <h4 className="text-[13px] font-[600]">
                            N80,000 <span className="ml-[5px] text-[11px]">monthly</span>
                        </h4>
                    </div>
                </div>

                <div className="w-[22%] p-[20px] bg-[#fff] shadow-lg rounded-lg">
                    <div className="w-[100%] h-[180px] overflow-hidden rounded-lg relative">
                        <img src={img5} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <FaRegHeart className="text-[#fff] text-[20px] absolute top-[15px] right-[15px]"/>
                    </div>
                    <h4 className="text-[14px] w-[100%] justify-between flex items-center font-[600] mt-[10px]">
                        Caven, Port Harcourt
                        <img src={img2} alt="" className="h-[15px]"/>
                    </h4>
                    <div className="w-[100%] flex items-center mt-[8px]">
                        <IoLocationOutline className="text-[17px]"/>
                        <p className="text-[12px] ml-[8px]">
                            ransamadi industrial layout, Port Harcourt
                        </p>
                    </div>
                    <div className="w-[100%] flex items-center justify-between mt-[10px]">
                        <div className="flex items-center">
                            <IoBedOutline className="text-[17px] text-[#5C00B2]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                3 bedrooms
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="text-[17px] text-[#FAAA32]"/>
                            <p className="text-[12px] ml-[8px] font-[500]">
                                4.3
                            </p>
                        </div>
                    </div>
                    <div className="mt-[10px] w-[100%] flex">
                        <h4 className="text-[13px] font-[600]">
                            N80,000 <span className="ml-[5px] text-[11px]">monthly</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured