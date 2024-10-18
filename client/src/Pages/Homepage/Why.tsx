import { TfiReload } from "react-icons/tfi";
import img from "../../assets/why.png"

const Why = () => {
  return (
    <div className="w-[100%] flex justify-center bg-[#2A2A2A] pt-[40px] pb-[40px] mt-[60px]">
        <div className="w-[87%] flex justify-between">
            <div className="w-[65%] flex flex-col">
                <h3 className="text-[25px] font-[600] text-transparent bg-clip-text [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))]">
                    Why Efortlex?
                </h3>
                <p className="text-[#fff] text-[15px] w-[440px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Rhoncus imperdiet enim vestibulum non orci tristique congue libero mauris. 
                </p>

                <div className="w-[100%] flex flex-wrap mt-[30px]">
                    <div className="w-[35%] flex flex-col">
                        <div className="w-[50px] flex justify-center items-center h-[40px] rounded-md [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))]">
                            <TfiReload className="text-[#fff]"/>
                        </div>
                        <p className="text-transparent bg-clip-text [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))] mt-[7px] text-[14px]">
                            Hassle - Free Process
                        </p>
                        <p className="text-[13px] text-[#fff] mt-[15px]">
                            With Efortlex, say goodbye to the stress of finding accommodation. Our seamless process streamlines apartment leasing, roommate search, and relocation logistics, making it effortless for you.
                        </p>
                    </div>
                    <div className="w-[35%] flex flex-col ml-[100px]">
                        <div className="w-[50px] flex justify-center items-center h-[40px] rounded-md [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))]">
                            <TfiReload className="text-[#fff]"/>
                        </div>
                        <p className="text-transparent bg-clip-text [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))] mt-[7px] text-[14px]">
                            Hassle - Free Process
                        </p>
                        <p className="text-[13px] text-[#fff] mt-[15px]">
                            Choose Efortlex for a wide range of housing options tailored to your needs. From self-contain apartments to Flat living spaces, we have the perfect home for every student.
                        </p>
                    </div>
                    <div className="w-[35%] flex flex-col mt-[40px]">
                        <div className="w-[50px] flex justify-center items-center h-[40px] rounded-md [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))]">
                            <TfiReload className="text-[#fff]"/>
                        </div>
                        <p className="text-transparent bg-clip-text [background-image:linear-gradient(to_right,rgba(175,130,227,1),rgba(215,112,127,1))] mt-[7px] text-[14px]">
                            Hassle - Free Process
                        </p>
                        <p className="text-[13px] text-[#fff] mt-[15px]">
                            Experience top-notch customer service at Efortlex. Our dedicated team is committed to providing personalized support, addressing your concerns, and ensuring your satisfaction throughout your student journey
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="w-[33%] overflow-hidden h-[540px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Why