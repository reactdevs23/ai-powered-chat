import { useEffect, useRef } from "react";
import clsx from "clsx";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import classes from "./Dropdown.module.css";

import useOnClickOutside from "hooks";
import { Text } from "components/common";
import { Link } from "react-router-dom";

const Dropdown = ({
  children,
  isActive,
  dropdownItems,
  selectedValue,
  onSelect,
  setIsActive,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div className={clsx(classes.dropdown)} ref={ref}>
      <div
        className={classes.labelContainer}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text>{children}</Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.active)} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          {dropdownItems?.map((item, idx) => {
            return (
              <Link to={item.to} key={idx}>
                <Text
                  key={"id-" + idx}
                  className={clsx(classes.listItem)}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  {item.navItem}
                </Text>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
