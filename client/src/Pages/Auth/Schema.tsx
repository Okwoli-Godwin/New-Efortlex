import * as Yup from "yup";
// import { FormikErrors, useFormik } from "formik";

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(50).required("First Name is required"),
  lastName: Yup.string().min(3).max(50).required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  isTenant: Yup.boolean().required(),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#\$%^&*()_+{}":;<>,.?~\[\]]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Confirm Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[A-Z]/,
      "Confirm Password must contain at least one uppercase letter"
    )
    .matches(
      /[!@#\$%^&*()_+{}":;<>,.?~\[\]]/,
      "Confirm Password must contain at least one special character"
    )
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#\$%^&*()_+{}":;<>,.?~\[\]]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export type RegisterSchemaType = Yup.InferType<typeof RegisterSchema>;
export type LoginSchemaType = Yup.InferType<typeof LoginSchema>;
