import img from "../../assets/effort1.png"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[80px] flex items-center justify-center">
        <div className="w-[87%] h-[100%] flex items-center justify-between">
            <img src={img} alt="logo" className="h-[35px]"/>
            <div className="flex items-center">
                <h4 className="text-[17px] font-[500]">About</h4>
                <h4 className="text-[17px] font-[500] ml-[60px]">Contact</h4>
                <h4 className="text-[17px] font-[500] ml-[60px]">Blog</h4>
                <h4 className="text-[17px] font-[500] ml-[60px]">Services</h4>
                <button onClick={() => navigate("/login")} className="w-[90px] h-[43px] bg-[#5C00B2] flex justify-center items-center text-[#fff] rounded-lg ml-[50px]">
                    Sign in
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header