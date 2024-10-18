
import PinInput from "react-pin-input";
import { useState } from "react";
import { Button } from "../../components/Ui/button";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";
// import { resendEmailVerification } from "../services/resend-email-verification";
import { MoonLoader } from "react-spinners";
// import { validateEmail } from "../services/validate-email";



export const StepThreeForm = () => {
  // const { values, returnUrl } = props;


  const [token, setToken] = useState("");
  const [isCodeLoading] = useState(false);
  const [isLoading] = useState(false);

  // const handleSubmit = () => {
  //   setIsLoading(true);
  //   validateEmail(values.email, token)
  //     .then((result: any) => {
  //       if (result.ok) {
  //         toast.success(result.message);
  //         router.push(returnUrl ?? "/");
  //       } else {
  //         toast.error(result.message);
  //       }
  //     })
  //     .catch((err: any) => {
  //       toast.error(err.message);
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  // const sendCode = async () => {
  //   setIsCodeLoading(true);
  //   await resendEmailVerification(values.email)
  //     .then((results) => {
  //       if (results.ok) {
  //         toast.success(results.message);
  //       } else {
  //         toast.error(results.message);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err.message);
  //     })
  //     .finally(() => setIsCodeLoading(false));
  // };
  return (
    <div className="">
      <div className="flex flex-col items-center mt-[50px] mb-[30px]">
        <h1 className="text-2xl font-medium text-black leading-[32px]">
          Verify account!
        </h1>

        <p className="text-sm leading-[22px] pt-[8px]">
          Enter verification code sent to your registered email
        </p>
      </div>

      <div className="space-y-6">
        <PinInput
          length={6}
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value) => setToken(value)}
          type="numeric"
          inputMode="number"
          inputStyle={{
            border: "1.5px solid #DCDCDC",
            height: "50px",
            width: "50px",
          }}
          onComplete={() => {}}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

        <div className="flex items-center justify-end">
          <button
            type="button"
            // onClick={sendCode}
            disabled={isLoading || isCodeLoading}
            className="font-semibold text-sm text-black flex items-center disabled:opacity-40"
          >
            <MoonLoader
              size={15}
              color="#5C00B2"
              className="mr-2"
              loading={isCodeLoading}
            />
            Resend verification code
          </button>
        </div>

        <Button
          type="button"
          disabled={isLoading || token.length !== 6 || isCodeLoading}
          className="w-full"
          // onClick={handleSubmit}
        >
          Continue{" "}
          {isLoading ? (
            <MoonLoader
              size={20}
              color="white"
              className="ml-2 text-white"
              loading={isLoading}
            />
          ) : (
            <ArrowRight size={20} className="ml-2" />
          )}
        </Button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-brand font-medium">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
