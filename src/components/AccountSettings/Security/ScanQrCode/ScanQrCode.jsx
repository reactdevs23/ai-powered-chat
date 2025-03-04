import React from "react";
import classes from "./ScanQrCode.module.css";

import { Button, Heading, Text } from "components/common";

import QRCode from "react-qr-code";
const ScanQrCode = ({ onContinue, onCancel }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <Heading xl2 semiBold textCenter primitive950>
          Scan the QR Code
        </Heading>
        <Text base primitive700 textCenter>
          Open your google authenticator app and scan the qr code to add this
          2FA security.
        </Text>
      </div>

      <div className={classes.qrCode}>
        <QRCode
          size={184}
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
            borderRadius: "6px",
          }}
          value={""}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          onClick={onCancel}
          base
          transparent
          className={classes.cancelButton}
        >
          Cancel
        </Button>
        <Button onClick={onContinue} base>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ScanQrCode;
