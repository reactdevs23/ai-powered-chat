import React from "react";
import classes from "./Buttons.module.css";
import { Button } from "components/common";
import clsx from "clsx";

const Buttons = ({
  step,
  setStep,
  verificationSuccess,

  selectedMethod,
  handleCancel,
}) => {
  // Handle Cancel

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <>
      {!(selectedMethod === 3 && step === 1) &&
        !verificationSuccess &&
        step > 3 && (
          <div className={classes.buttonContainer}>
            <Button
              className={clsx(classes.cancelButton, classes.button)}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            {step > 0 && (
              <Button
                className={clsx(classes.backButton, classes.button)}
                onClick={handleBack}
              >
                Back
              </Button>
            )}
          </div>
        )}
    </>
  );
};

export default Buttons;
