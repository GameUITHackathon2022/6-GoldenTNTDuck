import * as yup from "yup";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Password Confirmation is a required field")
    .min(8, "Your password should have at least 8 characters"),
});

export default signInSchema;
