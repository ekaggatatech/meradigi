import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  phoneormobile: Yup.string().required("Phone/Mobile is required"),
  companyname: Yup.string().required("Company Name is required"),
  industrytype: Yup.string().required("Industry Type is required"),
  servicesyoulookingfor: Yup.string().required("Services You Looking For ? is required"),
  email: Yup.string()
  .email("Enter a valid email")
  .required("Registered Email is required")
  /* password: Yup.string()
    .required("Please enter a password")
    .min(6, "Password must have at least 6 characters"),
    confirmPassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref("password")], "Password & Confirm Password does not match") */
});