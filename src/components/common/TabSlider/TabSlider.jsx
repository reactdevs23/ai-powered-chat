import React, { useEffect, useRef } from "react";
import classes from "./TabSlider.module.css";
import clsx from "clsx";

const TabSlider = ({ tabs, activeTab, setActiveTab }) => {
  const navbarRef = useRef(null);
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const container = navbarContainerRef.current;
    const activeElement = navbar.children[activeTab];

    if (activeElement) {
      const containerWidth = container.offsetWidth;
      const elementWidth = activeElement.offsetWidth;
      const elementLeft = activeElement.offsetLeft;
      const elementRight = elementLeft + elementWidth;
      const scrollLeft = container.scrollLeft;

      // Ensure the active tab is always fully visible
      if (elementLeft < scrollLeft) {
        // If the tab is partially or fully hidden to the left
        container.scrollTo({
          left: elementLeft - 10, // Small padding
          behavior: "smooth",
        });
      } else if (elementRight > scrollLeft + containerWidth) {
        // If the tab is partially or fully hidden to the right
        container.scrollTo({
          left: elementRight - containerWidth + 10, // Small padding
          behavior: "smooth",
        });
      } else {
        // If the active tab is already visible but needs centering
        const scrollPosition =
          elementLeft - containerWidth / 2 + elementWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab]);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const scrollLeftStart = navbarContainerRef.current.scrollLeft;

    const handleTouchMove = (moveEvent) => {
      const touchMove = moveEvent.touches[0].clientX;
      const touchDiff = touchStartX - touchMove;
      navbarContainerRef.current.scrollLeft = scrollLeftStart + touchDiff;
      moveEvent.preventDefault(); // Prevent default scroll behavior
    };

    const handleTouchEnd = () => {
      navbarContainerRef.current.removeEventListener(
        "touchmove",
        handleTouchMove
      );
      navbarContainerRef.current.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };

    navbarContainerRef.current.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    navbarContainerRef.current.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      className={classes.tabContainer}
      ref={navbarContainerRef}
      onTouchStart={handleTouchStart}
    >
      <nav className={classes.tabs} ref={navbarRef}>
        {tabs?.map((tab, index) => (
          <button
            key={index}
            className={clsx(classes.tab, {
              [classes.activeTab]: index === activeTab,
            })}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabSlider;
