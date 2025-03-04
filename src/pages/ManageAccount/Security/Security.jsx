import { Button, Text } from "components/common";
import classes from "./Security.module.css";
import clsx from "clsx";
import {
  andoiredImg,
  devider,
  googleAuthenticator,
  googleLogo,
  macBookImg,
} from "images";
import Switch from "components/common/Switch/Switch";
import { useState } from "react";
import SetNewPassword from "./SetNewPassword/SetNewPassword";
import AddGoogleAuthenticatorModal from "./AddGoogleAuthenticator/AddGoogleAuthenticator";
import Verify from "./Verify/Verify";

const Security = () => {
  const [showSetPasswordModal, setShowSetPasswordModal] = useState(false);
  const [gmailSecurityOn, setGamilSecurityOn] = useState(true);

  // addding authenticatoer
  const [step, setStep] = useState(0);

  const handleNewPassword = () => {};
  const handleAuthenticator = () => {
    setStep((prev) => prev + 1);
  };
  const handleVerify = () => {
    setStep(null);
  };
  return (
    <>
      <div className={classes.wrapper}>
        <div className={clsx(classes.spaceBetween, classes.infoBox)}>
          <div>
            <Text sm primitive0>
              Password
            </Text>
            <Text className={classes.label}>Not set yet</Text>
          </div>
          <Button
            className={classes.button}
            onClick={() => setShowSetPasswordModal((prev) => !prev)}
          >
            Set New Password
          </Button>
        </div>
        <div className={clsx(classes.fa2Security)}>
          <Text sm primitive0 className={clsx(classes.heading)}>
            2FA Security
            <img src={devider} alt="#" className={classes.devider} />
          </Text>
          <div className={classes.account}>
            <img src={devider} alt="#" className={classes.devider} />
            <img src={googleLogo} alt="#" className={classes.logo} />
            <div className={classes.infoContainer}>
              <Text sm primitive0>
                Gmail
              </Text>
              <Text className={classes.label}>example@gmail.com</Text>
            </div>{" "}
            <Switch
              isChecked={gmailSecurityOn}
              setIsChecked={setGamilSecurityOn}
            />
          </div>{" "}
          <div className={classes.googleAuthenticator}>
            <img src={googleAuthenticator} alt="#" className={classes.logo} />
            <div className={classes.infoContainer}>
              <Text sm primitive0>
                Google Authenticator
              </Text>
              <Text className={classes.label}>Not set yet</Text>
            </div>{" "}
            <Button
              transparent
              className={classes.button}
              onClick={() => setStep(1)}
            >
              Enable
            </Button>
          </div>
        </div>
        <div className={clsx(classes.devices)}>
          <Text sm primitive0 className={clsx(classes.heading)}>
            Active Devices
            <img src={devider} alt="#" className={classes.devider} />
          </Text>
          <div className={classes.macBook}>
            <img src={devider} alt="#" className={classes.devider} />
            <img src={macBookImg} alt="#" className={classes.logo} />

            <div>
              <Text sm primitive0 className={classes.labelHeading}>
                Macbook <span className={classes.dot}>•</span> Chrome{" "}
                <span className={classes.dot}>•</span>{" "}
                <span className={classes.current}>Current</span>
              </Text>
              <Text className={classes.label}>103.190.89.240</Text>
              <Text className={classes.label}>Today at 06:45 am</Text>
            </div>
          </div>
          <div className={classes.android}>
            <img src={andoiredImg} alt="#" className={classes.logo} />

            <div>
              <Text sm primitive0 className={classes.labelHeading}>
                Android <span className={classes.dot}>•</span> App{" "}
              </Text>
              <Text className={classes.label}>103.190.89.240</Text>
              <Text className={classes.label}>Today at 06:45 am</Text>
            </div>
          </div>
        </div>
      </div>
      <SetNewPassword
        isActive={showSetPasswordModal}
        onClose={() => setShowSetPasswordModal(false)}
        onSave={handleNewPassword}
      />{" "}
      <AddGoogleAuthenticatorModal
        isActive={step === 1}
        onClose={() => setStep(null)}
        onContinue={handleAuthenticator}
      />
      <Verify
        isActive={step === 2}
        onClose={() => setStep(null)}
        onVerify={handleVerify}
      />
    </>
  );
};
export default Security;
