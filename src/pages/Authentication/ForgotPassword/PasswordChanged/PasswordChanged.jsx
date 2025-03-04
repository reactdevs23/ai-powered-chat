import classes from "./PasswordChanged.module.css";

import { Button, Heading, Text } from "components/common";

import AuthenticationModal from "components/common/AuthenticationModal/AuthenticationModal";

import { successIcon } from "images";

const PasswordChanged = ({ setStep }) => {
  return (
    <AuthenticationModal heading="Password Changed">
      <div className={classes.infoContainer}>
        <img src={successIcon} alt="#" className={classes.icon} />
        <Heading lg textCenter primitive0>
          Password Changed!
        </Heading>
        <Text sm primitive300 textCenter>
          Your password has been successfully reset! You can now log in with
          your new credentials.
        </Text>
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
export default PasswordChanged;
