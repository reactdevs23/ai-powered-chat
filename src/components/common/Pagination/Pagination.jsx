import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import classes from "./Pagination.module.css";

import { usePagination, DOTS } from "hooks/usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,

    className,
    currentItemsCount,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 350);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 350);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  // Calculate the range of rows to display
  const firstRowIndex = (currentPage - 1) * pageSize + 1;
  const lastRowIndex =
    firstRowIndex + currentItemsCount.length - 1 > totalCount
      ? totalCount.length
      : firstRowIndex + currentItemsCount.length - 1;
  return (
    <ul
      className={clsx("pagination-container", classes.pagination, {
        [className]: className,
        [classes.mobile]: isMobile, // Add a CSS class for mobile styling
      })}
    >
      {!isMobile && (
        <li
          className={clsx(
            classes.paginationItem,
            classes.dekstopArrow,
            currentPage === 1 && classes.disabled
          )}
          onClick={onPrevious}
        >
          <div className={clsx(classes.arrow, classes.left)}>
            <FaChevronLeft className={classes.arrow} />
          </div>
        </li>
      )}
      {isMobile ? (
        <>
          <li
            className={clsx(
              classes.paginationItem,
              currentPage === 1 && classes.disabled
            )}
            onClick={onPrevious}
          >
            <div className={clsx(classes.arrow, classes.left)}>
              <FaChevronLeft className={classes.arrow} />
            </div>
          </li>
          <li
            className={clsx(
              classes.paginationItem,
              currentPage === lastPage && classes.disabled
            )}
            onClick={onNext}
          >
            <div className={clsx(classes.arrow, classes.right)}>
              <FaChevronRight className={classes.arrow} />
            </div>
          </li>
        </>
      ) : (
        paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={"pag-dot-" + idx}
                className={clsx(classes.paginationItem, "pagination-item dots")}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={"pag-dot-" + idx}
              className={clsx(
                classes.paginationItem,
                pageNumber === currentPage && classes.active
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })
      )}
      {!isMobile && (
        <li
          className={clsx(
            classes.paginationItem,
            classes.dekstopArrow,
            currentPage === lastPage && classes.disabled
          )}
          onClick={onNext}
        >
          <div className={clsx(classes.arrow, classes.right)}>
            <FaChevronRight className={classes.arrow} />
          </div>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
