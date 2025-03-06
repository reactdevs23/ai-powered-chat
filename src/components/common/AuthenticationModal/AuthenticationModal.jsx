import { useState } from "react";
import classes from "./AuthenticationModal.module.css";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { Text } from "..";

const AuthenticationModal = ({ heading, children, info, onClose }) => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setIsActive(false);
    onClose && onClose();
    !onClose && navigate("/login");
  };
  return (
    <Modal
      className={classes.modal}
      isActive={isActive}
      heading={heading}
      onClose={handleClose}
    >
      {info && (
        <Text base primitive300 textCenter className={classes.info}>
          {info}
        </Text>
      )}
      {children}
    </Modal>
  );
};
export default AuthenticationModal;
