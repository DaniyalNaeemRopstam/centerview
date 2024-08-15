import * as yup from "yup";

const emailreg = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

const numreg = /^[0-9]*$/;

const noNum = /^\D*$/;

const onlySpace = /^\S*$/;

const messageRegex = /^(?!\s*$)[\s\S]*$/;

const noSpecialCharacterButDash = /^[A-Za-z0-9-\s]+$/;

const lowerCase = /[a-z]/;

const upperCase = /[A-Z]/;

const digit = /\d/;

const specialCharacter = /[@$!%*?&#_\-+()/]/;

const cardRegex = /^\b(?:\d[ -]*?){13,16}\b/;

const expiryReg = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/;

const cvc = /^\d{3}$/;

const SignIn = yup.object().shape({
  email_address: yup
    .string()
    .matches(
      emailreg,
      "Please enter a valid e-mail address e.g. example@example.com"
    )
    .required("Please enter a valid e-mail address e.g. example@example.com"),

  password: yup
    .string()
    .required("Required")
    .matches(onlySpace, "Spaces is not allowed"),
});

const SignUp = yup.object().shape({
  first_name: yup
    .string()
    .required("Required")
    .matches(messageRegex, "Empty space is not allowed")
    .matches(noNum, "Numbers are not allowed")
    .matches(noSpecialCharacterButDash, "Special characters are not allowed")
    .min(2, "Minimum 2 characters required"),
  last_name: yup
    .string()
    .required("Required")
    .matches(messageRegex, "Empty space is not allowed")
    .matches(noNum, "Numbers are not allowed")
    .matches(noSpecialCharacterButDash, "Special characters are not allowed")
    .min(2, "Minimum 2 characters required"),
  email_address: yup
    .string()
    .matches(
      emailreg,
      "Please enter a valid e-mail address e.g. example@example.com"
    )
    .required("Please enter a valid e-mail address e.g. example@example.com"),
  phone_number: yup
    .string()
    .required("Required")
    .min(10, "Phone number must be valid")
    .matches(numreg, "Phone number must be valid"),
  password: yup
    .string()
    .required("Required")
    .matches(onlySpace, "Password cannot contain spaces.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(lowerCase, "Password must contain at least one lowercase letter.")
    .matches(upperCase, "Password must contain at least one uppercase letter.")
    .matches(digit, "Password must contain at least one digit.")
    .matches(
      specialCharacter,
      "Password must contain at least one special character."
    ),
});

const EmailAddress = yup.object().shape({
  email_address: yup
    .string()
    .matches(
      emailreg,
      "Please enter a valid e-mail address e.g. example@example.com"
    )
    .required("Please enter a valid e-mail address e.g. example@example.com"),
});

const ResetPasword = yup.object().shape({
  new_password: yup
    .string()
    .required("Required")
    .matches(onlySpace, "Password cannot contain spaces.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(lowerCase, "Password must contain at least one lowercase letter.")
    .matches(upperCase, "Password must contain at least one uppercase letter.")
    .matches(digit, "Password must contain at least one digit.")
    .matches(
      specialCharacter,
      "Password must contain at least one special character."
    ),

  confirm_password: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("new_password"), null], "Passwords must match"),
});

const ProfileDetails = yup.object().shape({
  years_experience: yup
    .string()
    // .required("Required")
    .matches(numreg, "only number allowed"),
  city: yup
    .string()
    // .required("Required")
    .min(5, "Minimum 5 characters required")
    .max(150, "Maximum 150 word limit"),
  province: yup
    .string()
    .min(5, "Minimum 5 characters required")
    .max(150, "Maximum 150 word limit"),
  hourly_rate: yup.string(),
  zipcode: yup.string(),
});

const Document = yup.object().shape({
  document_title: yup
    .string()
    // .required("Required")
    .min(2, "Minimum 2 characters required"),
});

const CreditDetail = yup.object().shape({
  card_number: yup
    .string()
    .matches(cardRegex, "Card number is not valid")
    .required("Please enter a valid card number"),
  expiry_date: yup
    .string()
    .matches(expiryReg, "Please enter expiry data")
    .required("Please enter expiry date"),
  cvcReg: yup
    .string()
    .matches(cvc, "Please enter valid CVC")
    .required("Required"),
});

const EditUserProfile = yup.object().shape({
  first_name: yup
    .string()
    .required("Required")
    .matches(messageRegex, "Empty space is not allowed")
    .matches(noNum, "Numbers are not allowed")
    .matches(noSpecialCharacterButDash, "Special characters are not allowed")
    .min(2, "Minimum 2 characters required"),
  last_name: yup
    .string()
    .required("Required")
    .matches(messageRegex, "Empty space is not allowed")
    .matches(noNum, "Numbers are not allowed")
    .matches(noSpecialCharacterButDash, "Special characters are not allowed")
    .min(2, "Minimum 2 characters required"),
  phone_number: yup
    .string()
    .required("Required")
    .min(10, "Phone number must be valid")
    .matches(numreg, "Phone number must be valid"),
  city: yup
    .string()
    // .required("Required")
    .min(5, "Minimum 5 characters required")
    .max(150, "Maximum 150 word limit"),
  province: yup
    .string()
    // .required("Required")
    .min(5, "Minimum 5 characters required")
    .max(150, "Maximum 150 word limit"),
  hourly_rate: yup.string(),
  zipcode: yup.string(),
});

const Review = yup.object().shape({
  review_: yup
    .string()
    .required("Required")
    .matches(messageRegex, "Empty space is not allowed")
    .min(2, "Minimum 2 characters required"),
});

export {
  SignIn,
  SignUp,
  ResetPasword,
  EmailAddress,
  ProfileDetails,
  Document,
  CreditDetail,
  EditUserProfile,
  Review,
};
