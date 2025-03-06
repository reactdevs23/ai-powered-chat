import React, { useState } from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";

const Tabs = ({ tabs, activeTab, setActiveTab, className, sm }) => {
  return (
    <div className={clsx(classes.tabs, className, sm && classes.sm)}>
      {tabs.map((tab, i) => (
        <button
          className={clsx(classes.tab, activeTab === tab && classes.activeTab)}
          key={i}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
