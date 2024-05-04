import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("pls enter a valid email")
    .required("required"),
  password: yup
    .string()
    .matches(passwordRule, {message: "please enter a strong message"})
    .required("required"),
  // passwordConfirm: yup
  //   .string()
  //   .oneOf([yup.ref("password"),null])
  //   .required("required"),
  name: yup
    .string()
    .max(50)
    .required("required")
});
export const userSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("pls enter a valid email")
    .required("required"),
  password: yup
    .string()
    .matches(passwordRule, {message: "please enter a strong message"})
    .required("required"),
});

export default userSchema;

