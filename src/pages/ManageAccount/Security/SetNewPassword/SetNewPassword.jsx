import Modal from "components/common/Modal/Modal";
import { RiErrorWarningLine } from "react-icons/ri";

import classes from "./SetNewPassword.module.css";
import { Button, Input, Text } from "components/common";
import { useState } from "react";
const SetNewPassword = ({ isActive, onClose, onSave }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      noHeading
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <Text lg primitive0 textCenter>
          Set Password
        </Text>
        <div className={classes.inputWrapper}>
          <Input
            sm
            className={classes.input}
            name="password"
            type="password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />{" "}
          <Input
            sm
            className={classes.input}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Re-type password"
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button
            sm
            primitive800
            className={classes.cancelButton}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            sm
            onClick={() => {
              onSave();
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default SetNewPassword;
