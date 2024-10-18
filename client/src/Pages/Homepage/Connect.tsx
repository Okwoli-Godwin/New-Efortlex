import img from "../../assets/ae0f6e56-047b-4b43-be4d-2d7da8810ea6.jpeg"
import img2 from "../../assets/649e007a-3303-4813-af1f-2d984e96f9d8.jpeg"
import img3 from "../../assets/5d4846a7-de48-4861-b119-abdf79e514a3.jpeg"

const Connect = () => {
  return (
    <div className="w-[100%] flex justify-center mt-[60px]">
        <div className="w-[87%] flex justify-between flex-wrap">
            <div className="w-[48%] flex flex-col">
                <h1 className="font-[700] text-[25px] w-[350px]">
                    Efortlex, where Landlord and Tenant connect <span className="text-[#5C00B2]">seamlessly</span>
                </h1>
                <p className="text-[16px] mt-[13px] leading-[27px] font-[500]">
                    With Efortlex, say goodbye to hassels and welcome our streamlined process that ensures you find reliable TENANTS and PROPERTIES in just a few click. Tap on the button the get started below.
                </p>
                <button className="w-[110px] h-[45px] mt-[20px] bg-[#5C00B2] text-[#fff] flex justify-center items-center rounded-md">
                    Get started
                </button>
            </div>

            <div className="w-[48%] flex justify-between h-[380px]">
                <div className="w-[49%] h-[100%] relative">
                    <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    <div className="absolute bottom-0 w-[100%] h-[70px] left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center pl-[14px] text-[#fff]">
                        <p>Professionals</p>
                    </div>
                </div>

                <div className="w-[49%] h-[100%] flex flex-col justify-between">
                    <div className="w-[100%] h-[48%] relative">
                        <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <div className="absolute bottom-0 w-[100%] h-[50px] left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center pl-[14px] text-[#fff]">
                        <p>Building</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-[48%] relative">
                        <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
                        <div className="absolute bottom-0 w-[100%] h-[50px] left-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-xl flex items-center pl-[14px] text-[#fff]">
                        <p>Building</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect