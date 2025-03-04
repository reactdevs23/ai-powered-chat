import Modal from "components/common/Modal/Modal";
import classes from "./ManageAccountLayout.module.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
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
  const [isModalActive, setIsModalActive] = useState(true);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <Modal
      isActive={isModalActive}
      onClose={() => setIsModalActive(false)}
      heading="Manage Account"
    >
      <div className={classes.wrapper}>
        <div className={classes.navItems}>
          {navItems.map(({ navItem, to }, id) => {
            return (
              <div
                key={"manage-account-nav-item-" + id}
                className={clsx(classes.navItems)}
                onClick={() => setIsSidebarActive(false)}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) => {
                    return clsx(isActive && classes.active, classes.navItem);
                  }}
                >
                  {navItem}
                </NavLink>
              </div>
            );
          })}
        </div>
        <Outlet />
      </div>
    </Modal>
  );
};
export default ManageAccountLayout;
