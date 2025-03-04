import { Button, Text } from "components/common";
import { googleLogo } from "images";
import classes from "./ConnectedAccount.module.css";
import { IoMdMore } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Dropdown from "pages/ManageAccount/Dropdown/Dropdown";
import WarningModal from "Modals/WarningModal/WarningModal";

const ConnectedAccount = ({
  logo,
  name,
  info,
  connectedAccounts,
  setConnectedAccounts,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const handleRemover = () => {
    setConnectedAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account.name !== name)
    );
    setSelectedAction(null); // Close modal after removal
  };
  return (
    <>
      <div className={classes.connectedAccount}>
        <img src={logo} alt="#" className={classes.connectedAccountLogo} />
        <div className={classes.infoContainer}>
          <Text sm primitive0>
            {name}
          </Text>
          <Text className={classes.label}>{info}</Text>
        </div>{" "}
        <Dropdown
          sm
          items={["Remove"]}
          isActive={showDropdown}
          setIsActive={setShowDropdown}
          selectedValue={selectedAction}
          onSelect={(val) => setSelectedAction(val)}
        >
          <Button
            transparent
            className={classes.moreButton}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <IoMdMore className={classes.moreIcon} />
          </Button>
        </Dropdown>
      </div>
      <WarningModal
        info="Are you sure you want to delete this connected account?"
        isActive={selectedAction === "Remove"}
        onClose={() => setSelectedAction(null)}
        removeHandler={handleRemover}
      />
    </>
  );
};
export default ConnectedAccount;
