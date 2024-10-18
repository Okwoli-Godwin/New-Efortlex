import GoogleIcon from "../../components/Ui/googleicon";
import { FaApple } from "react-icons/fa";

import { Fragment } from "react";

export const OtherSiginOption = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-5 justify-center my-[36px]">
        <hr className=" border-0 h-[1.5px] w-full bg-subtle-light" />
        <p className="">OR</p>
        <hr className=" border-0 h-[1.5px] w-full bg-subtle-light" />
      </div>

      <div className="space-y-6 w-[100%]">
        <button
          type="button"
          // onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
          className="h-12 border-[1.5px] border-subtle-light rounded-[10px] gap-2 flex items-center justify-center w-full text-base hover:bg-subtle-light/10 transition-all duration-300"
        >
          <GoogleIcon /> Sign in with Google
        </button>
        <button
          type="button"
          className="h-12 border-[1.5px] border-subtle-light rounded-[10px] gap-2 flex items-center justify-center w-full text-base hover:bg-subtle-light/10 transition-all duration-300"
        >
          <FaApple size={20}/> Sign in with Apple
        </button>
      </div>
    </Fragment>
  );
};
