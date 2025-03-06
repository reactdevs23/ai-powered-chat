import React, { useRef, useState } from "react";
import classes from "./Profile.module.css";
import { Button, Input, Text } from "components/common";
import { IoMdMore } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import {
  appleLogo,
  devider,
  discordLogo,
  fbLogo,
  githubLogo,
  googleLogo,
  logo,
  userImgPlaceholder,
} from "images";
import clsx from "clsx";
import { RiEdit2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import Dropdown from "../Dropdown/Dropdown";
import WarningModal from "Modals/WarningModal/WarningModal";
import ConnectedAccount from "./ConnectedAccount/ConnectedAccount";
const existingEmails = ["existing@example.com", "user@example.com"];
const allAccounts = [
  {
    logo: googleLogo,
    name: "Google",
    info: "user@gmail.com",
  },
  {
    logo: githubLogo,
    name: "GitHub",
    info: "github.com/username",
  },
  {
    logo: fbLogo,
    name: "Facebook",
    info: "facebook.com/username",
  },
  {
    logo: appleLogo,
    name: "Apple",
    info: "user@icloud.com",
  },
  {
    logo: discordLogo,
    name: "Discord",
    info: "discordapp.com/users/123456",
  },
];

const Profile = () => {
  const fileInputRef = useRef(null);
  // for user img handling
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024) {
        alert("Image size must be less than 100KB.");
        return;
      }
      const isValidImage = validateImage(file);
      if (isValidImage) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image (200x200px, JPEG/PNG). ");
      }
    }
  };

  const validateImage = (file) => {
    const validFormats = ["image/jpeg", "image/png"];
    if (!validFormats.includes(file.type)) {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent the parent click event
    setSelectedImage(null); // Reset image to placeholder
  };

  // User name
  const [name, setName] = useState("Jason Tatum");
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [previousName, setPreviousName] = useState(name);

  const handleEditClick = () => {
    setPreviousName(name); // Store the previous name before editing
    setIsNameEditing(true);
  };

  const handleCancelClick = () => {
    setName(previousName); // Revert to the previous name
    setIsNameEditing(false);
  };

  // User email
  const [email, setEmail] = useState("example@gmail.com");
  const [showEmailModifyDropdown, setShowEmailModifyDropdown] = useState(false);
  const [selectedEmailModifyAction, setSelectedEmailModifyAction] =
    useState(null);

  const [previousEmail, setPreviousEmail] = useState(email);
  const [emailExists, setEmailExists] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailExists(existingEmails.includes(newEmail));
  };

  const handleEmailCancelClick = () => {
    setEmail(previousEmail);

    setEmailExists(false);
    setSelectedEmailModifyAction(true);
  };
  const handleRemoveEmail = () => {
    setEmail(null);
  };

  //   connected Account
  const [showMoreAccountDropdown, setShowMoreAccountDropdwon] = useState(false);
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      logo: googleLogo,
      name: "Google",
      info: "example@gmail.com",
    },
  ]);
  return (
    <div className={classes.wrapper}>
      {/* Image Section */}
      <div className={clsx(classes.infoBox, classes.userImgBox)}>
        <div className={classes.profilePictureInfo}>
          <Text primitive0 className={classes.labelHeading}>
            Profile Picture
          </Text>
          <Text primitive500 className={classes.info}>
            <span className={classes.label}>Resolution</span>{" "}
            <span className={classes.setValue}>200x200 px,</span>
          </Text>{" "}
          <Text primitive500 className={classes.info}>
            <span className={classes.label}>Size: max</span>
            <span className={classes.setValue}> 100KB</span>
          </Text>
        </div>
        <div className={classes.userImgContainer} onClick={handleClick}>
          <img
            src={selectedImage || userImgPlaceholder}
            alt="User"
            className={classes.userImg}
          />
          {selectedImage && (
            <button className={classes.userImgChange}>Change</button>
          )}
        </div>
        {/* Hidden input for image upload */}
        <input
          ref={fileInputRef}
          type="file"
          id="imageUploadInput"
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {/* Name Section */}
      <div className={clsx(classes.infoBox, classes.nameContainer)}>
        <Text
          primitive200
          className={clsx(classes.label, classes.labelHeading)}
        >
          Name
        </Text>
        <div className={classes.spaceBetween}>
          {isNameEditing ? (
            <Input
              value={name}
              setValue={setName}
              placeholder="Enter Name"
              className={classes.input}
            />
          ) : (
            <Text semiBold primitive0 sm textRight>
              {name ? name : "_"}
            </Text>
          )}

          {isNameEditing ? (
            <div className={classes.buttonContainer}>
              <Button
                transparent
                className={classes.editedButton}
                onClick={() => setIsNameEditing(false)}
              >
                <FaCheck className={classes.checkedIcon} />
              </Button>{" "}
              <Button
                transparent
                className={classes.closeButton}
                onClick={handleCancelClick}
              >
                <IoClose className={classes.closeIcon} />
              </Button>
            </div>
          ) : (
            <Button
              transparent
              className={classes.editButton}
              onClick={handleEditClick}
            >
              <RiEdit2Line className={classes.editIcon} />
            </Button>
          )}
        </div>
      </div>

      {/* Email Section */}
      <div className={clsx(classes.infoBox, classes.emailContainer)}>
        <Text
          primitive200
          className={clsx(classes.label, classes.labelHeading)}
        >
          Email
        </Text>
        <div className={classes.spaceBetween}>
          {selectedEmailModifyAction === "Edit" ? (
            <Input
              value={email}
              setValue={setEmail}
              onChange={handleEmailChange}
              placeholder="Enter Email"
              className={classes.input}
            />
          ) : (
            <Text semiBold primitive0 sm textRight>
              {email ? email : "_"}
            </Text>
          )}

          {selectedEmailModifyAction === "Edit" ? (
            <div className={classes.buttonContainer}>
              <Button
                transparent
                className={classes.editedButton}
                onClick={() => setSelectedEmailModifyAction(null)}
              >
                <FaCheck className={classes.checkedIcon} />
              </Button>{" "}
              <Button
                transparent
                className={classes.closeButton}
                onClick={handleEmailCancelClick}
              >
                <IoClose className={classes.closeIcon} />
              </Button>
            </div>
          ) : (
            <Dropdown
              sm
              items={["Edit", "Delete"]}
              isActive={showEmailModifyDropdown}
              setIsActive={setShowEmailModifyDropdown}
              selectedValue={selectedEmailModifyAction}
              onSelect={(val) => setSelectedEmailModifyAction(val)}
            >
              <Button
                transparent
                className={clsx(
                  classes.moreButton,
                  showEmailModifyDropdown && classes.active
                )}
                onClick={() => setShowEmailModifyDropdown((prev) => !prev)}
              >
                <IoMdMore className={clsx(classes.moreIcon)} />
              </Button>
            </Dropdown>
          )}
        </div>
        {emailExists && (
          <Text className={classes.warning}>This email already exists.</Text>
        )}
      </div>
      {/* connected Account */}

      <div className={clsx(classes.infoBox, classes.connectedAccountContainer)}>
        <Text className={clsx(classes.label, classes.connectedAccountHeading)}>
          Connected Accounts
          <img src={devider} alt="#" className={classes.devider} />
        </Text>

        {connectedAccounts?.map((el, i) => (
          <ConnectedAccount
            {...el}
            key={"id-" + i}
            connectedAccounts={connectedAccounts}
            setConnectedAccounts={setConnectedAccounts}
          />
        ))}

        <Dropdown
          v2
          sm
          items={allAccounts.filter(
            (account) =>
              !connectedAccounts.some(
                (connected) => connected.name === account.name
              )
          )}
          isActive={showMoreAccountDropdown}
          setIsActive={setShowMoreAccountDropdwon}
          onSelect={(val) => setConnectedAccounts([...connectedAccounts, val])}
        >
          <Button
            wFull
            primitiveTransparent8
            className={classes.addButton}
            onClick={() => setShowMoreAccountDropdwon((prev) => !prev)}
          >
            Add Accounts{" "}
            {showMoreAccountDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </Dropdown>
      </div>
      <WarningModal
        info="Are you sure you want to delete this email?"
        isActive={selectedEmailModifyAction === "Delete"}
        onClose={() => setSelectedEmailModifyAction(null)}
        removeHandler={handleRemoveEmail}
      />
    </div>
  );
};

export default Profile;
