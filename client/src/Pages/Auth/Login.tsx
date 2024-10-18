import Logo from "../../components/Logo";
import img from "../../assets/0c852e02ca48e46aff3741fc18a0652d.jpeg"
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, LockKeyholeIcon, Mail } from "lucide-react";

import { Button } from "../../components/Ui/button";
import { Input } from "../../components/Ui/input";
import { Label } from "../../components/Ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/Ui/card";
import { Separator } from "../../components/Ui/seperator";
import { OtherSiginOption } from "./other-sigin-option";
import { PasswordEye } from "./password-eye";

const Login = () => {

    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
  
    const {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      isValid,
      isSubmitting,
    } = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validateOnChange: true,
      validateOnBlur: true,
      validateOnMount: true,
      onSubmit: async () => {
        // Redirect directly to the dashboard without login logic
        toast.success("Successfully redirected to dashboard");
        navigate("/dashboard/landlord");
      },
    });
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
            //   classes={{ text: "text-white lg:text-3xl", image: "h-[30px]" }}
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] overflow-hidden 2xl:mx-auto h-full overflow-y-scroll bg-white py-10 flex flex-col items-center">
      <Card className="w-full max-w-md mx-auto border-none shadow-none h-[100%]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-medium text-center">Welcome back!</CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          Sign in to your account below
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                autoComplete="email"
                required
                disabled={isSubmitting}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-10"
              />
            </div>
            {errors.email && values.email.length > 0 && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <LockKeyholeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                id="password"
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                disabled={isSubmitting}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-10 pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <PasswordEye
                  isVisible={isVisible}
                  onClick={() => setIsVisible(!isVisible)}
                />
              </div>
            </div>
            {errors.password && values.password.length > 0 && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-end">
            <Link
              to="/auth/reset-password"
              className="text-sm font-semibold text-primary"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
            className="w-full bg-[#5C00B2]"
          >
            Sign in
            {isSubmitting ? (
              <div className="ml-2 animate-spin">⏳</div>
            ) : (
              <ArrowRight className="ml-2" size={20} />
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-medium">
            Create an account
          </Link>
        </p>
        <Separator />
        <OtherSiginOption />
      </CardFooter>
    </Card>
      </div>
    </main>
  );
}

export default Login
