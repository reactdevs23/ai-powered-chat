import { useRef } from "react";
import clsx from "clsx";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { Text } from "components/common";
import useOnClickOutside from "hooks";
import classes from "./CoinsDropdown.module.css";

const CoinsDropdown = ({
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
    <div className={clsx(classes.dropdown, v2 && classes.v2)} ref={ref}>
      <div
        className={classes.labelContainer}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <img src={selectedValue.logo} alt="#" className={classes.logo} />
        <Text primitive100 base>
          {selectedValue.symbol}
        </Text>

        <Text primitive400 xs className={classes.amount}>
          {selectedValue.amount}
        </Text>
        {isActive ? (
          <FaAngleUp className={clsx(classes.arrow, classes.arrowUp)} />
        ) : (
          <FaAngleDown className={clsx(classes.arrow)} />
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
                selectedValue?.symbol === item.symbol && classes.active
              )}
              onClick={() => {
                setIsActive(false);
                onSelect(item);
              }}
            >
              {" "}
              <img src={item.logo} alt="#" className={classes.logo} />
              <Text primitive100 base>
                {item.symbol}
              </Text>
              <Text primitive400 xs className={classes.amount}>
                {item.amount}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinsDropdown;
