import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Text } from "components/common";
import useOnClickOutside from "hooks";
import classes from "./Dropdown.module.css";

const Dropdown = ({
  children,
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  v2,
}) => {
  const ref = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={clsx(classes.dropdown, v2 && classes.wFull)} ref={ref}>
      <div className={classes.labelContainer}>{children}</div>
      <div
        ref={dropdownRef}
        className={clsx(
          classes.dropdownMain,
          isActive && classes.active,

          v2 && classes.v2
        )}
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
              {v2 ? (
                <>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                  />
                  <Text medium>{item.name}</Text>
                </>
              ) : (
                <Text medium>{item}</Text>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
