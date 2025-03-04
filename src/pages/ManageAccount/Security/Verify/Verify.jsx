import React, { useState } from "react";
import classes from "./Verify.module.css";
import OTPInput from "otp-input-react";

import clsx from "clsx";
import { Button, Text } from "components/common";
import Header from "components/common/Header/Header";
import Modal from "components/common/Modal/Modal";

const Verify = ({ onVerify, isActive, onClose, setStep }) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);

  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      noHeading
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <div className={classes.infoContainer}>
          <Text sm primitive0 textCenter>
            Enter Code
          </Text>
          <Text xs primitive300 textCenter>
            Enter 6 digit code that have on your google authenticator apps.
          </Text>
        </div>

        <div className={clsx(classes.inputs, classes.noResendInputs)}>
          <OTPInput
            inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
        </div>

        {otpInvalid && (
          <div className={classes.helperError}>
            Please enter valid verification code.
          </div>
        )}

        <div className={classes.buttonContainer}>
          <Button
            transparent
            onClick={onClose}
            sm
            className={classes.cancelButton}
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              onVerify();
            }}
            sm
          >
            Verify
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Verify;
