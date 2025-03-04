import Modal from "components/common/Modal/Modal";
import classes from "./ManageAccountLayout.module.css";
import { useState } from "react";
import { PiSidebar } from "react-icons/pi";

import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { devider, devider2 } from "images";
import { Heading } from "components/common";
import { IoClose } from "react-icons/io5";
const navItems = [
  {
    navItem: "Profile",
    to: "/manage-account/profile",
  },
  {
    navItem: "Security",
    to: "/manage-account/security",
  },
  {
    navItem: "Subscription",

    to: "/manage-account/subscription",
  },
  {
    navItem: "Chat Data",

    to: "/manage-account/chat-data",
  },
];

const ManageAccountLayout = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <Modal
      className={classes.modal}
      isActive={true}
      onClose={() => {}}
      noHeading
    >
      <div className={clsx(classes.header)}>
        {isSidebarActive ? (
          <button
            onClick={() => setIsSidebarActive((prev) => !prev)}
            className={classes.sidebarCloseIcon}
          >
            <IoClose />
          </button>
        ) : (
          <button
            onClick={() => setIsSidebarActive((prev) => !prev)}
            className={classes.sidebarIcon}
          >
            <PiSidebar />
          </button>
        )}

        <Heading primitive50 medium lg>
          Manage Account
        </Heading>
        <button
          className={classes.closeButton}
          // onClick={() => setIsModalActive(false)}
        >
          <IoClose className={classes.closeIcon} />
        </button>
        <img src={devider} alt="#" className={classes.devider2} />
      </div>
      <div className={classes.wrapper}>
        <div
          className={clsx(classes.navItems, isSidebarActive && classes.sidebar)}
        >
          {navItems.map(({ navItem, to }, id) => {
            return (
              <NavLink
                key={"manage-account-nav-item-" + id}
                onClick={() => setIsSidebarActive(false)}
                to={to}
                className={({ isActive }) => {
                  return clsx(isActive && classes.active, classes.navItem);
                }}
              >
                {navItem}
              </NavLink>
            );
          })}
          <img src={devider2} alt="#" className={classes.devider} />
        </div>
        <Outlet />
      </div>
    </Modal>
  );
};
export default ManageAccountLayout;
