import { ArrowRight, Mail, User } from "lucide-react";
import { OtherSiginOption } from "./other-sigin-option";
import { InputCard } from "./input-card";
import { RegisterSchemaType } from "./Schema";
import { FormikErrors } from "formik";
import { RadioGroup, RadioGroupItem } from "../../components/Ui/radio-group";
import { Button } from "../../components/Ui/button";
import { Link } from "react-router-dom";

type StepOneProps = {
  values: RegisterSchemaType;
  errors: FormikErrors<RegisterSchemaType>;
  isSubmitting: boolean;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
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
  nextStep: () => void;
};

export const StepOneForm = (props: StepOneProps) => {
  const {
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    isSubmitting,
    values,
    nextStep,
  } = props;

  const disabled = () => {
    if (errors.email) return true;
    if (errors.firstName) return true;
    if (errors.lastName) return true;
    if (errors.isTenant) return true;

    if (isSubmitting) return true;

    return false;
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-[50px] mb-[30px]">
        <h1 className="text-2xl font-medium text-black leading-[32px]">
          Create an account!
        </h1>

        <p className="text-sm leading-[22px] pt-[8px]">
          Let’s help you set up your account
        </p>
      </div>

      <div className="space-y-6">
        <InputCard
          title="Email"
          placeholder="Enter email"
          name="email"
          type="email"
          autoComplete="email"
          required
          readOnly={isSubmitting}
          disabled={isSubmitting}
          value={values.email}
          onChange={handleChange}
          startIcon={
            <div className="flex items-center justify-center w-6 h-6">
              <Mail size={20} className="text-subtle-light" />
            </div>
          }
          onBlur={handleBlur}
          error={
            errors.email && values.email.length > 0 ? errors.email : undefined
          }
        />

        <div className="space-x-4 flex items-center">
          <InputCard
            title="First Name"
            placeholder="First name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            readOnly={isSubmitting}
            disabled={isSubmitting}
            value={values.firstName}
            onChange={handleChange}
            startIcon={
              <div className="flex items-center justify-center w-[25px] h-[25px]">
                <User
                  size={25}
                  className="text-subtle-light text-[20px] px-[2px]"
                />
              </div>
            }
            onBlur={handleBlur}
            error={
              errors.firstName && values.firstName.length > 0
                ? errors.firstName
                : undefined
            }
          />
          <InputCard
            title="Last Name"
            placeholder="Last name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            readOnly={isSubmitting}
            disabled={isSubmitting}
            value={values.lastName}
            onChange={handleChange}
            startIcon={
              <div className="flex items-center justify-center w-[25px] h-[25px]">
                <User
                  size={25}
                  className="text-subtle-light text-[20px] px-[2px]"
                />
              </div>
            }
            onBlur={handleBlur}
            error={
              errors.lastName && values.lastName.length > 0
                ? errors.lastName
                : undefined
            }
          />
        </div>

        <div className="space-y-2 flex flex-col">
          <p className="text-primary text-sm not-italic font-normal leading-6">
            How would you use Efotlex?
          </p>

          <RadioGroup
            defaultValue="tenant"
            disabled={isSubmitting}
            value={values.isTenant ? "tenant" : "landlord"}
            onValueChange={(value: string) =>
              setFieldValue("isTenant", value === "tenant")
            }
            className="flex gap-16"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="tenant"
                id="tenant"
                disabled={isSubmitting}
              />
              <label htmlFor="tenant">As a Tenant</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="landlord"
                id="landlord"
                disabled={isSubmitting}
              />
              <label htmlFor="landlord">As a Landlord/Agent</label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type="button"
          disabled={disabled()}
          className="w-full bg-[#5C00B2]"
          onClick={nextStep}
        >
          Continue <ArrowRight size={20} className="ml-2" />
        </Button>

        <p className="text-center">
          Already have an account?
          <Link to="/auth/login" className="text-brand font-medium">
            Login
          </Link>
        </p>
      </div>

      <OtherSiginOption />
    </div>
  );
};
