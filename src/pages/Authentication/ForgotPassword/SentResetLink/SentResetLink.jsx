import classes from "./SentResetLink.module.css";
import React, { useState } from "react";

import { Button, Input, Text } from "components/common";

import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";

const SentResetLink = ({ setStep }) => {
  const [email, setEmail] = useState("");
  const handleResetLink = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <AuthenticationModal
      heading="Forgot Your Password?"
      info="  Enter your email address, and we’ll send you instructions to reset your
        password."
    >
      <div className={classes.inputWrapper}>
        <Input
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Email address "
        />

        <Button wFull base onClick={handleResetLink}>
          Send Reset Link
        </Button>
      </div>

      <div className={classes.bottomBar}>
        <Text PrimitiveTransparent60 sm textCenter>
          Back to
        </Text>
        <Button transparent to="/login" className={classes.button}>
          Login
        </Button>
      </div>
    </AuthenticationModal>
  );
};
export default SentResetLink;
