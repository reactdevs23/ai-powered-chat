import { IoClose } from "react-icons/io5";
import { Heading } from "..";
import classes from "./Modal.module.css";
import clsx from "clsx";
import { devider } from "images";

const Modal = ({
  isActive,
  onClose,
  className,

  heading,
  children,

  noHeading,
  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(isActive && classes.active, classes.modalOverlay)}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        {!noHeading && (
          <div className={clsx(classes.header)}>
            <Heading primitive50 medium lg>
              {heading}
            </Heading>
            <button className={classes.closeButton} onClick={onClose}>
              <IoClose className={classes.closeIcon} />
            </button>
            <img src={devider} alt="#" className={classes.devider} />
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default Modal;
