import img from "../assets/logo.png"

const Logo = () => {
  return (
    <div className="flex">
      <div className="w-[40px] h-[40px] flex justify-center items-center">
        <img
          src={img}
          width={100}
          height={100}
          alt="Efortlex logo icon"
          className="h-[20px] w-auto object-contain"
        />
      </div>
      <p
        className=
          "text-xl lg:text-2xl font-semibold text-[#fff] pl-2"
      >
        efortlex
      </p>
    </div>
  );
};

export default Logo;
