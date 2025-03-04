import { Text } from "components/common";
import React from "react";
import classes from "./TopHeader.module.css";
import { GoDotFill } from "react-icons/go";
import clsx from "clsx";

const TopHeader = ({
  step,
  selectedMethod,
  twoFAStatus,
  verificationSuccess,
}) => {
  // Determine the number of steps based on the selected method and 2FA status
  const stepsCount = (() => {
    if (selectedMethod.value === 1) {
      return twoFAStatus.email ? 3 : 5;
    } else if (selectedMethod.value === 2) {
      return twoFAStatus.phone ? 3 : 5;
    } else if (selectedMethod.value === 3) {
      return 3;
    } else if (
      selectedMethod.value === 5 ||
      selectedMethod.value === 6 ||
      selectedMethod.value === 7
    ) {
      return 4;
    } else {
      return 5; // Default case
    }
  })();

  return (
    <>
      <div className={classes.topHeader}>
        <Text base semiBold>
          {selectedMethod.label}
        </Text>
        <div className={classes.steps}>
          {Array.from({ length: stepsCount }, (_, index) => (
            <GoDotFill
              key={index}
              className={clsx(
                classes.step,
                step === index + 1 && classes.currentStep,
                step > index + 1 && classes.completedStep
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopHeader;
