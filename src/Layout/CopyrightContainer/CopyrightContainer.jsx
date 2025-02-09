import React from "react";
import classes from "./CopyrightContainer.module.css";

import clsx from "clsx";
import { Text } from "components/common";
const CopyrightContainer = () => {
  return (
    <div className={classes.wrapper}>
      {" "}
      <div className={clsx(classes.copyRightContainer, "container")}>
        <Text sm primitive400 className={classes.copyRight}>
          © 2025 [Brand Name]. All Rights Reserved.
        </Text>

        <Text sm primitive400 className={classes.policyAndCondition}>
          <a href="#/">Terms and Condition</a> <a href="#/">Privacy Policy</a>
        </Text>
      </div>
    </div>
  );
};

export default CopyrightContainer;
