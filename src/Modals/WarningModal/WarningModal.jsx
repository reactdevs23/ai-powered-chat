import Modal from "components/common/Modal/Modal";
import { RiErrorWarningLine } from "react-icons/ri";

import classes from "./WarningModal.module.css";
import { Button, Text } from "components/common";
const WarningModal = ({ isActive, onClose, removeHandler, info }) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      noHeading
      className={classes.modal}
    >
      <div className={classes.wrapper}>
        <RiErrorWarningLine className={classes.icon} />
        <Text base primitive0 textCenter>
          {info}
        </Text>
        <div className={classes.buttonContainer}>
          <Button
            primitive800
            className={classes.cancelButton}
            onClick={onClose}
            sm
          >
            Cancel
          </Button>
          <Button
            primitiveWarning
            onClick={() => {
              removeHandler();
              onClose();
            }}
            sm
          >
            Remove
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default WarningModal;
