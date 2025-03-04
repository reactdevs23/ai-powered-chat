import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import clsx from "clsx";
import { Button, Text } from "components/common";
import VerifyIdentity from "components/Athentication/VerifyIdentity/VerifyIdentity";
import AddNew from "./AddNew/AddNew";
import Verify from "components/Athentication/VerifyIdentity/Verify/Verify";
import classes from "./Security.module.css";
import ScanQrCode from "./ScanQrCode/ScanQrCode";
import Successfull from "components/common/Successfull/Successfull";
import { RiEdit2Line } from "react-icons/ri";
import { countries } from "common/constants";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Buttons from "./Buttons/Buttons";
import TopHeader from "./TopHeader/TopHeader";
import { getInfo, getTitle } from "utils/utils";

///all key should be same as thaStatus here key:email
const all2FAItems = [
  { label: "Email", key: "email", value: 1 },
  { label: "SMS", key: "sms", value: 2 },
  { label: "Authenticator App", key: "authenticatorApp", value: 3 },
];
const allUserInfo = [
  { label: "Email", key: "email", value: 4 },
  { label: "Password", key: "password", value: 5 },
];
const allSigninWithInfo = [
  {
    label: "Sign-in with",
    logo: <FcGoogle className={classes.google} />,
    key: "googleId",
    value: 6,
  },
  {
    label: "Sign-in with",
    logo: <FaApple className={classes.apple} />,
    key: "appleID",
    value: 7,
  },
];
const getStatusIcon = (status, setStatus, IconClose, IconPlus) =>
  status ? (
    <IconClose className={classes.icon} />
  ) : (
    <IconPlus className={classes.icon} />
  );

const getButtonClass = (status, className) =>
  status ? className.removeButton : className.addButton;

const Security = ({ step, setStep }) => {
  console.log(step);

  const [methodNumber, setMethodNumber] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const [
    showVerificationSuccessComponent,
    setShowVerificationSuccessComponent,
  ] = useState(false);

  // all key should be same as alltfwotems key
  const [twoFAStatus, setTwoFAStatus] = useState({
    email: "imran@da.com",
    phone: "",
    authenticatorApp: "",
  });
  const [selectectedCountryCode, setSelectedCountryCode] = useState(
    countries[0]
  );

  const [userInfo, setUserInfo] = useState({
    email: "imran@gmail.com",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [signInInfo, setSignInInfo] = useState({
    googleId: "imran@gmail.com",
    appleID: "",
  });

  const handleToggle = (type, method) => {
    // Reset verification success state
    setShowVerificationSuccessComponent(false);

    setSelectedMethod(method);

    const determineNextStep = () => {
      if (type === "2FA") {
        // Check if additional step is needed for Authenticator App
        if (method.value === 3 && !twoFAStatus.authenticatorApp) {
          return 1; // Go to the first step for Authenticator App setup
        }
      }
      return step + 1; // Move to the next step
    };

    // Set the next step
    setStep(determineNextStep());
  };

  const handleVerify = (method, successCallback) => {
    const resetVerification = () => {
      setMethodNumber(0);
      setShowVerificationSuccessComponent(false);
      setStep(0);
    };

    const updateTwoFAStatus = (field) => {
      setTwoFAStatus((prev) => ({ ...prev, [field]: "" }));
    };

    switch (method) {
      case 1:
        if (twoFAStatus.email) {
          updateTwoFAStatus("email");
          resetVerification();
        } else {
          setStep((prev) => prev + 1);
        }

        break;

      case 2:
        if (twoFAStatus.phone) {
          updateTwoFAStatus("phone");
          resetVerification();
        } else {
          setStep((prev) => prev + 1);
        }

        break;

      case 3:
        resetVerification();
        if (twoFAStatus.authenticatorApp) {
          updateTwoFAStatus("authenticatorApp");
        }

        break;

      case 6:
      case 7:
        resetVerification();
        break;

      default:
        setMethodNumber(0);
        setStep((prev) => prev + 1);
        break;
    }

    if (successCallback) {
      successCallback();
    }
    setMethodNumber(0);
  };

  const handleCancel = () => {
    setShowVerificationSuccessComponent(false);
    setStep(0);
    setMethodNumber(0);
    setSelectedMethod(null);
  };
  const renderVerifyStep = () => {
    if (showVerificationSuccessComponent) {
      return (
        <Successfull
          heading={getTitle(selectedMethod.value)}
          info={getInfo(selectedMethod.value)}
          onBack={() => setStep(0)}
        />
      );
    }

    if (selectedMethod.value === 3) {
      if (step === 1 && !twoFAStatus.authenticatorApp) {
        return (
          <ScanQrCode
            onCancel={handleCancel}
            onContinue={() => setStep(step + 1)}
          />
        );
      }
      if (step === 2 && !twoFAStatus.authenticatorApp) {
        return (
          <Verify
            xl2
            onVerify={() => {
              handleVerify(3, () =>
                setTwoFAStatus((prev) => ({ ...prev, authenticatorApp: "On" }))
              );
            }}
            methodNumber={3}
            codeSentOn=""
          />
        );
      }
    }

    if (methodNumber !== 3 && step < 4) {
      return (
        <VerifyIdentity
          xl2
          type2
          methodNumber={methodNumber}
          setMethodNumber={setMethodNumber}
          step={step}
          setStep={setStep}
          onVerify={() => {
            handleVerify(selectedMethod.value);
          }}
        />
      );
    }

    if (step === 4 || (methodNumber === 3 && step === 3)) {
      return (
        <AddNew
          step={step}
          setStep={setStep}
          item={selectedMethod.value}
          email={
            selectedMethod.value === 1
              ? twoFAStatus.email
              : selectedMethod.value === 4
              ? userInfo.email
              : ""
          }
          setEmail={(email) => {
            if (selectedMethod.value === 1) {
              setTwoFAStatus((prev) => ({ ...prev, email }));
            }
            if (selectedMethod.value === 4) {
              setUserInfo((prev) => ({ ...prev, email }));
            }
          }}
          phone={twoFAStatus.phone}
          setPhone={(phone) => setTwoFAStatus((prev) => ({ ...prev, phone }))}
          selectedCountryCode={selectectedCountryCode}
          setSelectedCountryCode={setSelectedCountryCode}
          newPassword={userInfo.newPassword}
          setNewPassword={(newPassword) =>
            setUserInfo((prev) => ({ ...prev, newPassword }))
          }
          confirmNewPassword={userInfo.confirmNewPassword}
          setConfirmNewPassword={(confirmNewPassword) =>
            setUserInfo((prev) => ({ ...prev, confirmNewPassword }))
          }
          setShowVerificationSuccessComponent={
            setShowVerificationSuccessComponent
          }
          onSavePassword={() => {
            if (selectedMethod.value === 5) {
              setShowVerificationSuccessComponent(true);
            }
          }}
        />
      );
    }
    if (selectedMethod.value === 5) {
      return;
    }
    return (
      <Verify
        xl2
        onVerify={() => {
          handleVerify(selectedMethod.value);
          setShowVerificationSuccessComponent(true);
        }}
        methodNumber={selectedMethod.value}
        codeSentOn={
          selectedMethod.value === 1
            ? twoFAStatus.email
            : selectedMethod === 2
            ? twoFAStatus.phone
            : selectedMethod === 5
            ? userInfo.email
            : ""
        }
      />
    );
  };

  return (
    <div className={classes.wrapper}>
      {step < 1 ? (
        <>
          {/* 2fa container */}
          <div className={classes.container2FA}>
            <div className={classes.header}>
              <Text semiBold base>
                2FA Security
              </Text>
              <Text sm font600 className={classes.on}>
                On
              </Text>
            </div>
            {all2FAItems.map((method) => (
              <div
                key={method.value}
                className={clsx(
                  classes.infoBox,
                  method.value === 1 && classes.email2FaContainer
                )}
              >
                <Text sm>{method.label}</Text>
                <Text textRight font600>
                  {method.value === 1
                    ? twoFAStatus.email || "_"
                    : method.value === 2
                    ? twoFAStatus.phone || "_"
                    : method.value === 3
                    ? twoFAStatus.authenticatorApp || "_"
                    : ""}
                </Text>
                <Button
                  className={clsx(
                    classes.actionButton,
                    getButtonClass(twoFAStatus[method.key], classes)
                  )}
                  onClick={() => handleToggle("2FA", method)}
                >
                  {getStatusIcon(
                    twoFAStatus[method.key],
                    setTwoFAStatus,
                    MdClose,
                    FiPlus
                  )}
                </Button>
              </div>
            ))}
          </div>

          {/* user info container */}
          <div className={classes.userInfo}>
            {allUserInfo.map((method) => (
              <div key={method.value} className={clsx(classes.infoBox)}>
                <Text sm>{method.label}</Text>
                <Text textRight font600>
                  {method.value === 4
                    ? userInfo.email || "_"
                    : method.value === 5
                    ? userInfo.newPassword || "_"
                    : ""}
                </Text>
                <Button
                  className={clsx(
                    classes.actionButton,
                    classes.editButton,
                    getButtonClass(userInfo[method.key], classes)
                  )}
                  onClick={() => handleToggle("userInfo", method)}
                >
                  {getStatusIcon(
                    userInfo[method.key],
                    setUserInfo,
                    RiEdit2Line,
                    RiEdit2Line
                  )}
                </Button>
              </div>
            ))}
          </div>

          {/* sign in info container */}
          <div className={classes.signinInfo}>
            {allSigninWithInfo.map((method) => (
              <div key={method.value} className={clsx(classes.infoBox)}>
                <Text sm>{method.label}</Text>
                <Text textLeft font600 className={classes.logoContainer}>
                  {method.logo}
                </Text>
                <Button
                  className={clsx(
                    classes.actionButton,

                    getButtonClass(signInInfo[method.key], classes)
                  )}
                  onClick={() => handleToggle("signIn", method)}
                >
                  {getStatusIcon(
                    signInInfo[method.key],
                    setSignInInfo,
                    MdClose,
                    FiPlus
                  )}
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={classes.verifyIdentity}>
          <TopHeader
            step={step}
            selectedMethod={selectedMethod}
            twoFAStatus={twoFAStatus}
            showVerificationSuccessComponent={showVerificationSuccessComponent}
            methodNumber={methodNumber}
          />
          <div className={classes.myWrapper}>{renderVerifyStep()}</div>
          <Buttons
            step={step}
            setStep={setStep}
            showVerificationSuccessComponent={showVerificationSuccessComponent}
            selectedMethod={selectedMethod}
            handleCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(Security);
