import * as yup from "yup";

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, "Username should not contain numbers")
    .required("Username is a required field"),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, "Phone number should contain only numbers")
    .required("Phone number is a required field"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Password Confirmation is a required field")
    .min(6, "Your password should have at least 6 characters"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Confirmation must match"),
  address: yup.string(),
  avatar: yup.mixed()
});

export default signUpSchema;
