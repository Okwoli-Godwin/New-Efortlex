import img from "../../assets/join.png"

const Join = () => {
  return (
    <div className="w-[100%] flex justify-center items-center">
        <div className="w-[87%] relative flex justify-center items-center pt-[150px] pb-[150px]">
            <div className="w-[50%] p-[30px] flex-col rounded-xl bg-[#2A2A2A] flex items-end">
               <div className="w-[330px]">
                 <h1 className="text-[22px] font-[600] text-[#fff]">
                    Join our newsletter!
                </h1>
                <p className="text-[13px] font-[400] mt-[8px] text-[#fff] w-[100%]">
                    Subscribe to our newsletter and get premium 
                    tips information from us about your housing needs.
                </p>
                <div className="w-[100%] flex items-center mt-[20px] justify-between">
                    <input placeholder="Enter your email address" type="email" className="w-[60%] h-[50px] border border-[#fff] rounded-lg outline-none pl-[10px] text-[#fff] text-[13px] bg-transparent"/>
                    
                    <button className="w-[38%] h-[50px] rounded-lg flex justify-center items-center bg-[#5C00B2] text-[#fff]">
                        Subscribe
                    </button>
                </div>
               </div>
            </div>
            
            <img src={img} alt="" className="absolute h-[500px] left-[140px] top-[25px]"/>
        </div>
    </div>
  )
}

export default Join