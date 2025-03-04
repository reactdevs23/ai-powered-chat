import React, { useState } from "react";
import classes from "./Preferences.module.css";
import { Text } from "components/common";
import Checkbox from "components/common/CheckBox/CheckBox";

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    accountAccessed: { email: true, push: false },
    passwordChanged: { email: true, push: false },
    suspiciousActivity: { email: true, push: false },
    regularUpdates: { email: true, push: false },
    investmentNews: { email: true, push: false },
    fundsDeposited: { email: true, push: false },
    fundsWithdrawn: { email: true, push: false },
    referralUpdates: { email: true, push: false },
    offersPromotions: { email: true, push: false },
  });

  // Handle checkbox change
  const handleCheckboxChange = (category, type) => {
    setPreferences((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [type]: !prevState[category][type],
      },
    }));
  };

  const categories = [
    { key: "accountAccessed", label: "Account accessed" },
    { key: "passwordChanged", label: "Password changed" },
    { key: "suspiciousActivity", label: "Suspicious activity" },
    { key: "regularUpdates", label: "Regular updates" },
    { key: "investmentNews", label: "New investment news" },
    { key: "fundsDeposited", label: "Funds deposited" },
    { key: "fundsWithdrawn", label: "Funds withdrawn" },
    { key: "referralUpdates", label: "Referral updates" },
    { key: "offersPromotions", label: "Offers and promotions" },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Text semiBold base primitive700>
          Notification Preferences
        </Text>
        <Text primitive500 sm semiBold>
          Email
        </Text>
        <Text primitive500 sm semiBold>
          Push
        </Text>
      </div>

      {categories.map(({ key, label }) => (
        <div key={key} className={classes.infoBox}>
          <Text primitive500 sm>
            {label}
          </Text>
          <Checkbox
            checked={preferences[key].email}
            setChecked={() => handleCheckboxChange(key, "email")}
          />
          <Checkbox
            checked={preferences[key].push}
            setChecked={() => handleCheckboxChange(key, "push")}
          />
        </div>
      ))}
    </div>
  );
};

export default Preferences;
