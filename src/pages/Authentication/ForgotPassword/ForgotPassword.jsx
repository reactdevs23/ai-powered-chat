import classes from "./ForgotPassword.module.css";
import React, { useState } from "react";

import { Button, Input, Text } from "components/common";

import LoginOrSignupWith from "../LoginOrSignupWith/LoginOrSignupWith";
import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";
import SentResetLink from "./SentResetLink/SentResetLink";
import ResetPassword from "./ResetPassword/ResetPassword";
import PasswordChanged from "./PasswordChanged/PasswordChanged";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && <SentResetLink setStep={setStep} />}
      {step === 2 && <ResetPassword setStep={setStep} />}
      {step === 3 && <PasswordChanged setStep={setStep} />}
    </>
  );
};
export default ForgotPassword;
