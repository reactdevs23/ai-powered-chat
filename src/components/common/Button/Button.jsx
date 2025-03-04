import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { FaChevronCircleRight } from "react-icons/fa";

const Button = ({
  children,
  onClick,
  href,
  transparent,
  btnPrimary,
  primary,

  primitive800,
  primitiveTransparent8,
  primitiveWarning,
  wFull,
  className,
  to,
  loading,
  base,
  sm,
  lg,
  radius,
  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            radius && classes.radius,
            base && classes.base,
            sm && classes.sm,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            primary && classes.primary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            primitiveWarning && classes.primitiveWarning,

            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={loading}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
          {btnPrimary && <FaChevronCircleRight className={classes.arrow} />}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,

            radius && classes.radius,
            base && classes.base,
            sm && classes.sm,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            primary && classes.primary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            primitiveWarning && classes.primitiveWarning,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}{" "}
          {btnPrimary && <FaChevronCircleRight className={classes.arrow} />}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,

            radius && classes.radius,
            base && classes.base,
            sm && classes.sm,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            primary && classes.primary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            primitiveWarning && classes.primitiveWarning,
            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}{" "}
          {btnPrimary && <FaChevronCircleRight className={classes.arrow} />}
        </Link>
      ) : (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,

            radius && classes.radius,
            base && classes.base,
            sm && classes.sm,
            lg && classes.lg,
            primitive800 && classes.primitive800,
            btnPrimary && classes.btnPrimary,
            primary && classes.primary,
            transparent && classes.transparent,
            primitiveTransparent8 && classes.primitiveTransparent8,
            primitiveWarning && classes.primitiveWarning,
            wFull && classes.wFull,
            loading && classes.loading
          )}
        >
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}{" "}
          {btnPrimary && <FaChevronCircleRight className={classes.arrow} />}
        </button>
      )}
    </>
  );
};

export default Button;
