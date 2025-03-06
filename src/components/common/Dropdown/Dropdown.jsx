import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { Text } from "components/common";
import useOnClickOutside from "hooks";
import classes from "./Dropdown.module.css";

const Dropdown = ({
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  v2,
  transparent,
}) => {
  const ref = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={clsx(classes.dropdown, v2 && classes.v2)} ref={ref}>
      <div
        className={clsx(
          classes.labelContainer,
          transparent && classes.transparent
        )}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <Text primitive100>{selectedValue}</Text>
        {isActive ? (
          <FaAngleUp className={classes.arrow} />
        ) : (
          <FaAngleDown className={classes.arrow} />
        )}
      </div>
      <div
        ref={dropdownRef}
        className={clsx(classes.dropdownMain, isActive && classes.active)}
        role="listbox"
        aria-expanded={isActive}
      >
        <div className={clsx(classes.list, "overflow")}>
          {items?.map((item, idx) => (
            <div
              key={`item-${idx}`}
              className={clsx(
                classes.listItem,
                selectedValue === item && classes.active
              )}
              onClick={() => {
                setIsActive(false);
                onSelect(item);
              }}
            >
              <Text medium>{item}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
