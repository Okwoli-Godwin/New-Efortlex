"use client"

import {  useState } from "react";
import { useFormik } from "formik";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/Ui/card";
import { Button } from "../../components/Ui/button";
import { Stepper, Step, StepLabel } from "../../components/Ui/stepper";
import { RegisterSchema, RegisterSchemaType } from "./Schema";
// import { createAccount } from "../../services/create-account";
import { StepOneForm } from "./step-one-form";
import { StepTwoForm } from "./step-two-form";
import { StepThreeForm } from "./step-three-form";
import Logo from "../../components/Logo";
import img from "../../assets/0c852e02ca48e46aff3741fc18a0652d.jpeg"

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isValid,
    isSubmitting,
    setFieldValue,
  } = useFormik<RegisterSchemaType>({
    initialValues: {
      firstName: "",
      lastName: "",
      isTenant: false,
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async () => {
      // try {
      //   const results = await createAccount(values);
      //   if (results.ok) {
      //     toast.success(results.message);
      //     stepperRef.current?.nextStep();
      //   } else {
      //     toast.error(results.message ?? "Uh oh! Something went wrong.");
      //   }
      // } catch (err: any) {
      //   toast.error(err.message ?? "Uh oh! Something went wrong.");
      // }
    },
  });

  const nextStep = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const previousStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <main className="flex h-screen relative bg-white overflow-y-hidden">
      <div className="w-[50%] hidden lg:grid 2xl:hidden place-items-center h-full relative">
        <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] relative rounded-[20px] overflow-hidden">
        <img
            src={img}
            alt=""
            className="h-full w-full object-cover relative "
            width={1000}
            height={500}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#AF82E3]/40 via-[#AF82E3]/10 to-[#D7707F]/40 z-20 pt-[40px] pl-[40px]">
            <Logo 
            // classes={{ text: "text-white lg:text-3xl", image: "h-[30px]" }} 
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] 2xl:mx-auto h-full overflow-y-scroll bg-white py-10 flex flex-col items-center">
        <div className="w-[85%] lg:w-[70%] space-y-5 flex flex-col">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Stepper activeStep={activeStep} >
                <Step>
                  <StepLabel>1</StepLabel>
                </Step>
                <Step>
                  <StepLabel>2</StepLabel>
                </Step>
                <Step>
                  <StepLabel>3</StepLabel>
                </Step>
              </Stepper>
              <form onSubmit={handleSubmit} className="mt-8">
                {activeStep === 0 && (
                  <StepOneForm
                    setFieldValue={setFieldValue}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isSubmitting={isSubmitting}
                    nextStep={nextStep}
                  />
                )}
                {activeStep === 1 && (
                  <StepTwoForm
                    setFieldValue={setFieldValue}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isSubmitting={isSubmitting}
                    isValid={isValid}
                  />
                )}
                {activeStep === 2 && (
                  <StepThreeForm   />
                )}
                <div className="mt-6 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={previousStep}
                    disabled={activeStep === 0}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                  >
                    {activeStep === 2 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Register;


// "use client";

// import { useRef } from "react";
// import { useFormik } from "formik";
// import { toast } from "sonner";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Stepper, Step, StepLabel } from "@/components/ui/stepper";
// import { RegisterSchema, RegisterSchemaType } from "../feature/schema";
// import { createAccount } from "../services/create-account";
// import { StepOneForm, StepTwoForm, StepThreeForm } from "../feature";

// type Props = {
//   params: {};
//   searchParams: { returnUrl: string };
// };

// export default function Register(props: Props) {
//   const {
//     searchParams: { returnUrl },
//   } = props;

//   const stepperRef = useRef<{ nextStep: () => void } | null>(null);
//   const {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     values,
//     errors,
//     isValid,
//     isSubmitting,
//     setFieldValue,
//   } = useFormik<RegisterSchemaType>({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       isTenant: false,
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: RegisterSchema,
//     validateOnChange: true,
//     validateOnBlur: true,
//     validateOnMount: true,
//     onSubmit: async (values) => {
//       if (!stepperRef.current) return;

//       try {
//         const results = await createAccount(values);
//         if (results.ok) {
//           toast.success(results.message);
//           stepperRef.current.nextStep();
//         } else {
//           toast.error(results.message ?? "Uh oh! Something went wrong.");
//         }
//       } catch (err: any) {
//         toast.error(err.message ?? "Uh oh! Something went wrong.");
//       }
//     },
//   });

//   const steps = ['Personal Information', 'Account Details', 'Confirmation'];

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Stepper activeStep={0} ref={stepperRef}>
//           {steps.map((label, index) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         <form onSubmit={handleSubmit} className="mt-8">
//           {stepperRef.current?.activeStep === 0 && (
//             <StepOneForm
//               setFieldValue={setFieldValue}
//               values={values}
//               errors={errors}
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               isSubmitting={isSubmitting}
//               nextStep={() => stepperRef.current?.nextStep()}
//             />
//           )}
//           {stepperRef.current?.activeStep === 1 && (
//             <StepTwoForm
//               setFieldValue={setFieldValue}
//               values={values}
//               errors={errors}
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               isSubmitting={isSubmitting}
//               isValid={isValid}
//             />
//           )}
//           {stepperRef.current?.activeStep === 2 && (
//             <StepThreeForm values={values} returnUrl={returnUrl} />
//           )}
//           <div className="mt-6 flex justify-between">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => stepperRef.current?.previousStep()}
//               disabled={stepperRef.current?.activeStep === 0}
//             >
//               Back
//             </Button>
//             <Button
//               type="submit"
//               disabled={!isValid || isSubmitting}
//             >
//               {stepperRef.current?.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </div>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }