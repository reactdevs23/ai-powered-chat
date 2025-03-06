import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import clsx from "clsx";

import classes from "./Input.module.css";

const Input = ({
  value,
  setValue,
  search,
  placeholder,
  onKeyDown,
  onChange,
  type,
  className,
  readonly,
  noIcon,
  label,
  name,
  textarea,
  sm,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Handle change event
  const handleChange = (e) => {
    if (onChange) {
      onChange(e); // Call the passed onChange function
    } else {
      setValue(e.target.value); // Default behavior if onChange is not provided
    }
  };

  return (
    <div
      className={clsx(
        classes.inputContainer,
        className,
        search && classes.searchIconInputContainer,
        sm && classes.sm
      )}
    >
      {search && !noIcon && <CiSearch className={classes.searchIcon} />}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          className={classes.input}
          placeholder={placeholder}
          required
          readOnly={readonly}
          rows={1}
          cols={10}
        ></textarea>
      ) : (
        <input
          name={name}
          type={showPassword ? "text" : type || "text"}
          onKeyDown={onKeyDown}
          value={value}
          onChange={handleChange}
          className={classes.input}
          placeholder={placeholder}
          required
          readOnly={readonly}
        />
      )}

      {type === "password" && (
        <>
          {showPassword ? (
            <FaRegEye
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaRegEyeSlash
              className={classes.eye}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}

      {search && value && (
        <MdClose className={classes.close} onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default Input;
