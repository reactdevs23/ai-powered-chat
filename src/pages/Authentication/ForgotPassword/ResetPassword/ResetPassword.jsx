import classes from "./ResetPassword.module.css";
import React, { useState } from "react";

import { Button, Input, Text } from "components/common";

import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";

const ResetPassword = ({ setStep }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const handleResetPassword = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <AuthenticationModal
      heading="Set Your New Password"
      info="Create a strong password to secure your account."
    >
      <div className={classes.inputWrapper}>
        <Input
          name="password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />{" "}
        <Input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Confirm New Password"
        />
        <Button wFull base onClick={handleResetPassword}>
          Reset Password
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
export default ResetPassword;
