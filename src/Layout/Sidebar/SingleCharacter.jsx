import clsx from "clsx";
import { useState } from "react";
import classes from "./Sidebar.module.css";
import { IoMdMore } from "react-icons/io";
import Dropdown from "pages/ManageAccount/Dropdown/Dropdown";
import { Text } from "components/common";

const SingleCharacter = ({ character, icon }) => {
  const [activeCharacter, setActiveCharacter] = useState("");
  const handleActiveCharacter = (character) => {
    setActiveCharacter(character);
  };

  //character modify dropdown
  const [showCharacterModifyDropdown, setShowCharacterModifyDropdown] =
    useState(false);
  const [selectedCharacterModifyAction, setSelectedCharacterModifyAction] =
    useState("Delete");
  return (
    <div
      className={clsx(
        classes.character,
        activeCharacter === character && classes.activeCharacter
      )}
      onClick={() => handleActiveCharacter(character)}
    >
      <img src={icon} alt="charecter" className={classes.characterIcon} />{" "}
      <Text primitive200 sm className={classes.characterName}>
        {character}
      </Text>{" "}
      <Dropdown
        sm
        items={["Rename", "Delete"]}
        isActive={showCharacterModifyDropdown}
        setIsActive={setShowCharacterModifyDropdown}
        selectedValue={selectedCharacterModifyAction}
        onSelect={(val) => setSelectedCharacterModifyAction(val)}
      >
        <button
          className={classes.moreButton}
          onClick={() => setShowCharacterModifyDropdown((prev) => !prev)}
        >
          <IoMdMore />
        </button>
      </Dropdown>
    </div>
  );
};
export default SingleCharacter;
