import React, { useState } from "react";
import classes from "./UserProfile.module.css";
import { Button, Dropdown, Input, Text } from "components/common";
import { closeIcon, userImgPlaceholder } from "images";
import clsx from "clsx";
import { RiEdit2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

const UserProfile = () => {
  // for user img handling
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const isValidImage = validateImage(file);
      if (isValidImage) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image (150x150px, JPEG/PNG).");
      }
    }
  };

  const validateImage = (file) => {
    const validFormats = ["image/jpeg", "image/png"];
    if (!validFormats.includes(file.type)) {
      return false;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    return new Promise((resolve) => {
      img.onload = () => {
        const isValidSize = img.width === 150 && img.height === 150;
        resolve(isValidSize);
      };
    });
  };

  const handleClick = () => {
    document.getElementById("imageUploadInput").click();
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevent the parent click event
    setSelectedImage(null); // Reset image to placeholder
  };

  // User name
  const [name, setName] = useState("Jason Tatum");
  const [isNameEditing, setIsNameEditing] = useState(false);

  // User birthdate
  const [birthdate, setBirthdate] = useState("1995-08-10");
  const [isBirthdateEditing, setIsBirthdateEditing] = useState(false);

  const formatBirthdate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // User gender
  const [gender, setGender] = useState("Male");
  const [isGenderEditing, setIsGenderEditing] = useState(false);
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const genderDropdownItems = ["Male", "Female"];

  // Availability
  const [availability, setAvailability] = useState("Available");
  const [isAvailabilityEditing, setIsAvailabilityEditing] = useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] =
    useState(false);
  const availabilityDropdownItems = ["Available", "Not Available"];

  return (
    <div className={classes.wrapper}>
      {/* Image Section */}
      <div className={clsx(classes.infoBox, classes.userImgBox)}>
        <div>
          <Text primitive700 base>
            Photo
          </Text>
          <Text primitive500 sm>
            150x150px JPEG, PNG Image
          </Text>
        </div>
        <div className={classes.userImgContainer} onClick={handleClick}>
          <img
            src={selectedImage || userImgPlaceholder}
            alt="User"
            className={classes.userImg}
          />
          {selectedImage && (
            <img
              src={closeIcon}
              alt="Close"
              className={classes.closeIcon}
              onClick={handleCloseClick}
            />
          )}
        </div>
        {/* Hidden input for image upload */}
        <input
          type="file"
          id="imageUploadInput"
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {/* Name Section */}
      <div className={clsx(classes.infoBox, classes.nameContainer)}>
        <Text primitive500 sm className={classes.label}>
          Name
        </Text>
        {isNameEditing ? (
          <Input
            value={name}
            setValue={setName}
            placeholder="Enter Name"
            className={classes.input}
          />
        ) : (
          <Text semiBold primitive700 base textRight>
            {name ? name : "_"}
          </Text>
        )}
        {isNameEditing ? (
          <Button
            transparent
            className={classes.editedButton}
            onClick={() => setIsNameEditing(false)}
          >
            <FaCheck className={classes.checkedIcon} />
          </Button>
        ) : (
          <Button
            transparent
            className={classes.editButton}
            onClick={() => setIsNameEditing(true)}
          >
            <RiEdit2Line className={classes.editIcon} />
          </Button>
        )}
      </div>

      {/* Birthdate Section */}
      <div className={clsx(classes.infoBox, classes.birthdateContainer)}>
        <Text primitive500 sm className={classes.label}>
          Birthdate
        </Text>
        {isBirthdateEditing ? (
          <Input
            type="date"
            value={birthdate}
            setValue={setBirthdate}
            className={classes.input}
          />
        ) : (
          <Text semiBold primitive700 base textRight>
            {birthdate ? formatBirthdate(birthdate) : "_"}
          </Text>
        )}
        {isBirthdateEditing ? (
          <Button
            transparent
            className={classes.editedButton}
            onClick={() => setIsBirthdateEditing(false)}
          >
            <FaCheck className={classes.checkedIcon} />
          </Button>
        ) : (
          <Button
            transparent
            className={classes.editButton}
            onClick={() => setIsBirthdateEditing(true)}
          >
            <RiEdit2Line className={classes.editIcon} />
          </Button>
        )}
      </div>

      {/* Gender Section */}
      <div className={clsx(classes.infoBox, classes.genderContainer)}>
        <Text primitive500 sm className={classes.label}>
          Gender
        </Text>
        {isGenderEditing ? (
          <Dropdown
            sm
            items={genderDropdownItems}
            isActive={showGenderDropdown}
            setIsActive={setShowGenderDropdown}
            selectedValue={gender}
            onSelect={(val) => setGender(val)}
          />
        ) : (
          <Text semiBold primitive700 base textRight>
            {gender ? gender : "_"}
          </Text>
        )}
        {isGenderEditing ? (
          <Button
            transparent
            className={classes.editedButton}
            onClick={() => setIsGenderEditing(false)}
          >
            <FaCheck className={classes.checkedIcon} />
          </Button>
        ) : (
          <Button
            transparent
            className={classes.editButton}
            onClick={() => setIsGenderEditing(true)}
          >
            <RiEdit2Line className={classes.editIcon} />
          </Button>
        )}
      </div>

      {/* Availability Section */}
      <div className={clsx(classes.infoBox, classes.availabilityContainer)}>
        <Text primitive500 sm className={classes.label}>
          Availability
        </Text>
        {isAvailabilityEditing ? (
          <Dropdown
            sm
            items={availabilityDropdownItems}
            isActive={showAvailabilityDropdown}
            setIsActive={setShowAvailabilityDropdown}
            selectedValue={availability}
            onSelect={(val) => setAvailability(val)}
          />
        ) : (
          <Text
            semiBold
            primitive700
            base
            textRight
            font600
            className={clsx(
              classes.availability,
              availability === "Available" && classes.available,
              availability === "Not Available" && classes.notAvailable
            )}
          >
            {availability ? availability : "_"}
          </Text>
        )}
        {isAvailabilityEditing ? (
          <Button
            transparent
            className={classes.editedButton}
            onClick={() => setIsAvailabilityEditing(false)}
          >
            <FaCheck className={classes.checkedIcon} />
          </Button>
        ) : (
          <Button
            transparent
            className={classes.editButton}
            onClick={() => setIsAvailabilityEditing(true)}
          >
            <RiEdit2Line className={classes.editIcon} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
