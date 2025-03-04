import classes from "./Signup.module.css";
import React, { useState } from "react";

import { Button, Input, Text } from "components/common";

import LoginOrSignupWith from "../LoginOrSignupWith/LoginOrSignupWith";
import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthenticationModal heading="Login to [Platform Name]">
      <div className={classes.formContainer}>
        <LoginOrSignupWith />
        <Text primitive500 sm className={classes.or} textCenter>
          or
        </Text>
        <div className={classes.inputWrapper}>
          <Input
            name="email"
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Email "
          />
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
          <Button wFull base to="/sign-up">
            Sign up
          </Button>
        </div>
      </div>{" "}
      <div className={classes.bottomBar}>
        <Text PrimitiveTransparent60 sm textCenter>
          Already have an account?
        </Text>
        <Button transparent to="/login" className={classes.button}>
          Login
        </Button>
      </div>
    </AuthenticationModal>
  );
};
export default Signup;
