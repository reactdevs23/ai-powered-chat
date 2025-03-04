import Modal from "components/common/Modal/Modal";

import ReactQRCode from "react-qr-code";

import classes from "./AddGoogleAuthenticator.module.css";
import { Button, Text } from "components/common";
import { useState } from "react";
const AddGoogleAuthenticatorModal = ({ isActive, onClose, onContinue }) => {
  const [text, setText] = useState("https://example.com");

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
            Add google authenticator
          </Text>
          <Text xs primitive300 textCenter>
            Set up a new sign-in method in your authenticator app by scanning
            the QR code to link it to your account.
          </Text>
        </div>

        <div className={classes.qrCodeWrapper}>
          <ReactQRCode value={text} size={120} />
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
              onContinue();
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default AddGoogleAuthenticatorModal;
