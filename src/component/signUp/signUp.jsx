import React, { useState } from "react";
import "./signUp.css";
import TextField from "@mui/material/TextField";
import { signUp } from "../../services/userService";
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneNumberRegex = /[0,9]{10}/;

function SignUp() {
  const [signupObj, setSignupObj] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_no: '',
    role: "user",
  });
  const [signupRegexObj, setSignupRegexObj] = useState({
    firstNameBorder: false,
    firstNameHelper: "",
    lastNameBorder: false,
    lastNameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    phoneNumberBorder: false,
    phoneNumberHelper: "",
  });

  const takeFirstName = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      first_name: event.target.value,
    }));
  };

  const takeLastName = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      last_name: event.target.value,
    }));
  };

  const takeEmail = (event) => {
    setSignupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const takePhoneNumber = (event) => {
    setSignupObj((prevState) => ({
      ...prevState,
      phone_no: event.target.value,
    }));
  };

  const submit = () => {
    const firstNameTest = firstNameRegex.test(signupObj.first_name);
    const lastNameTest = lastNameRegex.test(signupObj.last_name);
    const emailTest = emailRegex.test(signupObj.email);
    const passwordTest = passwordRegex.test(signupObj.password);
    // const phoneNumberTest = phoneNumberRegex.test(signupObj.phone_no);
   

    console.log(firstNameTest, lastNameTest, emailTest, passwordTest);
    if (firstNameTest === true) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        firstNameBorder: false,
        firstNameHelper: "",
      }));
    } else if (firstNameRegex === false) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        firstNameBorder: true,
        firstNameHelper: "enter first name",
      }));
    }

    if (lastNameTest === true) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        lastNameBorder: false,
        lastNameHelper: "",
      }));
    } else if (lastNameRegex === false) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        lastNameBorder: true,
        lastNameHelper: "enter last name",
      }));
    }

    if (emailTest === true) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else if (emailTest === false) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter email",
      }));
    }

    if (passwordTest === true) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    } else if (passwordTest === false) {
      setSignupRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter password",
      }));
    }

    // if (phoneNumberTest === true) {
    //   setSignupRegexObj((prevState) => ({
    //     ...prevState,
    //     phoneNumberBorder: false,
    //     phoneNumberHelper: "",
    //   }));
    // } else if (phoneNumberTest === false) {
    //   setSignupRegexObj((prevState) => ({
    //     ...prevState,
    //     phoneNumberBorder: true,
    //     phoneNumberHelper: "enter mobile number",
    //   }));
    // }

    if(firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true){
        signUp(signupObj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }
  };

  return (
    <div className="mainSignupContainer">
      <div className="signUpContainer2">
        <div className="first_nameSignUp">
          <TextField
            onChange={takeFirstName}
            error={signupRegexObj.firstNameBorder}
            helperText={signupRegexObj.firstNameHelper}
            id="outlined-basic"
            className="inputFirstName"
            label="first_name"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="last_nameSignUp">
          <TextField
            onChange={takeLastName}
            error={signupRegexObj.lastNameBorder}
            helperText={signupRegexObj.lastNameHelper}
            id="outlined-basic"
            className="inputFirstName"
            label="last_name"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="emailSignUp">
          <TextField
            onChange={takeEmail}
            error={signupRegexObj.emailBorder}
            helperText={signupRegexObj.emailHelper}
            id="outlined-basic"
            className="inputFirstName"
            label="email"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="passwordSignUp">
          <TextField
            onChange={takePassword}
            error={signupRegexObj.passwordBorder}
            helperText={signupRegexObj.passwordHelper}
            id="outlined-basic"
            className="inputFirstName"
            label="password"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="mobileNumberSignUp">
          <TextField
            onChange={takePhoneNumber}
            error={signupRegexObj.phoneNumberBorder}
            helperText={signupRegexObj.phoneNumberHelper}
            id="outlined-basic"
            className="inputFirstName"
            label="mobile number"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="signUpBtn">
          <input
            onClick={submit}
            type="button"
            value="signUp"
            className="signUp-btn"
            name="signUp"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
