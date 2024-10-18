import img from "../../assets/2a1bc0b8-2668-48b1-92e2-5ad64ef6c63e.jpeg"

const Hero = () => {
  return (
    <div className="w-[100%] flex justify-center h-[80vh]">
        <div className="w-[95%] h-[100%] rounded-2xl overflow-hidden relative">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
            <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center flex-col">
                <h1 className="text-[39px] text-[#fff] w-[450px] text-center font-[600]">
                    Let’s find a Home that’s perfect for you!
                </h1>
                <p className="text-[#fff] mt-[20px] text-[19px]">
                    Efortlex, Your one-stop platform for hassle-free housing solutions, offering easy apartment search along with convenience!
                </p>
                <div className="w-[70%] h-[50px] justify-between bg-[#fff] mt-[30px] rounded-md p-[8px] flex items-center">
                    <input placeholder="Enter an address, neighborhood, City or Zip code" type="text" className="w-[70%] h-[100%] pl-[10px] outline-none"/>
                    <button className="w-[110px] h-[100%] bg-[#5C00B2] rounded-md flex justify-center items-center text-[#fff]">
                     Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero