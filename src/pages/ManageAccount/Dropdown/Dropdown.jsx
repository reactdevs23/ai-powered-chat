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
  const [dropUp, setDropUp] = useState(false);

  // Close dropdown when clicking outside
  useOnClickOutside(ref, () => setIsActive(false));

  // Adjust dropdown position based on space available
  useEffect(() => {
    if (isActive && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - dropdownRect.bottom;
      const spaceAbove = dropdownRect.top;

      // Check if dropdown should open upwards
      setDropUp(spaceBelow < 200 && spaceAbove > spaceBelow);
    }
  }, [isActive]);

  return (
    <div className={clsx(classes.dropdown, v2 && classes.wFull)} ref={ref}>
      <div className={classes.labelContainer}>{children}</div>
      <div
        ref={dropdownRef}
        className={clsx(
          classes.dropdownMain,
          isActive && classes.active,
          dropUp && classes.dropUp,
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
              role="option"
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
