import classes from "./Login.module.css";
import React, { useState } from "react";

import { Button, Input, Text } from "components/common";

import LoginOrSignupWith from "../LoginOrSignupWith/LoginOrSignupWith";
import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  return (
    <AuthenticationModal
      heading="Login to [Platform Name]"
      onClose={() => navigate("/")}
    >
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
          />

          <div className={classes.buttonContainer}>
            <Button wFull base to="/sign-up">
              Login
            </Button>
            <Button
              transparent
              to="/forgot-password"
              className={classes.button}
              base
            >
              Forgot Password?
            </Button>
          </div>
        </div>
      </div>{" "}
      <div className={classes.bottomBar}>
        <Text PrimitiveTransparent60 sm textCenter>
          Don’t have any account?
        </Text>
        <Button transparent to="/sign-up" className={classes.button}>
          Sign up
        </Button>
      </div>
    </AuthenticationModal>
  );
};
export default LoginPage;
