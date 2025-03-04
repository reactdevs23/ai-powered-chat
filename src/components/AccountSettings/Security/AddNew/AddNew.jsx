import React, { useRef, useState } from "react";
import classes from "./AddNew.module.css";
import Header from "components/Athentication/Header/Header";
import { Button, Input } from "components/common";
import PhoneNumberDropdown from "components/common/PhoneNumberDropdown/PhoneNumberDropdown";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { handleKeyDown } from "hooks";

const AddNew = ({
  item,
  email,
  phone,
  setEmail,
  setPhone,
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
  selectedCountryCode,
  setSelectedCountryCode,
  setStep,
  xl2,
  onSavePassword,
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownRef = useRef(null);

  return (
    <>
      {" "}
      {(item === 1 || item === 4) && (
        <Header
          xl2
          heading="Enter your New email"
          info="We will send you an email with 6 digit verification code to your email."
        />
      )}
      {item === 2 && (
        <Header
          xl2
          heading="Enter your New phone"
          info="We will send you a message with 6 digit verification code to your phone."
        />
      )}{" "}
      {item === 5 && (
        <Header
          xl2
          heading="Change Password"
          info="Enter your new password. Ensure your password is strong enough."
        />
      )}
      <div className={classes.inputWrapper}>
        {(item === 1 || item === 4) && (
          <Input
            value={email}
            setValue={setEmail}
            placeholder="Email address"
          />
        )}
        {item === 2 && (
          <div className={classes.phoneNumberContainer}>
            <div ref={dropdownRef}>
              <PhoneNumberDropdown
                isActive={isDropdownActive}
                selectedValue={selectedCountryCode}
                onSelect={(val) => {
                  setSelectedCountryCode(val);
                  setIsDropdownActive(false);
                }}
              >
                <div
                  className={classes.dropdownItem}
                  onClick={() => {
                    setIsDropdownActive((prev) => !prev);
                  }}
                >
                  <span className={classes.code}>
                    {selectedCountryCode.code}
                  </span>
                  {isDropdownActive ? (
                    <FaAngleUp className={classes.arrow} />
                  ) : (
                    <FaAngleDown className={classes.arrow} />
                  )}
                </div>
              </PhoneNumberDropdown>
            </div>
            <Input
              className={classes.input}
              onKeyDown={handleKeyDown}
              type="number"
              placeholder="Phone number"
              value={phone}
              setValue={setPhone}
            />
          </div>
        )}

        {item === 5 && (
          <>
            <Input
              type="password"
              value={newPassword}
              setValue={setNewPassword}
              placeholder="New Password"
            />{" "}
            <Input
              type="password"
              value={confirmNewPassword}
              setValue={setConfirmNewPassword}
              placeholder="Confirm new password"
            />
          </>
        )}

        <Button
          wFull
          onClick={() => {
            onSavePassword && onSavePassword();
            setStep((prev) => prev + 1);
          }}
        >
          {item === 5 ? "Save Password" : "Continue"}
        </Button>
      </div>
    </>
  );
};

export default AddNew;
