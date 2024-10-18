import { FormikErrors } from "formik";
import { RegisterSchemaType } from "./Schema";
// import Logo from "@/app/components/Logo";
import { ArrowRight, LockKeyholeIcon } from "lucide-react";
import { PasswordEye } from "./password-eye";
import { InputCard } from "./input-card";
import { useState } from "react";
import { Button } from "../../components/Ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "../../components/Ui/Checkbox";
import { MoonLoader } from "react-spinners";

type Props = {
  values: RegisterSchemaType;
  errors: FormikErrors<RegisterSchemaType>;
  isSubmitting: boolean;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<RegisterSchemaType>>;
  isValid: boolean;
};
export const StepTwoForm = (props: Props) => {
  const { errors, handleBlur, handleChange, isValid, isSubmitting, values } =
    props;

  const [isAgree, setIsAgree] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="">
      <div className="flex flex-col items-center mt-[50px] mb-[30px]">
        <h1 className="text-2xl font-medium text-black leading-[32px]">
          Set password!
        </h1>

        <p className="text-sm leading-[22px] pt-[8px]">
          Let’s help you set up your account
        </p>
      </div>

      <div className="space-y-6">
        <InputCard
          title="Password"
          placeholder="Password"
          name="password"
          type={isVisible ? "text" : "password"}
          readOnly={isSubmitting}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.password && values.password.length > 0
              ? errors.password
              : undefined
          }
          startIcon={
            <div className="flex items-center justify-center w-[25px] h-[25px]">
              <LockKeyholeIcon
                size={25}
                className="text-subtle-light text-[20px] px-[2px]"
              />
            </div>
          }
          endIcon={
            <PasswordEye
              isVisible={isVisible}
              onClick={() => setIsVisible(!isVisible)}
            />
          }
        />
        <InputCard
          title="Confirm password"
          placeholder="Password"
          name="confirmPassword"
          type={isVisible ? "text" : "password"}
          readOnly={isSubmitting}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.confirmPassword && values.confirmPassword.length > 0
              ? errors.confirmPassword
              : undefined
          }
          startIcon={
            <div className="flex items-center justify-center w-[25px] h-[25px]">
              <LockKeyholeIcon
                size={25}
                className="text-subtle-light text-[20px] px-[2px]"
              />
            </div>
          }
          endIcon={
            <PasswordEye
              isVisible={isVisible}
              onClick={() => setIsVisible(!isVisible)}
            />
          }
        />

        <div className="flex space-x-3">
          <Checkbox
            id="terms-condition"
            checked={isAgree}
            onCheckedChange={() => setIsAgree(!isAgree)}
            className="mt-0.5"
          />
          <label htmlFor="terms-condition" className="text-xs">
            I have read and agree to the{" "}
            <span className="text-brand">Terms & Conditions</span> and the{" "}
            <span className="text-brand">Privacy Policy</span> of Efortlex
            Limited.
          </label>
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting || !isAgree}
          className="w-full bg-[#5C00B2]"
        >
          Continue{" "}
          {isSubmitting ? (
            <MoonLoader
              size={20}
              color="white"
              className="ml-2 text-white"
              loading={isSubmitting}
            />
          ) : (
            <ArrowRight size={20} className="ml-2" />
          )}
        </Button>

        <p className="text-center">
          Already have an account?
          <Link to="/auth/login" className="text-brand font-medium">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
